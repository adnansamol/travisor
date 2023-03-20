import React from "react";
import LoginForm from "../components/form/LoginForm";
import { loginUser } from "../service/user-api";

const Login = () => {
  const loginUserHandler = async (data) => {
    const response = await loginUser(data);
    localStorage.setItem("token", response);
  };
  return (
    <div>
      <LoginForm loginUserHandler={loginUserHandler} />
    </div>
  );
};

export default Login;
