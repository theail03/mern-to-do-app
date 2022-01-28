import { useContext, useEffect, useState } from "react";
import "./taskForm.css";
import { TaskContext } from "../../context/taskContext/TaskContext";
import { getTask } from "../../context/taskContext/apiCalls";
import TagFields from "../tagFields/TagFields";
import CustomFields from "../customFields/customFields";
import Input from '@material-ui/core/Input';
import FormLabel from '@material-ui/core/FormLabel';
import { useHistory } from "react-router-dom";
import Multiselect from 'multiselect-react-dropdown';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import { Container } from "@material-ui/core";

export default function TaskForm(props) {
  const [task, setTask] = useState({ title: "", tags: [], customFields: [] });
  const history = useHistory();

  const [food, setFood] = useState([{name: "Option 1", id: 1},{name: 'Option 2', id: 2}]);

  const { tasks, dispatch } = useContext(TaskContext);

  const handleTitleChange = (e) => {
    const value = e.target.value;
    setTask({ ...task, [e.target.name]: value });
  };

  const handleTagFieldsChange = (tagFields) => {
    setTask({ ...task, tags: tagFields});
  };

  const handleCustomFieldsChange = (customFields) => {
    setTask({ ...task, customFields: customFields});
  };

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

  const handleSubmit = (e) => {
    e.preventDefault();
    const tags = task.tags.map(i => i.tag);
    const customFields = task.customFields.map(i => i.name);
    // check if title is empty
    if (task.title === "") {
      alert("Please enter a title for your task list");
    } 
    // see if task.tags has any repeated tags
    else if (tags.length !== new Set(tags).size) {
      alert("Please remove repeated tags");
    }
    // see if task.customFields has any repeated custom fields 
    else if (customFields.length !== new Set(customFields).size) {
      alert("Please remove repeated custom fields");
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
                    name="type"
                    value={'string'}
                    onChange={event => console.log(event)}
                >
                    <MenuItem value={'string'}>String</MenuItem>
                    <MenuItem value={'integer'}>Integer</MenuItem>
                </Select>
            </div>  
            <div className="addProductItem">
                <FormLabel className="formLabel">Tags</FormLabel>
                <Multiselect
                  selectedValues={[{name: "Option 1", id: 1}]}
                  onRemove={(event) => {
                    console.log(event);
                  }}
                  onSelect={(event) => {
                    console.log(event);
                  }}
                  options={food}
                  avoidHighlightFirstOption={true}
                  displayValue="name"
                  placeholder="Choose tags"
                />
            </div>           
          </div>
          <div className="formRight">
            <CustomFields handleCustomFieldsChange={handleCustomFieldsChange} />
          </div>
        </div>
      </form>
  );
}