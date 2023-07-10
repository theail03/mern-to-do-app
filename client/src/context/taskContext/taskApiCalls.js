import axios from "axios";
import {
  createTaskFailure,
  createTaskStart,
  createTaskSuccess,
  deleteTaskFailure,
  deleteTaskStart,
  deleteTaskSuccess,
  getTasksFailure,
  getTasksStart,
  getTasksSuccess,
  getTaskFailure,
  getTaskStart,
  getTaskSuccess,
  updateTaskFailure,
  updateTaskStart,
  updateTaskSuccess
} from "./TaskActions";

// get all tasks from a list without dispatch
export const getTasksWithoutDispatch = async (taskListId) => {
  const res = await axios.get(`${process.env.REACT_APP_API_URL}/tasks/taskList/${taskListId}`, {
    withCredentials: true
  });
  return res;
};

// get all tasks from a list
export const getTasks = async (dispatch, taskListId) => {
  dispatch(getTasksStart());
  try {
    const res = await axios.get(`${process.env.REACT_APP_API_URL}/tasks/taskList/${taskListId}`, {
      withCredentials: true
    });
    dispatch(getTasksSuccess(res.data));
  } catch (err) {
    dispatch(getTasksFailure());
  }
};

// get all tasks
export const getAllTasks = async (dispatch) => {
  dispatch(getTasksStart());
  try {
    const res = await axios.get(`${process.env.REACT_APP_API_URL}/tasks`, {
      withCredentials: true
    });
    dispatch(getTasksSuccess(res.data));
  } catch (err) {
    dispatch(getTasksFailure());
  }
};

// get
export const getTask = async (dispatch, id) => {
  dispatch(getTaskStart());
  try {
    const res = await axios.get(`${process.env.REACT_APP_API_URL}/tasks/${id}`, {
      withCredentials: true
    });
    dispatch(getTaskSuccess(res.data));
  } catch (err) {
    dispatch(getTaskFailure());
  }
};

// create
export const createTask = async (task, dispatch) => {
  dispatch(createTaskStart());
  try {
    const res = await axios.post(`${process.env.REACT_APP_API_URL}/tasks`, task, {
      withCredentials: true
    });
    dispatch(createTaskSuccess(res.data));
  } catch (err) {
    dispatch(createTaskFailure());
  }
};

// update
export const updateTask = async (task, dispatch) => {
  dispatch(updateTaskStart());
  try {
    const res = await axios.put(`${process.env.REACT_APP_API_URL}/tasks/${task._id}`, task, {
      withCredentials: true
    });
    dispatch(updateTaskSuccess(res.data));
  } catch (err) {
    dispatch(updateTaskFailure());
  }
};

// delete
export const deleteTask = async (id, dispatch) => {
  dispatch(deleteTaskStart());
  try {
    await axios.delete(`${process.env.REACT_APP_API_URL}/tasks/${id}`, {
      withCredentials: true
    });
    dispatch(deleteTaskSuccess(id));
  } catch (err) {
    dispatch(deleteTaskFailure());
  }
};
