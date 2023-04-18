import React from "react";
import LoginForm from "../components/form/LoginForm";
import { loginAgencyAPI } from "../service/agency-api";

const Login = () => {
  const loginAgency = async (data) => {
    const response = await loginAgencyAPI(data);
  };
  return (
    <div>
      <LoginForm loginAgency={loginAgency} />
    </div>
  );
};

export default Login;
