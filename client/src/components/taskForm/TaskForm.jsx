import { useContext, useEffect, useState } from "react";
import { TaskContext } from "../../context/taskContext/TaskContext";
import { TaskListContext } from "../../context/taskListContext/TaskListContext";
import { getTask } from "../../context/taskContext/taskApiCalls";
import { getTaskLists } from "../../context/taskListContext/taskListApiCalls";
import TaskCustomFields from "../taskCustomFields/TaskCustomFields";
import { useHistory } from "react-router-dom";
import Multiselect from 'multiselect-react-dropdown';
import MenuItem from '@material-ui/core/MenuItem';
import { 
  SelectTaskList, 
  TaskFormStyled, 
  TaskFormLabel, 
  TaskFormLeft, 
  TaskFormRight, 
  TaskFormSection, 
  TaskInfo, 
  TaskTitleAndCreate, 
  TaskTitleInput 
} from "./TaskForm.styled";
import { AuthContext } from "../../context/authContext/AuthContext";
import { getTaskDummy } from "../../context/taskContext/taskDummyCalls";
import { getTaskListsDummy } from "../../context/taskListContext/taskListDummyCalls";
import { colors, multiselectStyles } from "../../constants/Theme";
import { SimpleButton } from "../../styles/SimpleButton.styled";
import { FormLabelStyled } from "../../styles/FormLabel.styled";

export default function TaskForm(props) {
  const [task, setTask] = useState({ title: "", tags: [], customFields: [], taskList: "" });
  const history = useHistory();

  const [tags, setTags] = useState([]);
  const [customFields, setCustomFields] = useState([]);

  const { task: taskFromContext, dispatch } = useContext(TaskContext);

  const { taskLists, dispatch: dispatchTaskList } = useContext(TaskListContext);

  const { user } = useContext(AuthContext);

  const handleTitleChange = (e) => {
    const value = e.target.value;
    setTask({ ...task, [e.target.name]: value });
  };

  const handleTagFieldsChange = (tagFields) => {
    setTask({ ...task, tags: tagFields});
  };

  const handleCustomFieldsChange = (id, event) => {
    const newCustomFields = task.customFields.map(taskCustomField => {
      if(id === taskCustomField.id) {
        taskCustomField[event.target.name] = event.target.value;
      }
      return taskCustomField;
    });
    setTask({ ...task, customFields: newCustomFields});
  };

  const handleTaskListChange = (e) => {
    const value = e.target.value;
    // select task list
    const taskList = taskLists.find(i => i._id === value);
    setTask({ ...task, taskList: value, tags: [], customFields: taskList.customFields.map(i => { return { id: i.id, value: null} }) });
    setTags(taskList.tags);
    setCustomFields(taskList.customFields);
  };

  const handleTagsChange = (e) => {
    setTask({ ...task, tags: e.map(i => i.id)});
  }

  useEffect(async () => {
    user ? await getTaskLists(dispatchTaskList) : getTaskListsDummy(dispatchTaskList);
    if (props.taskId) {
      user ? await getTask(dispatch, props.taskId) : getTaskDummy(dispatch, props.taskId);
    }
    if (props.taskListId) {
      const taskList = taskLists.find(i => i._id === props.taskListId);
      if (taskList) {
        setTask({ ...task, taskList: props.taskListId, tags: [], customFields: taskList.customFields.map(i => { return { id: i.id, value: null} }) });
        setTags(taskList.tags);
        setCustomFields(taskList.customFields);
      }
    }
  }, []);

  useEffect(() => {
    // set only title, tags and customFields
    if (taskFromContext && props.taskId === taskFromContext._id) {
      const taskFromDb = taskFromContext;
      setTask(taskFromDb);
      const taskList = taskLists.find(i => i._id === taskFromDb.taskList);
      if (taskList) {
        setTags(taskList.tags);
        setCustomFields(taskList.customFields);
      }
    }
  }, [taskFromContext, taskLists]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // check if title is empty
    if (task.title === "") {
      alert("Please enter a title for your task list");
    } 
    // check if task list is empty
    else if (task.taskList === "") {
      alert("Please select a task list");
    }
    else {
      // check for each number custom field if it is on range
      let valid = true;
      task.customFields.forEach(taskCustomField => {
        const customField = customFields.find(customField => customField.id === taskCustomField.id);
        if (customField.type === "integer") {
          // parse int
          taskCustomField.value = parseInt(taskCustomField.value);
          if (
            (customField.min !== null && taskCustomField.value < customField.min) || 
            (customField.max !== null && taskCustomField.value > customField.max)
          ) {
            valid = false;
            if (customField.min === null) {
              alert(`Please enter a number less than ${customField.max} for ${customField.name}`);
            } else if (customField.max === null) {
              alert(`Please enter a number greater than ${customField.min} for ${customField.name}`);
            } else {
              alert(`Please enter a number between ${customField.min} and ${customField.max} for ${customField.name}`);
            }
          }
        }
      });
      if (valid) {
        props.save(task, dispatch);
        history.push("/");
      }
    }
  };

  return (
      <TaskFormStyled>
        <TaskFormSection>
          <FormLabelStyled>Name</FormLabelStyled>
          <TaskTitleAndCreate>
            <TaskTitleInput
              name="title"
              type="text"
              value={task.title}
              onChange={handleTitleChange}
              disabled={props.viewOnly}
            />
            { !props.viewOnly && 
              <SimpleButton backgroundColor={colors.color5} onClick={handleSubmit}>
                Save
              </SimpleButton>
            }
          </TaskTitleAndCreate>
        </TaskFormSection>
        <TaskInfo>
          <TaskFormLeft>    
            <TaskFormSection>
                <TaskFormLabel>Task List</TaskFormLabel>
                <SelectTaskList
                    name="taskList"
                    onChange={handleTaskListChange}
                    value={task.taskList}
                    disabled={props.viewOnly}
                >
                    {taskLists.map(taskList => (
                        <MenuItem value={taskList._id}>{taskList.title}</MenuItem>
                    ))}
                </SelectTaskList>
            </TaskFormSection>  
            <TaskFormSection>
                <TaskFormLabel>Tags</TaskFormLabel>
                <Multiselect
                  // set selected values if tag id is in task.tags
                  selectedValues={tags.filter(i => task.tags.includes(i.id))}
                  onRemove={handleTagsChange}
                  onSelect={handleTagsChange}
                  options={tags}
                  avoidHighlightFirstOption={true}
                  displayValue="tag"
                  placeholder="Choose tags"
                  disable={props.viewOnly}
                  style={multiselectStyles}
                />
            </TaskFormSection>           
          </TaskFormLeft>
          <TaskFormRight>
            <TaskCustomFields 
              customFields={customFields} 
              task={task} 
              handleCustomFieldsChange={handleCustomFieldsChange} 
              viewOnly={props.viewOnly}
            />
          </TaskFormRight>
        </TaskInfo>
      </TaskFormStyled>
  );
}