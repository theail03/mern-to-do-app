import React from "react";
import { useContext } from "react";
import { AuthContext } from "../../context/authContext/AuthContext";
import { useHistory } from "react-router-dom";
import { login, logoutUser } from "../../context/authContext/authApiCalls";
import { 
  Logo,
  MenuItemStyled,
  TopRight,
  TopbarStyled, 
  TopbarWrapper 
} from "./Topbar.styled";
import { colors } from "../../constants/Theme";
import { SimpleButton } from "../../styles/SimpleButton.styled";
import SimpleMenu from "../simpleMenu/SimpleMenu";

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

  return (
    <TopbarStyled>
      <TopbarWrapper>
        <div>
          <Logo>ToDoApp</Logo>
        </div>
        <TopRight>
            {user ? 
              <SimpleMenu buttonText={user.email}>
                <MenuItemStyled onClick={handleLogout}>Logout</MenuItemStyled>
              </SimpleMenu> 
              : 
              <SimpleButton backgroundColor={colors.color2} onClick={handleAuth}>
                Log in with Google
              </SimpleButton>
            }
        </TopRight>
      </TopbarWrapper>
    </TopbarStyled>
  );
}
