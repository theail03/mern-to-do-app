import "./newTask.css";
import TaskForm from "../../components/taskForm/TaskForm";
import { createTask } from "../../context/taskContext/apiCalls";

export default function NewTask() {
  const save = (task, dispatch) => {
    createTask(task, dispatch);
  }

  return (
    <div className="newTask">
      <h1>New Task</h1>
      <TaskForm save={save}/>
    </div>
  );
}
