import "./taskTable.css";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { Link, useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { TaskContext } from "../../context/taskContext/TaskContext";
import { TaskListContext } from "../../context/taskListContext/TaskListContext";
import { deleteTask, getTasks } from "../../context/taskContext/apiCalls";
import { getTaskList } from "../../context/taskListContext/apiCalls";

export default function TaskTable() {
  const { tasks, dispatch } = useContext(TaskContext);
  const { taskListId } = useParams();
  const { taskLists, dispatch: dispatchTaskLists } = useContext(TaskListContext);
  const [ taskList, setTaskList ] = useState([]);
  const [ tableColumns, setTableColumns ] = useState([]);

  const transformCustomFields = (task) => {
    task.customFields.forEach(customField => {
      // append custom field to task
      task[customField.id] = customField.value;
    });
    return task;
  }

  useEffect(() => {
    getTasks(dispatch, taskListId);
  }, [dispatch, taskListId]);

  useEffect(() => {
    getTaskList(dispatchTaskLists, taskListId);
  }, []);

  useEffect(() => {
    if (taskLists) {
      const taskList = taskLists[0];
      setTaskList(taskList);
    }
  }, [taskLists]);

  useEffect(() => { 
    if (taskList) {
      // transform custom fields into a format that DataGrid can use
      if (taskList.customFields) {
        const customFields = taskList.customFields.map(customField => {
          return {
            field: customField.id,
            headerName: customField.name,
            width: 200
          };
        });
        // set the columns for the DataGrid based on default columns and custom fields
        setTableColumns([
          ...defaultColumns,
          ...customFields
        ]);
      }
    }
  }, [taskList]);

  const handleDelete = (id) => {
    console.log(tasks);
    window.confirm("Are you sure you want to delete this task?") &&
    deleteTask(id, dispatch);
  };

  const defaultColumns = [
    { field: "_id", headerName: "ID", width: 90 },
    { field: "title", headerName: "Title", width: 150 },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link
              to={{ pathname: "/task/" + params.row._id }}
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
        rows={tasks.map(transformCustomFields)}
        disableSelectionOnClick
        columns={tableColumns}
        pageSize={8}
        checkboxSelection
        getRowId={(r) => r._id}
      />
    </div>
  );
}
