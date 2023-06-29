import { LoginStyled, LoginButton } from "./Login.styled";
import { login } from "../../context/authContext/authApiCalls";

export default function Login() {
  return (
    <LoginStyled>
        <LoginButton
          onClick={() => {
            login();
          }}
        >
          LOG IN WITH GOOGLE
        </LoginButton>
    </LoginStyled>
  );
}
