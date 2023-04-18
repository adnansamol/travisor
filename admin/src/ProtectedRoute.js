import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { authorizeAgency } from "./auth/authorization";

const ProtectedRoute = ({ children }) => {
  const navigate = useNavigate();
  useEffect(() => {
    checkAuthorization();
  }, []);

  const checkAuthorization = async () => {
    if (!(await authorizeAgency())) navigate("/login");
  };
  return children;
};

export default ProtectedRoute;
