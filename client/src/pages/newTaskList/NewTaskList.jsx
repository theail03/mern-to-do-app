import { useContext, useState } from "react";
import "./newTaskList.css";
import { TaskListContext } from "../../context/taskListContext/TaskListContext";
import { createTaskList } from "../../context/taskListContext/apiCalls";
import TagFields from "../../components/tagFields/TagFields";
import { useHistory } from "react-router-dom";

export default function NewTaskList() {
  const [taskList, setTaskList] = useState(null);
  const history = useHistory()

  const { dispatch } = useContext(TaskListContext);

  const handleChange = (e) => {
    const value = e.target.value;
    setTaskList({ ...taskList, [e.target.name]: value });
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
        <div className="formLeft">
          <div className="addProductItem">
            <label>Title</label>
            <input
              type="text"
              placeholder="To do list"
              name="title"
              onChange={handleChange}
            />
          </div>
        </div>
        <TagFields />
        <button className="addProductButton" onClick={handleSubmit}>
          Create
        </button>
      </form>
    </div>
  );
}
