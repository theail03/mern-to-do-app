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
} from "./TaskListActions";

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

//create
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

//delete
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
