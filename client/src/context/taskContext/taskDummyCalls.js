import { dummyTasks } from "../../data/dummyTasks";
import {
  getTasksFailure,
  getTasksStart,
  getTasksSuccess,
  getTaskFailure,
  getTaskStart,
  getTaskSuccess
} from "./TaskActions";

// get all tasks from a list without dispatch
export const getTasksWithoutDispatchDummy = (taskListId) => {
  const tasks = dummyTasks.filter((task) => task.taskList === taskListId);
  return tasks;
};

// get all tasks from a list
export const getTasksDummy = (dispatch, taskListId) => {
  dispatch(getTasksStart());
  try {
    const tasks = dummyTasks.filter((task) => task.taskList === taskListId);
    dispatch(getTasksSuccess(tasks));
  } catch (err) {
    dispatch(getTasksFailure());
  }
};

// get all tasks
export const getAllTasksDummy = (dispatch) => {
  dispatch(getTasksStart());
  try {
    const tasks = dummyTasks;
    dispatch(getTasksSuccess(tasks));
  } catch (err) {
    dispatch(getTasksFailure());
  }
};

// get
export const getTaskDummy = (dispatch, id) => {
  dispatch(getTaskStart());
  try {
    const task = dummyTasks.find((task) => task._id === id);
    dispatch(getTaskSuccess(task));
  } catch (err) {
    dispatch(getTaskFailure());
  }
};
