import TaskReducer from "./TaskReducer";
import { createContext, useReducer } from "react";

const INITIAL_STATE = {
  task: null,
  tasks: [],
  isFetching: false,
  error: false,
};

export const TaskContext = createContext(INITIAL_STATE);

export const TaskContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(TaskReducer, INITIAL_STATE);

  return (
    <TaskContext.Provider
      value={{
        task: state.task,
        tasks: state.tasks,
        isFetching: state.isFetching,
        error: state.error,
        dispatch,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};
