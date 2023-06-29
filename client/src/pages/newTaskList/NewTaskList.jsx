import TaskListForm from "../../components/taskListForm/TaskListForm";
import { createTaskList } from "../../context/taskListContext/taskListApiCalls";
import { Page } from "../../styles/Page.styled";

export default function NewTaskList() {
  const save = (taskList, dispatch) => {
    createTaskList(taskList, dispatch);
  }

  return (
    <Page>
      <h1>New Task List</h1>
      <TaskListForm save={save}/>
    </Page>
  );
}
