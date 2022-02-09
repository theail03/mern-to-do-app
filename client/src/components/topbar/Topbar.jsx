import React from "react";
import "./topbar.css";
import { useContext } from "react";
import { AuthContext } from "../../context/authContext/AuthContext";
import { useHistory } from "react-router-dom";

export default function Topbar() {
  const { dispatch } = useContext(AuthContext);
  const history = useHistory();
  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
    history.push("/");
  };

  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">TO-DO-APP</span>
        </div>
        <div className="topRight">
            <button className="logoutButton" onClick={handleLogout}>
              Sign out
            </button>
        </div>
      </div>
    </div>
  );
}
