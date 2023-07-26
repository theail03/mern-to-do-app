import React from "react";
import { useContext } from "react";
import { AuthContext } from "../../context/authContext/AuthContext";
import { useHistory } from "react-router-dom";
import { login, logoutUser } from "../../context/authContext/authApiCalls";
import { 
  Logo,
  AuthButton,
  TopRight,
  TopbarStyled, 
  TopbarWrapper 
} from "./Topbar.styled";

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
          <Logo>TO-DO-APP</Logo>
        </div>
        <TopRight>
            <AuthButton backgroundColor={user ? "red" : "teal"} onClick={handleAuth}>
              {user ? "Logout" : "Login with Google"}
            </AuthButton>
        </TopRight>
      </TopbarWrapper>
    </TopbarStyled>
  );
}
