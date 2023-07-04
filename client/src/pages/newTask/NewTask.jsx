import { useParams } from 'react-router-dom';
import TaskForm from "../../components/taskForm/TaskForm";
import { createTask } from "../../context/taskContext/taskApiCalls";
import { Page } from "../../styles/Page.styled";

export default function NewTask() {  
  const { taskListId } = useParams();

  const save = (task, dispatch) => {
    createTask(task, dispatch);
  }

  return (
    <Page>
      <h1>New Task</h1>
      <TaskForm taskListId={taskListId} save={save}/>
    </Page>
  );
}
