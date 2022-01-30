import { useContext, useEffect, useState } from "react";
import "./taskForm.css";
import { TaskContext } from "../../context/taskContext/TaskContext";
import { TaskListContext } from "../../context/taskListContext/TaskListContext";
import { getTask } from "../../context/taskContext/apiCalls";
import { getTaskLists } from "../../context/taskListContext/apiCalls";
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
  const [task, setTask] = useState({ title: "", tags: [], customFields: [], taskListId: "" });
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
    const newCustomFields = task.customFields.map(i => {
      if(id === i.id) {
        let value = event.target.value;
        if(event.target.type === "number") {
          value = parseInt(value);
        }
        i[event.target.name] = value;
      }
      return i;
    });
    setTask({ ...task, customFields: newCustomFields});
  };

  const handleTaskListChange = (e) => {
    const value = e.target.value;
    // select task list
    const taskList = taskLists.find(i => i._id === value);
    setTask({ ...task, taskListId: value, tags: [], customFields: taskList.customFields.map(i => { return { id: i.id, value: null} }) });
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
    // set only title, tags and customFields
    if (tasks[0]) {
      const taskFromDb = tasks[0];
      setTask(taskFromDb);
    }
  }, [tasks]);

  useEffect(() => {
    getTaskLists(dispatchTaskList);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(task);
    const tags = task.tags.map(i => i.tag);
    const customFields = task.customFields.map(i => i.name);
    // check if title is empty
    if (task.title === "") {
      alert("Please enter a title for your task list");
    } 
    // check if task list is empty
    else if (task.taskListId === "") {
      alert("Please select a task list");
    }
    else {
      props.save(task, dispatch);
      history.push("/");
    }
  };

  return (
      <form className="addProductForm">
        <div className="addProductItem">
          <FormLabel>Name</FormLabel>
          <div className="titleAndCreate">
            <Input
              className="titleInput"
              name="title"
              type="text"
              value={task.title}
              onChange={handleTitleChange}
            />
            <button className="addProductButton" onClick={handleSubmit}>
              Save
            </button>
          </div>
        </div>
        <div className="taskInfo">
          <div className="formLeft">    
            <div className="addProductItem">
                <FormLabel className="formLabel">Task List</FormLabel>
                <Select 
                    className="selectTaskList"
                    name="taskList"
                    onChange={handleTaskListChange}
                >
                    {taskLists.map(taskList => (
                        <MenuItem value={taskList._id}>{taskList.title}</MenuItem>
                    ))}
                </Select>
            </div>  
            <div className="addProductItem">
                <FormLabel className="formLabel">Tags</FormLabel>
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
          <div className="formRight">
            <TaskCustomFields customFields={customFields} task={task} handleCustomFieldsChange={handleCustomFieldsChange} />
          </div>
        </div>
      </form>
  );
}