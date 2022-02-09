import "./sidebar.css";
import {
  List,
  PlaylistAddTwoTone,
} from "@material-ui/icons";
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Menu</h3>
          <ul className="sidebarList">
            <Link to="/taskLists" className="link">
              <li className="sidebarListItem">
                <List className="sidebarIcon" />
                Task Lists
              </li>
            </Link>
            <Link to="/newTaskList" className="link">
              <li className="sidebarListItem">
                <PlaylistAddTwoTone className="sidebarIcon" />
                Add Task List
              </li>
            </Link>
            <Link to="/newTask" className="link">
              <li className="sidebarListItem">
                <PlaylistAddTwoTone  className="sidebarIcon" />
                Add Task
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
}
