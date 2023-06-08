import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import "./app.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Login from "./pages/login/Login";
import { AuthContext } from "./context/authContext/AuthContext";
import { useContext } from "react";
import NewTaskList from "./pages/newTaskList/NewTaskList";
import TaskList from "./pages/taskList/TaskList";
import NewTask from "./pages/newTask/NewTask";
import Task from "./pages/task/Task";
import TaskTable from "./pages/taskTable/TaskTable";
import TaskListTable from "./pages/taskListTable/TaskListTable";

function App() {
  const { user } = useContext(AuthContext);
  return (
    <Router>
      <Switch>
        <Route path="/login">{user ? <Redirect to="/" /> : <Login />}</Route>
        {user ? (
          <>
            <Topbar />
            <div className="container">
              <Sidebar />
              <Route exact path="/">
                <TaskListTable />
              </Route>
              <Route path="/newTaskList">
                <NewTaskList />
              </Route>
              <Route path="/taskList/:taskListId">
                <TaskList />
              </Route>
              <Route path="/newTask">
                <NewTask />
              </Route>
              <Route path="/task/:taskId">
                <Task />
              </Route>
              <Route path="/tasks/:taskListId">
                <TaskTable />
              </Route>
              <Route path="/taskLists">
                <TaskListTable />
              </Route>
            </div>
          </>
        ) : (
          <Route exact path="/">
            <Redirect to="/login" />
          </Route>     
        )}
      </Switch>
    </Router>
  );
}

export default App;
