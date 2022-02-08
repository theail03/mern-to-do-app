import "./taskTable.css";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { Link, useParams } from "react-router-dom";
import { useContext, useEffect } from "react";
import { TaskContext } from "../../context/taskContext/TaskContext";
import { deleteTask, getTasks } from "../../context/taskContext/apiCalls";

export default function TaskTable() {
  const { tasks, dispatch } = useContext(TaskContext);
  const { taskListId } = useParams();

  useEffect(() => {
    getTasks(dispatch, taskListId);
  }, [dispatch, taskListId]);

  const handleDelete = (id) => {
    deleteTask(id, dispatch);
  };

  const columns = [
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
        rows={tasks}
        disableSelectionOnClick
        columns={columns}
        pageSize={8}
        checkboxSelection
        getRowId={(r) => r._id}
      />
    </div>
  );
}
