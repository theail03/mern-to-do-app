import TaskListReducer from "./TaskListReducer";
import { createContext, useReducer } from "react";

const INITIAL_STATE = {
  taskList: null,
  taskLists: [],
  isFetching: false,
  error: false,
};

export const TaskListContext = createContext(INITIAL_STATE);

export const TaskListContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(TaskListReducer, INITIAL_STATE);

  return (
    <TaskListContext.Provider
      value={{
        taskList: state.taskList,
        taskLists: state.taskLists,
        isFetching: state.isFetching,
        error: state.error,
        dispatch,
      }}
    >
      {children}
    </TaskListContext.Provider>
  );
};
