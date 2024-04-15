import React, { useContext, useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
// import Spinner from "../../components/layout/Spinner";
import AuthContext from "../../context/auth/AuthContext";
import Home from "../pages/Home";

const PrivateRoute = ({ component }) => {
  const authContext = useContext(AuthContext);
  const navigate = useNavigate();
  const { isAuthenticated } = authContext;
  //console.log(isAuthenticated, "private route");

  useEffect(() => {
    if (isAuthenticated) {
      console.log("private route loggged in");
      navigate("/");
      //console.log(isAuthenticated, "isAuthenticated");
    } else {
      navigate("/login");
    }
  }, [isAuthenticated]);
  //   if (loading) return <Spinner />;
};

export default PrivateRoute;
