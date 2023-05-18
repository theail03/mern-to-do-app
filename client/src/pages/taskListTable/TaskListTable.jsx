// To do: put data grid css in a global css file
import "./taskListTable.css";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { useContext, useEffect } from "react";
import { TaskListContext } from "../../context/taskListContext/TaskListContext";
import { deleteTaskList, getTaskLists } from "../../context/taskListContext/apiCalls";

export default function TaskListTable() {
  const { taskLists, dispatch } = useContext(TaskListContext);

  useEffect(() => {
    getTaskLists(dispatch);
  }, []);

  const handleDelete = (id) => {
    window.confirm("Are you sure you want to delete this task list?") &&
    deleteTaskList(id, dispatch);
  };

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
            <button className="taskTableExport">Export</button>
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
