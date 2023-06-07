import "./taskList.css";
import { useParams } from 'react-router-dom';
import TaskListForm from "../../components/taskListForm/TaskListForm";
import { updateTaskListAndTasks } from "../../context/taskListContext/taskListApiCalls";
import { useContext } from "react";
import { TaskContext } from "../../context/taskContext/TaskContext";
import { getTasks } from "../../context/taskContext/taskApiCalls";

export default function TaskList() {
    const { taskListId } = useParams();
    const { tasks, dispatch: dispatchTask } = useContext(TaskContext);

    const save = async (taskList, dispatch) => {
        await getTasks(dispatchTask, taskListId);
        // rempve tags and custom fields that are no longer in taskList from tasks
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
        <div className="editTaskList">
            <h1>Edit Task List</h1>
            <TaskListForm taskListId={taskListId} save={save}/>
        </div>
    );
}