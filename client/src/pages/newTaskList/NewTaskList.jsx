import "./newTaskList.css";
import TaskListForm from "../../components/taskListForm/TaskListForm";
import { createTaskList } from "../../context/taskListContext/apiCalls";

export default function NewTaskList() {
  const save = (taskList, dispatch) => {
    createTaskList(taskList, dispatch);
  }

  return (
    <div className="newProduct">
      <h1 className="addProductTitle">New Task List</h1>
      <TaskListForm save={save}/>
    </div>
  );
}
