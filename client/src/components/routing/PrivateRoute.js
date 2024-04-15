import React, { useContext, useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import AuthContext from "../../context/auth/AuthContext";

const PrivateRoute = ({ component: Component }) => {
  const authContext = useContext(AuthContext);
  const navigate = useNavigate();
  const { isAuthenticated } = authContext;

  useEffect(() => {
    if (!isAuthenticated) {
      console.log("Not authenticated, redirecting to /login");
      navigate("/login");
    }
  }, [isAuthenticated, navigate]);

  return isAuthenticated ? <Component /> : <Navigate to="/login" replace />;
};

export default PrivateRoute;
