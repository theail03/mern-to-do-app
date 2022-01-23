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
  const [taskList, setTaskList] = useState(null);
  const history = useHistory()

  const { dispatch } = useContext(TaskListContext);

  const handleTitleChange = (e) => {
    const value = e.target.value;
    setTaskList({ ...taskList, [e.target.name]: value });
  };

  const handleTagFieldsChange = (tagFields) => {
    setTaskList({ ...taskList, tags: tagFields});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createTaskList(taskList, dispatch);
    history.push("/");
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
            <CustomFields />
          </div>
        </div>
      </form>
    </div>
  );
}
