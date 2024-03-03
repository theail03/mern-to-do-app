import React from "react";
import { useContext } from "react";
import { AuthContext } from "../../context/authContext/AuthContext";
import { useHistory } from "react-router-dom";
import { login, logoutUser } from "../../context/authContext/authApiCalls";
import { 
  Logo,
  MenuItemStyled,
  TopLeft,
  TopRight,
  TopbarStyled, 
  TopbarWrapper 
} from "./Topbar.styled";
import { MenuButton } from "../../styles/MenuButton.styled";
import SimpleMenu from "../simpleMenu/SimpleMenu";
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

export default function Topbar() {
  const { user, dispatch } = useContext(AuthContext);
  const history = useHistory();

  const handleAuth = async () => {
    if (user) {
      await handleLogout();
    } else {
      await login();
    }
  };

  const handleLogout = async () => {
    await logoutUser(dispatch);
    history.push("/");
    history.go(0);
  };

  const handleMenuToggle = () => {
  }

  return (
    <TopbarStyled>
      <TopbarWrapper>
        <TopLeft>
          <IconButton edge="start" color="#555" aria-label="menu" onClick={handleMenuToggle}>
            <MenuIcon />
          </IconButton>
          <Logo>ToDoApp</Logo>
        </TopLeft>
        <TopRight>
            {user ? 
              <SimpleMenu buttonText={user.email}>
                <MenuItemStyled onClick={handleLogout}>Logout</MenuItemStyled>
              </SimpleMenu> 
              : 
              <MenuButton onClick={handleAuth}>
                Log in with Google
              </MenuButton>
            }
        </TopRight>
      </TopbarWrapper>
    </TopbarStyled>
  );
}
