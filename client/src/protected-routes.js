import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { authorizeUser } from "./auth/Authorization";

const ProtectedRoute = ({ children }) => {
  const navigate = useNavigate();
  useEffect(() => {
    checkAuthorization();
  }, []);

  const checkAuthorization = async () => {
    if (!(await authorizeUser())) navigate("/login");
  };
  return children;
};

export default ProtectedRoute;
