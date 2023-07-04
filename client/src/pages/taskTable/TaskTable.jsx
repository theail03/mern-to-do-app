import { DataGrid } from "@material-ui/data-grid";
import { Link, useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { TaskContext } from "../../context/taskContext/TaskContext";
import { TaskListContext } from "../../context/taskListContext/TaskListContext";
import { deleteTask, getTasks } from "../../context/taskContext/taskApiCalls";
import { getTaskList } from "../../context/taskListContext/taskListApiCalls";
import { DeleteButton, EditButton, Table, TableActions, TableActionsButton } from "../../styles/Table.styles";

export default function TaskTable() {
  const { tasks, dispatch } = useContext(TaskContext);
  const { taskListId } = useParams();
  const { taskList: taskListFromContext, dispatch: dispatchTaskLists } = useContext(TaskListContext);
  const [ taskList, setTaskList ] = useState([]);
  const [ tableColumns, setTableColumns ] = useState([]);

  const transformTask = (task) => {
    task.customFields.forEach(customField => {
      // append custom field to task
      task[customField.id] = customField.value;
    });
    if (taskList){
      // get tag names from taskList that are in task
      if (taskList.tags) {
        const tagNames = taskList.tags.filter(tag => task.tags.includes(tag.id));
        // append tag names to task
        task.tagNames = tagNames.map(tag => tag.tag);
      }
    }
    return task;
  }

  useEffect(() => {
    getTasks(dispatch, taskListId);
  }, [dispatch, taskListId]);

  useEffect(() => {
    getTaskList(dispatchTaskLists, taskListId);
  }, []);

  useEffect(() => {
    if (taskListFromContext) {
      setTaskList(taskListFromContext);
    }
  }, [taskListFromContext]);

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
    window.confirm("Are you sure you want to delete this task?") &&
    deleteTask(id, dispatch);
  };

  const defaultColumns = [
    { field: "_id", headerName: "ID", width: 190 },
    { field: "title", headerName: "Title", width: 150 },
    { field: "tagNames", headerName: "Tags", width: 200 },
    { field: "createdAt", headerName: "Created At", width: 200 },
    { field: "updatedAt", headerName: "Updated At", width: 200 },
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
              <EditButton>Edit</EditButton>
            </Link>
            <DeleteButton
              onClick={() => handleDelete(params.row._id)}
            />
          </>
        );
      },
    },
  ];

  return (
    <Table>
      <TableActions>
        <TableActionsButton backgroundColor="lightskyblue" onClick={() => {}}>
          Create Task
        </TableActionsButton>
      </TableActions>
      <DataGrid
        rows={tasks.map(transformTask)}
        disableSelectionOnClick
        columns={tableColumns}
        pageSize={8}
        getRowId={(r) => r._id}
      />
    </Table>
  );
}
