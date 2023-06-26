const TaskReducer = (state, action) => {
  switch (action.type) {
    case "GET_TASKS_START":
      return {
        ...state,
        tasks: [],
        isFetching: true,
        error: false,
      };
    case "GET_TASKS_SUCCESS":
      return {
        ...state,
        tasks: action.payload,
        isFetching: false,
        error: false,
      };
    case "GET_TASKS_FAILURE":
      return {
        ...state,
        tasks: [],
        isFetching: false,
        error: true,
      };
    case "GET_TASK_START":
      return {
        ...state,
        task: null,
        isFetching: true,
        error: false,
      };
    case "GET_TASK_SUCCESS":
      return {
        ...state,
        task: action.payload,
        isFetching: false,
        error: false,
      };
    case "GET_TASK_FAILURE":
      return {
        ...state,
        task: null,
        isFetching: false,
        error: true,
      };
    case "CREATE_TASK_START":
      return {
        ...state,
        isFetching: true,
        error: false,
      };
    case "CREATE_TASK_SUCCESS":
      return {
        ...state,
        tasks: [action.payload, ...state.tasks],
        isFetching: false,
        error: false,
      };
    case "CREATE_TASK_FAILURE":
      return {
        ...state,
        isFetching: false,
        error: true,
      };
    case "UPDATE_TASK_START":
      return {
        ...state,
        isFetching: true,
        error: false,
      };
    case "UPDATE_TASK_SUCCESS":
      return {
        ...state,
        tasks: state.tasks.map(
          (task) => task._id === action.payload._id ? action.payload : task
        ),
        isFetching: false,
        error: false,
      };
    case "UPDATE_TASK_FAILURE":
      return {
        ...state,
        isFetching: false,
        error: true,
      };
    case "DELETE_TASK_START":
      return {
        ...state,
        isFetching: true,
        error: false,
      };
    case "DELETE_TASK_SUCCESS":
      return {
        ...state,
        tasks: state.tasks.filter((task) => task._id !== action.payload),
        isFetching: false,
        error: false,
      };
    case "DELETE_TASK_FAILURE":
      return {
        ...state,
        isFetching: false,
        error: true,
      };
    default:
      return { ...state };
  }
};

export default TaskReducer;
