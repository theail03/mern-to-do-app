import { useContext, useState } from "react";
import "./newTaskList.css";
import { TaskListContext } from "../../context/taskListContext/TaskListContext";
import { createTaskList } from "../../context/taskListContext/apiCalls";
import TagFields from "../../components/tagFields/TagFields";
import CustomFields from "../../components/customFields/customFields";
import Input from '@material-ui/core/Input';
import FormLabel from '@material-ui/core/FormLabel';
import { useHistory } from "react-router-dom";

export default function NewTaskList() {
  const [taskList, setTaskList] = useState({ title: "", tags: [], customFields: [] });
  const history = useHistory()

  const { dispatch } = useContext(TaskListContext);

  const handleTitleChange = (e) => {
    const value = e.target.value;
    setTaskList({ ...taskList, [e.target.name]: value });
  };

  const handleTagFieldsChange = (tagFields) => {
    setTaskList({ ...taskList, tags: tagFields});
  };

  const handleCustomFieldsChange = (customFields) => {
    setTaskList({ ...taskList, customFields: customFields});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const tags = taskList.tags.map(i => i.tag);
    const customFields = taskList.customFields.map(i => i.name);
    // check if title is empty
    if (taskList.title === "") {
      alert("Please enter a title for your task list");
    } 
    // see if taskList.tags has any repeated tags
    else if (tags.length !== new Set(tags).size) {
      alert("Please remove repeated tags");
    }
    // see if taskList.customFields has any repeated custom fields 
    else if (customFields.length !== new Set(customFields).size) {
      alert("Please remove repeated custom fields");
    }
    else {
      createTaskList(taskList, dispatch);
      history.push("/");
    }
  };

  return (
    <div className="newProduct">
      <h1 className="addProductTitle">New Task List</h1>
      <form className="addProductForm">
        <div className="addProductItem">
          <FormLabel>Title</FormLabel>
          <div className="titleAndCreate">
            <Input
              className="titleInput"
              name="title"
              type="text"
              onChange={handleTitleChange}
            />
            <button className="addProductButton" onClick={handleSubmit}>
              Create
            </button>
          </div>
        </div>
        <div className="tagsAndCustomFields">
          <div className="formLeft">
            <TagFields handleTagFieldsChange={handleTagFieldsChange} />
          </div>
          <div className="formRight">
            <CustomFields handleCustomFieldsChange={handleCustomFieldsChange} />
          </div>
        </div>
      </form>
    </div>
  );
}
