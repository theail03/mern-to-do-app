import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { AuthContext } from "./context/authContext/AuthContext";
import { useContext } from "react";
import NewTaskList from "./pages/newTaskList/NewTaskList";
import TaskList from "./pages/taskList/TaskList";
import NewTask from "./pages/newTask/NewTask";
import Task from "./pages/task/Task";
import TaskTable from "./pages/taskTable/TaskTable";
import TaskListTable from "./pages/taskListTable/TaskListTable";
import { RouteContainer } from "./styles/Container.styled";

function App() {
  const { user } = useContext(AuthContext);
  return (
    <Router>
      <Switch>
        <>
          <Topbar />
          <RouteContainer>
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
            {/* any other route redirect to home */}
            <Route path="*">
              <Redirect to="/" />
            </Route>
          </RouteContainer>
        </>
      </Switch>
    </Router>
  );
}

export default App;
