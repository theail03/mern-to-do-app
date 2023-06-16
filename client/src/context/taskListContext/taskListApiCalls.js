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
import { 
  createTask,
  updateTask
} from "../taskContext/taskApiCalls";

// get all task lists
export const getTaskLists = async (dispatch) => {
  dispatch(getTaskListsStart());
  try {
    const res = await axios.get("/taskLists", {
      withCredentials: true
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
      withCredentials: true
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
      withCredentials: true
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
      withCredentials: true
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

// update without dispatch
export const updateTaskListWithoutDispatch = async (taskList) => {
  const res = await axios.put(`/taskLists/${taskList._id}`, taskList, {
    withCredentials: true
  });
  return res;
};

// update
export const updateTaskList = async (taskList, dispatch) => {
  dispatch(updateTaskListStart());
  try {
    const res = await updateTaskListWithoutDispatch(taskList);
    dispatch(updateTaskListSuccess(res.data));
  } catch (err) {
    dispatch(updateTaskListFailure());
  }
};

// update and remove tags and custom fields from tasks
export const updateTaskListAndTasks = async (taskList, dispatchTaskList, tasks, dispatchTask) => {
  dispatchTaskList(updateTaskListStart());
  try {
    const res = await updateTaskListWithoutDispatch(taskList);
    dispatchTaskList(updateTaskListSuccess(res.data));
    tasks.forEach((task) => {
      updateTask(task, dispatchTask);
    });
  } catch (err) {
    dispatchTaskList(updateTaskListFailure());
  }
};

// delete
export const deleteTaskList = async (id, dispatch) => {
  dispatch(deleteTaskListStart());
  try {
    await axios.delete("/taskLists/" + id, {
      withCredentials: true
    });
    dispatch(deleteTaskListSuccess(id));
  } catch (err) {
    dispatch(deleteTaskListFailure());
  }
};
