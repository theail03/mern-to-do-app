// To do: put data grid css in a global css file
import "./taskListTable.css";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { TaskListContext } from "../../context/taskListContext/TaskListContext";
import { deleteTaskList, getTaskLists } from "../../context/taskListContext/apiCalls";
import * as XLSX from 'xlsx';
import { TaskContext } from "../../context/taskContext/TaskContext";
import { getTasks } from "../../context/taskContext/apiCalls";

export default function TaskListTable() {
  const { taskLists, dispatch } = useContext(TaskListContext);
  const { tasks: exportTasks, dispatch: dispatchExportTasks } = useContext(TaskContext);
  const [ exporting, setExporting ] = useState(false);
  const [ exportTaskListId, setExportTaskListId ] = useState(null);

  useEffect(() => {
    getTaskLists(dispatch);
  }, []);

  const handleDelete = (id) => {
    window.confirm("Are you sure you want to delete this task list?") &&
    deleteTaskList(id, dispatch);
  };

  const handleExport = async (id) => {
    if (window.confirm("Are you sure you want to export this task list?")) {
      await getTasks(dispatchExportTasks, id);
      setExportTaskListId(id);
      setExporting(true); 
    }
  };

  useEffect(() => {
    if (exporting) {
      const taskList = taskLists.find(taskList => taskList._id === exportTaskListId); 
      const taskRows = exportTasks.map(task => { 
        const row = { title: task.title };

        /* get tag names from taskList */
        row.tags = task.tags.map(taskTag => 
          taskList.tags.find(taskListTag => taskTag === taskListTag.id).tag).join(";");

        taskList.customFields.forEach(cf => {
          row[cf.name] = task.customFields.find(tcf => tcf.id === cf.id).value;
        });
        return row;
      });

      /* Info from https://docs.sheetjs.com/docs/getting-started/example/ */

      /* generate worksheet and workbook */
      const worksheet = XLSX.utils.json_to_sheet(taskRows);
      const workbook = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(workbook, worksheet, taskList.title);

      /* create an XLSX file */
      XLSX.writeFile(workbook, taskList.title + Date.now() + ".xlsx", { compression: true });
      setExporting(false);
    }
  }, [exporting]);

  const columns = [
    { field: "_id", headerName: "ID", width: 190 },
    { field: "title", headerName: "Title", width: 150 },
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

  return (
    <div className="taskTable">
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
