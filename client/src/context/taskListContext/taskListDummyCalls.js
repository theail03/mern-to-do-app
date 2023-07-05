import { dummyTaskLists } from "../../data/dummyTaskLists";
import {
  getTaskListsFailure,
  getTaskListsStart,
  getTaskListsSuccess,
  getTaskListFailure,
  getTaskListStart,
  getTaskListSuccess
} from "./TaskListActions";

// get all task lists
export const getTaskListsDummy = (dispatch) => {
  dispatch(getTaskListsStart());
  try {
    const taskLists = dummyTaskLists;
    dispatch(getTaskListsSuccess(taskLists));
  } catch (err) {
    dispatch(getTaskListsFailure());
  }
};

// get
export const getTaskListDummy = (dispatch, id) => {
  dispatch(getTaskListStart());
  try {
    const taskList = dummyTaskLists.find((taskList) => taskList._id === id);
    dispatch(getTaskListSuccess(taskList));
  } catch (err) {
    dispatch(getTaskListFailure());
  }
};
