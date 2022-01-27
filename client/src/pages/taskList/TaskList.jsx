import "./taskList.css";
import { useParams } from 'react-router-dom';
import TaskListForm from "../../components/taskListForm/TaskListForm";
import { updateTaskList } from "../../context/taskListContext/apiCalls";

export default function TaskList() {
    const { taskListId } = useParams();

    const save = (taskList, dispatch) => {
        updateTaskList(taskList, dispatch);
    }

    return (
        <div className="newProduct">
            <h1 className="addProductTitle">Edit Task List</h1>
            <TaskListForm taskListId={taskListId} save={save}/>
        </div>
    );
}