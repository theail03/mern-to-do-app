import axios from "axios";
import { useRef } from "react";
import { useHistory } from "react-router-dom";
import "./register.css";

export default function Register() {
  const history = useHistory();

  const emailRef = useRef();
  const passwordRef = useRef();
  const usernameRef = useRef();

  const handleRegister = async (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    const username = usernameRef.current.value;
    try {
      await axios.post(`${process.env.REACT_APP_API_URL}/auth/register`, { email, username, password });
      history.push("/");
    } catch (err) {}
  };

  return (
    <div className="login">
      <form className="loginForm">
        <input
          type="text"
          placeholder="email"
          className="loginInput"
          ref={emailRef}
        />
        <input
          type="text"
          placeholder="username"
          className="loginInput"
          ref={usernameRef}
        />
        <input
          type="password"
          placeholder="password"
          className="loginInput"
          ref={passwordRef}
        />
        <button
          className="loginButton"
          onClick={handleRegister}
        >
          Register
        </button>
        <button
          className="goToButton"
          onClick={() => history.push("/login")}
        >
          Go to Login
        </button>
      </form>
    </div>
  );
}
