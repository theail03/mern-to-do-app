import axios from "axios";
import { loginFailure, loginStart, loginSuccess, logout } from "./AuthActions";

export const login = async () => {
  window.open("http://localhost:8800/auth/google", "_self");
};

export const getUser = async (dispatch) => {
  dispatch(loginStart());
  try {
    const res = await axios.get("/auth/getuser", { 
      withCredentials: true 
    });
    dispatch(loginSuccess(res.data));
  } catch (err) {
    dispatch(loginFailure());
    alert(err.response.data);
  }
};

export const logoutUser = async (dispatch) => {
  try {
    const res = await axios.get("/auth/logout", { 
      withCredentials: true 
    });
    if (res.data === "done") {
      getUser(dispatch);
    }
  } catch (err) {
    alert(err.response.data);
  }
}