import React from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import LoginForm from "../components/form/LoginForm";
import { loginAgencyAPI } from "../service/agency-api";

const Login = () => {
  const navigate = useNavigate();
  const loginAgency = async (data) => {
    const response = await loginAgencyAPI(data);
    if (response.status) {
      alert(response.data);
    } else {
      navigate("/");
    }
  };

  useEffect(() => {
    if (localStorage.getItem("admin-token")) {
      navigate("/");
    }
  }, []);
  return (
    <div>
      
      <LoginForm loginAgency={loginAgency} />
    </div>
  );
};

export default Login;
