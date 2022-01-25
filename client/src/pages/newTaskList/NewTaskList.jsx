import "./newTaskList.css";
import TaskListForm from "../../components/taskListForm/TaskListForm";

export default function NewTaskList() {
  return (
    <div className="newProduct">
      <h1 className="addProductTitle">New Task List</h1>
      <TaskListForm />
    </div>
  );
}
