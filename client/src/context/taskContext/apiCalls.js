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

// get all tasks from a list
export const getTasks = async (dispatch, taskListId) => {
  dispatch(getTasksStart());
  try {
    const res = await axios.get(`/tasks/taskList/${taskListId}`, {
      headers: {
        token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
      },
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
    const res = await axios.get(`/tasks`, {
      headers: {
        token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
      },
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
    const res = await axios.get(`/tasks/${id}`, {
      headers: {
        token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
      },
    });
    dispatch(getTaskSuccess([res.data]));
  } catch (err) {
    dispatch(getTaskFailure());
  }
};

// create
export const createTask = async (task, dispatch) => {
  dispatch(createTaskStart());
  try {
    const res = await axios.post("/tasks", task, {
      headers: {
        token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
      },
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
    const res = await axios.put(`/tasks/${task._id}`, task, {
      headers: {
        token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
      },
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
    await axios.delete("/tasks/" + id, {
      headers: {
        token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
      },
    });
    dispatch(deleteTaskSuccess(id));
  } catch (err) {
    dispatch(deleteTaskFailure());
  }
};
