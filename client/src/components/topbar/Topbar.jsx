import React from "react";
import { useContext } from "react";
import { AuthContext } from "../../context/authContext/AuthContext";
import { useHistory } from "react-router-dom";
import { logoutUser } from "../../context/authContext/authApiCalls";
import { 
  Logo,
  LogoutButton,
  TopRight,
  TopbarStyled, 
  TopbarWrapper 
} from "./Topbar.styled";

export default function Topbar() {
  const { dispatch } = useContext(AuthContext);
  const history = useHistory();
  const handleLogout = () => {
    logoutUser(dispatch);
    history.push("/");
  };

  return (
    <TopbarStyled>
      <TopbarWrapper>
        <div>
          <Logo>TO-DO-APP</Logo>
        </div>
        <TopRight>
            <LogoutButton onClick={handleLogout}>
              Sign out
            </LogoutButton>
        </TopRight>
      </TopbarWrapper>
    </TopbarStyled>
  );
}
