import { useContext, useEffect, useState } from "react";
import "./taskForm.css";
import { TaskContext } from "../../context/taskContext/TaskContext";
import { TaskListContext } from "../../context/taskListContext/TaskListContext";
import { getTask } from "../../context/taskContext/taskApiCalls";
import { getTaskLists } from "../../context/taskListContext/taskListApiCalls";
import TagFields from "../tagFields/TagFields";
import TaskCustomFields from "../taskCustomFields/TaskCustomFields";
import Input from '@material-ui/core/Input';
import FormLabel from '@material-ui/core/FormLabel';
import { useHistory } from "react-router-dom";
import Multiselect from 'multiselect-react-dropdown';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import { Container } from "@material-ui/core";

export default function TaskForm(props) {
  const [task, setTask] = useState({ title: "", tags: [], customFields: [], taskList: "" });
  const history = useHistory();

  const [tags, setTags] = useState([]);
  const [customFields, setCustomFields] = useState([]);

  const { tasks, dispatch } = useContext(TaskContext);

  const { taskLists, dispatch: dispatchTaskList } = useContext(TaskListContext);

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

  useEffect(() => {
    if (props.taskId) {
      getTask(dispatch, props.taskId);
    }
  }, []);

  useEffect(() => {
    getTaskLists(dispatchTaskList);
  }, []);

  useEffect(() => {
    // set only title, tags and customFields
    if (tasks[0] && props.taskId === tasks[0]._id) {
      const taskFromDb = tasks[0];
      setTask(taskFromDb);
      const taskList = taskLists.find(i => i._id === taskFromDb.taskList);
      if (taskList) {
        setTags(taskList.tags);
        setCustomFields(taskList.customFields);
      }
    }
  }, [tasks, taskLists]);

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
      <form className="taskForm">
        <div className="taskFormSection">
          <FormLabel>Name</FormLabel>
          <div className="taskTitleAndCreate">
            <Input
              className="taskTitleInput"
              name="title"
              type="text"
              value={task.title}
              onChange={handleTitleChange}
            />
            <button className="taskSaveButton" onClick={handleSubmit}>
              Save
            </button>
          </div>
        </div>
        <div className="taskInfo">
          <div className="taskFormLeft">    
            <div className="taskFormSection">
                <FormLabel className="taskFormLabel">Task List</FormLabel>
                <Select 
                    className="selectTaskList"
                    name="taskList"
                    onChange={handleTaskListChange}
                    value={task.taskList}
                >
                    {taskLists.map(taskList => (
                        <MenuItem value={taskList._id}>{taskList.title}</MenuItem>
                    ))}
                </Select>
            </div>  
            <div className="taskFormSection">
                <FormLabel className="taskFormLabel">Tags</FormLabel>
                <Multiselect
                  // set selected values if tag id is in task.tags
                  selectedValues={tags.filter(i => task.tags.includes(i.id))}
                  onRemove={handleTagsChange}
                  onSelect={handleTagsChange}
                  options={tags}
                  avoidHighlightFirstOption={true}
                  displayValue="tag"
                  placeholder="Choose tags"
                />
            </div>           
          </div>
          <div className="taskFormRight">
            <TaskCustomFields customFields={customFields} task={task} handleCustomFieldsChange={handleCustomFieldsChange} />
          </div>
        </div>
      </form>
  );
}