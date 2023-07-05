import { useParams } from 'react-router-dom';
import TaskListForm from "../../components/taskListForm/TaskListForm";
import { updateTaskListAndTasks } from "../../context/taskListContext/taskListApiCalls";
import { useContext } from "react";
import { TaskContext } from "../../context/taskContext/TaskContext";
import { getTasksWithoutDispatch } from "../../context/taskContext/taskApiCalls";
import { Page } from "../../styles/Page.styled";

export default function TaskList() {
    const { taskListId } = useParams();
    const { dispatch: dispatchTask } = useContext(TaskContext);

    const save = async (taskList, dispatch) => {
        const tasks = (await getTasksWithoutDispatch(taskListId)).data;
        // remove tags and custom fields that are no longer in taskList from tasks
        tasks.forEach(task => {
            task.tags = task.tags.filter(tag => taskList.tags.map(tag => tag.id).includes(tag));
            task.customFields = task.customFields.filter(customField => 
                taskList.customFields.map(customField => customField.id).includes(customField.id));
        });
        // add new custom fields to tasks
        taskList.customFields.forEach(customField => {
            tasks.forEach(task => {
                if (!task.customFields.map(customField => customField.id).includes(customField.id)) {
                    task.customFields.push({
                        id: customField.id,
                        value: null
                    });
                }
            });
        });
        updateTaskListAndTasks(taskList, dispatch, tasks, dispatchTask);
    }

    return (
        <Page>
            <h1>Edit Task List</h1>
            <TaskListForm taskListId={taskListId} save={save}/>
        </Page>
    );
}