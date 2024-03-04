import { Link, useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { TaskContext } from "../../context/taskContext/TaskContext";
import { TaskListContext } from "../../context/taskListContext/TaskListContext";
import { deleteTask, getTasks } from "../../context/taskContext/taskApiCalls";
import { getTaskList } from "../../context/taskListContext/taskListApiCalls";
import { DataGridStyled, DeleteButton, EditButton, SeeButton, TableActions } from "../../styles/Table.styled";
import Multiselect from 'multiselect-react-dropdown';
import { AuthContext } from "../../context/authContext/AuthContext";
import { getTasksDummy } from "../../context/taskContext/taskDummyCalls";
import { getTaskListDummy } from "../../context/taskListContext/taskListDummyCalls";
import TooltipCell from "../../components/tooltipCell/TooltipCell";
import { multiselectStyles } from "../../constants/Theme";
import { Page } from "../../styles/Page.styled";
import { LinkStyled } from "../../styles/Link.styled";
import { ActionButton } from "../../styles/ActionButton.styled";

export default function TaskTable() {
  const { tasks, dispatch } = useContext(TaskContext);
  const { taskListId } = useParams();
  const { taskList: taskListFromContext, dispatch: dispatchTaskLists } = useContext(TaskListContext);
  const [ taskList, setTaskList ] = useState([]);
  const [ tableColumns, setTableColumns ] = useState([]);
  const [ tags, setTags ] = useState([]);
  const { user } = useContext(AuthContext);

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
        task.tagNames = tagNames.map(tag => tag.tag).join(", ");
      }
    }
    return task;
  }

  useEffect(async () => {
    if (user) {
      // the await is necessary to avoid an error where the user gets logged out in vercel when 2 api calls are made at the same time
      await getTasks(dispatch, taskListId);
      await getTaskList(dispatchTaskLists, taskListId);
    } else {
      getTasksDummy(dispatch, taskListId);
      getTaskListDummy(dispatchTaskLists, taskListId);
    }
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
            width: 200,
            renderCell: (params) => {
              return (
                <TooltipCell data={params.row[customField.id]} />
              );
            }
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

  const handleTagsChange = (e) => {
    setTags(e.map(tag => tag.id));
  }

  const defaultColumns = [
    { field: "_id", headerName: "ID", width: 190,
      renderCell: (params) => {
        return (
          <TooltipCell data={params.row._id} cellType="link" pathname={"/taskView/" + params.row._id}/>
        );
      }
    },
    { field: "title", headerName: "Title", width: 150,
      renderCell: (params) => {
        return (
          <TooltipCell data={params.row.title} cellType="text" />
        );
      }
    },
    { field: "tagNames", headerName: "Tags", width: 200,
      renderCell: (params) => {
        return (
          <TooltipCell data={params.row.tagNames} cellType="text" />
        );
      }
    },
    { field: "createdAt", headerName: "Created At", width: 200,
      renderCell: (params) => {
        return (
          <TooltipCell data={params.row.createdAt} cellType="text" />
        );
      }
    },
    { field: "updatedAt", headerName: "Updated At", width: 200,
      renderCell: (params) => {
        return (
          <TooltipCell data={params.row.updatedAt} cellType="text" />
        );
      }
    },
    {
      field: "action",
      headerName: "Action",
      width: 140,
      renderCell: (params) => {
        return (
          <>
            <Link
              to={{ pathname: "/taskView/" + params.row._id }}
            >
              <SeeButton/>
            </Link>
            <Link
              to={{ pathname: "/task/" + params.row._id }}
            >
              <EditButton>Edit</EditButton>
            </Link>
            {/* the <span> tags are for keeping the icons aligned */}
            <span>
              <DeleteButton
                onClick={() => handleDelete(params.row._id)}
              />
            </span>
          </>
        );
      },
    },
  ];

  return (
    <Page>
      <h1>{taskList.title}</h1>
      <TableActions>
        <Multiselect
          selectedValues={taskList.tags?.filter(taskListTag => tags.includes(taskListTag.id))}
          onRemove={handleTagsChange}
          onSelect={handleTagsChange}
          options={taskList.tags}
          avoidHighlightFirstOption={true}
          displayValue="tag"
          placeholder="Filter by tags"
          style={multiselectStyles}
        />
        <LinkStyled
          to={{ pathname: "/newTask/" + taskListId }}
        >
          <ActionButton onClick={() => {}}>
            Create Task
          </ActionButton>
        </LinkStyled>
      </TableActions>
      <DataGridStyled
        rows={tasks.filter(task => {
          // filter tasks by tags
          if (tags.length > 0) {
            return tags.every(tag => task.tags.includes(tag));
          }
          return true;
        }).map(transformTask)}
        disableSelectionOnClick
        columns={tableColumns}
        pageSize={8}
        getRowId={(r) => r._id}
      />
    </Page>
  );
}
