import "./login.css";
import { login } from "../../context/authContext/authApiCalls";

export default function Login() {
  return (
    <div className="login">
        <button
          className="loginButton"
          onClick={() => {
            login();
          }}
        >
          LOG IN WITH GOOGLE
        </button>
    </div>
  );
}
