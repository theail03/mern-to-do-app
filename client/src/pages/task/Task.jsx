import "./task.css";
import { useParams } from 'react-router-dom';
import TaskForm from "../../components/taskForm/TaskForm";
import { updateTask } from "../../context/taskContext/apiCalls";

export default function Task() {
    const { taskId } = useParams();

    const save = (task, dispatch) => {
        updateTask(task, dispatch);
    }

    return (
        <div className="editTask">
            <h1>Edit Task</h1>
            <TaskForm taskId={taskId} save={save}/>
        </div>
    );
}