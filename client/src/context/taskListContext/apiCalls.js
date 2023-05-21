import axios from "axios";
import {
  createTaskListFailure,
  createTaskListStart,
  createTaskListSuccess,
  deleteTaskListFailure,
  deleteTaskListStart,
  deleteTaskListSuccess,
  getTaskListsFailure,
  getTaskListsStart,
  getTaskListsSuccess,
  getTaskListFailure,
  getTaskListStart,
  getTaskListSuccess,
  updateTaskListFailure,
  updateTaskListStart,
  updateTaskListSuccess
} from "./TaskListActions";
import { createTask } from "../taskContext/apiCalls";

// get all task lists
export const getTaskLists = async (dispatch) => {
  dispatch(getTaskListsStart());
  try {
    const res = await axios.get("/taskLists", {
      headers: {
        token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
      },
    });
    dispatch(getTaskListsSuccess(res.data));
  } catch (err) {
    dispatch(getTaskListsFailure());
  }
};

// get
export const getTaskList = async (dispatch, id) => {
  dispatch(getTaskListStart());
  try {
    const res = await axios.get(`/taskLists/${id}`, {
      headers: {
        token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
      },
    });
    dispatch(getTaskListSuccess([res.data]));
  } catch (err) {
    dispatch(getTaskListFailure());
  }
};

// create
export const createTaskList = async (taskList, dispatch) => {
  dispatch(createTaskListStart());
  try {
    const res = await axios.post("/taskLists", taskList, {
      headers: {
        token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
      },
    });
    dispatch(createTaskListSuccess(res.data));
  } catch (err) {
    dispatch(createTaskListFailure());
  }
};

// create with tasks
export const createTaskListWithTasks = async (taskList, dispatchTaskList, tasks, dispatchTask) => {
  dispatchTaskList(createTaskListStart());
  try {
    const res = await axios.post("/taskLists", taskList, {
      headers: {
        token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
      },
    });
    dispatchTaskList(createTaskListSuccess(res.data));
    tasks = tasks.map((task) => {
      return { 
        ...task, 
        taskList: res.data._id 
      };
    });
    tasks.forEach((task) => {
      createTask(task, dispatchTask);
    });
  } catch (err) {
    dispatchTaskList(createTaskListFailure());
  }
};

// update
export const updateTaskList = async (taskList, dispatch) => {
  dispatch(updateTaskListStart());
  try {
    const res = await axios.put(`/taskLists/${taskList._id}`, taskList, {
      headers: {
        token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
      },
    });
    dispatch(updateTaskListSuccess(res.data));
  } catch (err) {
    dispatch(updateTaskListFailure());
  }
};

// delete
export const deleteTaskList = async (id, dispatch) => {
  dispatch(deleteTaskListStart());
  try {
    await axios.delete("/taskLists/" + id, {
      headers: {
        token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
      },
    });
    dispatch(deleteTaskListSuccess(id));
  } catch (err) {
    dispatch(deleteTaskListFailure());
  }
};
