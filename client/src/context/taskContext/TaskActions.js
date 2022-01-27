export const getTasksStart = () => ({
  type: "GET_TASKS_START",
});

export const getTasksSuccess = (tasks) => ({
  type: "GET_TASKS_SUCCESS",
  payload: tasks,
});

export const getTasksFailure = () => ({
  type: "GET_TASKS_FAILURE",
});

export const getTaskStart = () => ({
  type: "GET_TASK_START",
});

export const getTaskSuccess = (task) => ({
  type: "GET_TASK_SUCCESS",
  payload: task,
});

export const getTaskFailure = () => ({
  type: "GET_TASK_FAILURE",
});

export const createTaskStart = () => ({
  type: "CREATE_TASK_START",
});

export const createTaskSuccess = (task) => ({
  type: "CREATE_TASK_SUCCESS",
  payload: task,
});

export const createTaskFailure = () => ({
  type: "CREATE_TASK_FAILURE",
});

export const updateTaskStart = () => ({
  type: "UPDATE_TASK_START",
});

export const updateTaskSuccess = (task) => ({
  type: "UPDATE_TASK_SUCCESS",
  payload: task,
});

export const updateTaskFailure = () => ({
  type: "UPDATE_TASK_FAILURE",
});

export const deleteTaskStart = () => ({
  type: "DELETE_TASK_START",
});

export const deleteTaskSuccess = (id) => ({
  type: "DELETE_TASK_SUCCESS",
  payload: id,
});

export const deleteTaskFailure = () => ({
  type: "DELETE_TASK_FAILURE",
});
