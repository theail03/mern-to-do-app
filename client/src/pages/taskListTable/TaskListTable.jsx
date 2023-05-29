// To do: put data grid css in a global css file
import "./taskListTable.css";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { TaskListContext } from "../../context/taskListContext/TaskListContext";
import { 
  deleteTaskList, 
  getTaskLists, 
  createTaskListWithTasks
} from "../../context/taskListContext/apiCalls";
import * as XLSX from 'xlsx';
import { TaskContext } from "../../context/taskContext/TaskContext";
import { getTasks, getAllTasks } from "../../context/taskContext/apiCalls";
import { v4 as uuidv4 } from 'uuid';

export default function TaskListTable() {
  const { taskLists, dispatch } = useContext(TaskListContext);
  const { tasks: exportTasks, dispatch: dispatchTasks } = useContext(TaskContext);
  const [ exporting, setExporting ] = useState(false);
  const [ exportingAll, setExportingAll ] = useState(false);
  const [ exportTaskListId, setExportTaskListId ] = useState(null);

  useEffect(() => {
    getTaskLists(dispatch);
  }, []);

  const handleDelete = (id) => {
    window.confirm("Are you sure you want to delete this task list?") &&
    deleteTaskList(id, dispatch);
  };

  /* export a single task list */
  const handleExport = async (id) => {
    if (window.confirm("Are you sure you want to export this task list?")) {
      await getTasks(dispatchTasks, id);
      setExportTaskListId(id);
      setExporting(true); 
    }
  };

  /* export a single task list */
  useEffect(() => {
    if (exporting) {

      /* Info from https://docs.sheetjs.com/docs/getting-started/example/ */
      /* generate workbook */
      const workbook = XLSX.utils.book_new();

      const taskList = taskLists.find(taskList => taskList._id === exportTaskListId); 
      appendTasksToSheet(workbook, [taskList]);

      /* create an XLSX file */
      XLSX.writeFile(workbook, taskList.title + " " + Date.now() + ".xlsx", { compression: true });
      setExporting(false);
    }
  }, [exporting]);

  /* export all task lists */
  const handleExportAll = async () => {
    if (window.confirm("Are you sure you want to export all task lists?")) {
      await getAllTasks(dispatchTasks);
      setExportingAll(true); 
    }
  };

  /* export all task lists */
  useEffect(() => {
    if (exportingAll) {
      const workbook = XLSX.utils.book_new();
      appendTasksToSheet(workbook, taskLists);

      /* create an XLSX file */
      XLSX.writeFile(workbook, "all lists " + Date.now() + ".xlsx", { compression: true });
      setExportingAll(false);
    }
  }, [exportingAll]);

  /* append tasks to a sheet */
  const appendTasksToSheet = (workbook, taskLists) => {
    /* copy task lists to avoid modifying the original array */
    const exportTaskLists = JSON.parse(JSON.stringify(taskLists));
    exportTaskLists.forEach(taskList => {
      const taskRows = exportTasks
        .filter(task => task.taskList === taskList._id)
        .map(task => { 
          const row = { title: task.title };

          /* get tag names from taskList */
          row.tags = task.tags.map(taskTag => 
            taskList.tags.find(taskListTag => taskTag === taskListTag.id).tag).join(",");

          taskList.customFields.forEach(cf => {
            row[cf.name] = task.customFields.find(tcf => tcf.id === cf.id).value;
          });
          return row;
        });

      /* Info from https://docs.sheetjs.com/docs/getting-started/example/ */
      /* generate worksheet and workbook */
      const worksheet = XLSX.utils.json_to_sheet(taskRows);
      /* add number to task list title to avoid duplicate sheet names */
      if (workbook.SheetNames.some(sheetName => sheetName === taskList.title)) {
        let titleNumber = 2;
        while (exportTaskLists.some(tl => tl.title === `${taskList.title} (${titleNumber})`)) {
          titleNumber++;
        }
        taskList.title = `${taskList.title} (${titleNumber})`;
      }
      XLSX.utils.book_append_sheet(workbook, worksheet, taskList.title);
      worksheet['!cols'] = fitToColumn(taskRows);
    });
  };

  const fitToColumn = (rows) => {
    // get maximum length of each column
    const maxLengths = rows.reduce((acc, row) => {
      Object.keys(row).forEach(key => {
        acc[key] = Math.max(acc[key] || 0, Math.max(key.length, row[key]?.toString().length || 0));
      });
      return acc;
    }
    , {});

    // convert to array
    const maxLengthsArray = Object.keys(maxLengths).map(key => maxLengths[key]);
  
    // add 2 to each length for padding
    return maxLengthsArray.map(length => ({ width: length + 2 }));
  };

  const columns = [
    { field: "_id", headerName: "ID", width: 190 },
    { field: "title", headerName: "Title", width: 150 },
    { field: "createdAt", headerName: "Created At", width: 200 },
    { field: "updatedAt", headerName: "Updated At", width: 200 },
    {
      field: "action",
      headerName: "Action",
      width: 270,
      renderCell: (params) => {
        return (
          <>
            <Link
              to={{ pathname: "/tasks/" + params.row._id }}
            >
              <button className="taskTableSeeTasks">See tasks</button>
            </Link>
            <button className="taskTableExport" onClick={() => handleExport(params.row._id)}>Export</button>
            <Link
              to={{ pathname: "/taskList/" + params.row._id }}
            >
              <button className="taskEdit">Edit</button>
            </Link>
            <DeleteOutline
              className="taskDelete"
              onClick={() => handleDelete(params.row._id)}
            />
          </>
        );
      },
    },
  ];

  const handleImport = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onload = (e) => {
      const data = new Uint8Array(e.target.result);
      const workbook = XLSX.read(data, { type: "array" });
      const taskLists = [];
      workbook.SheetNames.forEach(sheetName => {
        const taskList = { title: sheetName, tags: [], customFields: [] };
        const tasks = [];
        const sheet = workbook.Sheets[sheetName];
        const rows = XLSX.utils.sheet_to_json(sheet);

        // get column names from sheet to create custom fields
        const headers = XLSX.utils.sheet_to_json(sheet, { header: 1 })[0];
        headers.forEach(header => {
          if (header !== "title" && header !== "tags") {
            // check if custom field is integer
            const isInt = rows.every(row => Number.isInteger(row[header]) || 
              row[header] === undefined || 
              row[header] === null || 
              row[header] === ""
            ) && rows.some(row => Number.isInteger(row[header]));
            const type = isInt ? "integer" : "string";
            taskList.customFields.push({
              id: uuidv4(),
              name: header,
              type: type
            });
          }
        });

        /* get tags and custom fields */
        rows.forEach(row => {
          Object.keys(row).forEach(key => {
            if (key === "tags") {
              if (row[key] !== "") {
                row[key].split(",").forEach(tag => {
                  if (!taskList.tags.find(taskListTag => taskListTag.tag === tag)) {
                    taskList.tags.push({
                      id: uuidv4(),
                      tag: tag
                    });
                  }
                });
              }
            }
          });
        });

        rows.reverse().forEach(row => {
          const task = { title: row.title, tags: [], customFields: [] };
          Object.keys(row).forEach(key => {
            if (key !== "title") {
              if (key === "tags") {
                if (row[key] !== "") {
                  row[key].split(",").forEach(tag => {
                    task.tags.push(taskList.tags.find(taskListTag => taskListTag.tag === tag).id);
                  });
                }
              } else {
                task.customFields.push({ id: taskList.customFields.find(cf => cf.name === key).id, value: row[key] });
              }
            }
          });
          // add missing custom fields
          taskList.customFields.forEach(cf => {
            if (!task.customFields.find(tcf => tcf.id === cf.id)) {
              task.customFields.push({ id: cf.id, value: null });
            }
          });
          tasks.push(task);
        });
        createTaskListWithTasks(taskList, dispatch, tasks, dispatchTasks);
      });
    };
    reader.readAsArrayBuffer(file);
    /* clear input */
    e.target.value = null;
  };

  return (
    <div className="taskTable">
      <div className="tableActions">
        <button className="simpleButton exportButton" onClick={() => handleExportAll()}>
          Export All Lists
        </button>
        <label htmlFor="importInput" className="simpleButton importButton">
          Import from .xlsx
        </label>
        <input 
          id="importInput" 
          type="file" 
          className="importInput" 
          accept=".xlsx" 
          onChange={(e) => handleImport(e)}
        />
      </div>
      <DataGrid
        rows={taskLists}
        disableSelectionOnClick
        columns={columns}
        pageSize={8}
        getRowId={(r) => r._id}
      />
    </div>
  );
}
