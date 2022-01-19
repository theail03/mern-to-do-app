export const getTaskListsStart = () => ({
  type: "GET_TASK_LISTS_START",
});

export const getTaskListsSuccess = (taskLists) => ({
  type: "GET_TASK_LISTS_SUCCESS",
  payload: taskLists,
});

export const getTaskListsFailure = () => ({
  type: "GET_TASK_LISTS_FAILURE",
});

export const createTaskListStart = () => ({
  type: "CREATE_TASK_LIST_START",
});

export const createTaskListSuccess = (taskList) => ({
  type: "CREATE_TASK_LIST_SUCCESS",
  payload: taskList,
});

export const createTaskListFailure = () => ({
  type: "CREATE_TASK_LIST_FAILURE",
});

export const updateTaskListStart = () => ({
  type: "UPDATE_TASK_LIST_START",
});

export const updateTaskListSuccess = (task) => ({
  type: "UPDATE_TASK_LIST_SUCCESS",
  payload: task,
});

export const updateTaskListFailure = () => ({
  type: "UPDATE_TASK_LIST_FAILURE",
});

export const deleteTaskListStart = () => ({
  type: "DELETE_TASK_LIST_START",
});

export const deleteTaskListSuccess = (id) => ({
  type: "DELETE_TASK_LIST_SUCCESS",
  payload: id,
});

export const deleteTaskListFailure = () => ({
  type: "DELETE_TASK_LIST_FAILURE",
});
