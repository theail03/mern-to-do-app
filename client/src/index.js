import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { AuthContextProvider } from "./context/authContext/AuthContext";
import { TaskListContextProvider } from "./context/taskListContext/TaskListContext";
import { TaskContextProvider } from "./context/taskContext/TaskContext";

ReactDOM.render(
  <React.StrictMode>
    <AuthContextProvider>
      <TaskListContextProvider>
        <TaskContextProvider>
          <App />
        </TaskContextProvider>
      </TaskListContextProvider>
    </AuthContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
