const TaskListReducer = (state, action) => {
  switch (action.type) {
    case "GET_TASK_LISTS_START":
      return {
        ...state,
        taskLists: [],
        isFetching: true,
        error: false,
      };
    case "GET_TASK_LISTS_SUCCESS":
      return {
        ...state,
        taskLists: action.payload,
        isFetching: false,
        error: false,
      };
    case "GET_TASK_LISTS_FAILURE":
      return {
        ...state,
        taskLists: [],
        isFetching: false,
        error: true,
      };
      case "GET_TASK_LIST_START":
        return {
          ...state,
          taskList: null,
          isFetching: true,
          error: false,
        };
      case "GET_TASK_LIST_SUCCESS":
        return {
          ...state,
          taskList: action.payload,
          isFetching: false,
          error: false,
        };
      case "GET_TASK_LIST_FAILURE":
        return {
          ...state,
          taskList: null,
          isFetching: false,
          error: true,
        };
    case "CREATE_TASK_LIST_START":
      return {
        ...state,
        isFetching: true,
        error: false,
      };
    case "CREATE_TASK_LIST_SUCCESS":
      return {
        ...state,
        taskLists: [action.payload, ...state.taskLists],
        isFetching: false,
        error: false,
      };
    case "CREATE_TASK_LIST_FAILURE":
      return {
        ...state,
        isFetching: false,
        error: true,
      };
    case "UPDATE_TASK_LIST_START":
      return {
        ...state,
        isFetching: true,
        error: false,
      };
    case "UPDATE_TASK_LIST_SUCCESS":
      return {
        ...state,
        taskLists: state.taskLists.map(
          (taskList) => taskList._id === action.payload._id ? action.payload : taskList
        ),
        isFetching: false,
        error: false,
      };
    case "UPDATE_TASK_LIST_FAILURE":
      return {
        ...state,
        isFetching: false,
        error: true,
      };
    case "DELETE_TASK_LIST_START":
      return {
        ...state,
        isFetching: true,
        error: false,
      };
    case "DELETE_TASK_LIST_SUCCESS":
      return {
        ...state,
        taskLists: state.taskLists.filter((taskList) => taskList._id !== action.payload),
        isFetching: false,
        error: false,
      };
    case "DELETE_TASK_LIST_FAILURE":
      return {
        ...state,
        isFetching: false,
        error: true,
      };
    default:
      return { ...state };
  }
};

export default TaskListReducer;
