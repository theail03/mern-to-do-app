import {
  SidebarStyled,
  SidebarWrapper,
  SidebarMenu,
  SidebarTitle,
  SidebarList,
  SidebarListItem,
  SidebarListIcon,
  SidebarAddIcon,
} from "./Sidebar.styled";
import { LinkStyled } from "../../styles/Link.styled";

export default function Sidebar({ isOpen }) {
  return isOpen ? (
    <SidebarStyled>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarTitle>Menu</SidebarTitle>
          <SidebarList>
            <LinkStyled to="/taskLists">
              <SidebarListItem>
                <SidebarListIcon/>
                Task Lists
              </SidebarListItem>
            </LinkStyled>
            <LinkStyled to="/newTaskList">
              <SidebarListItem>
                <SidebarAddIcon/>
                Add Task List
              </SidebarListItem>
            </LinkStyled>
            <LinkStyled to="/newTask">
              <SidebarListItem>
                <SidebarAddIcon/>
                Add Task
              </SidebarListItem>
            </LinkStyled>
          </SidebarList>
        </SidebarMenu>
      </SidebarWrapper>
    </SidebarStyled>
  ) : null;
}
