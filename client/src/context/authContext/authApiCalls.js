import axios from "axios";
import { getUserFailure, getUserStart, getUserSuccess } from "./AuthActions";

export const login = async () => {
  window.open(`${process.env.REACT_APP_API_URL}/auth/google`, "_self");
};

export const getUser = async (dispatch) => {
  dispatch(getUserStart());
  try {
    const res = await axios.get("/auth/getuser", { 
      withCredentials: true 
    });
    dispatch(getUserSuccess(res.data));
  } catch (err) {
    dispatch(getUserFailure());
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