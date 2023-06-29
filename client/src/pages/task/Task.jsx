import { useParams } from 'react-router-dom';
import TaskForm from "../../components/taskForm/TaskForm";
import { updateTask } from "../../context/taskContext/taskApiCalls";
import { Page } from "../../styles/Page.styled";

export default function Task() {
    const { taskId } = useParams();

    const save = (task, dispatch) => {
        updateTask(task, dispatch);
    }

    return (
        <Page>
            <h1>Edit Task</h1>
            <TaskForm taskId={taskId} save={save}/>
        </Page>
    );
}