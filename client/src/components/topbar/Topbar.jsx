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
import { LinkStyled } from "../../styles/Link.styled";
import googleSignInImage from "../../assets/btn_google_signin_dark_normal_web.png";

export default function Topbar({ toggleSidebar }) {
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

  return (
    <TopbarStyled>
      <TopbarWrapper>
        <TopLeft>
          <IconButton edge="start" color="#555" aria-label="menu" onClick={toggleSidebar}>
            <MenuIcon />
          </IconButton>
          <LinkStyled
              to={{ pathname: "/" }}
          >
            <Logo>ToDoApp</Logo>
          </LinkStyled>
        </TopLeft>
        <TopRight>
            {user ? 
              <SimpleMenu buttonText={user.email}>
                <MenuItemStyled onClick={handleLogout}>Sign out</MenuItemStyled>
              </SimpleMenu> 
              : 
              <MenuButton onClick={handleAuth}>
                <img src={googleSignInImage} alt="Sign in with Google" />
              </MenuButton>
            }
        </TopRight>
      </TopbarWrapper>
    </TopbarStyled>
  );
}
