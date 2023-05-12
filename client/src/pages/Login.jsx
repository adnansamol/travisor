import React, { useEffect } from "react";
import { useNavigate } from "react-router";
import styled from "styled-components";
import LoginForm from "../components/form/LoginForm";
import Link from "../components/ui/Link";
import { colors } from "../constant/colors";
import { getUserProfileAPI, loginUserAPI } from "../service/user-api";
import { MdKeyboardBackspace } from "react-icons/md";
import { ImEarth } from "react-icons/im";

const Component = styled.div`
  width: 100%;
  background-image: url("images/background/login-bg-3.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
  display: flex;
`;
const Logo = styled(Link)`
  display: block;
  position: relative;
  margin: auto;
  width: fit-content;
  color: ${colors.black};
  font-size: 30px;
  font-weight: 600;
  font-family: "Alatsi", sans-serif;
`;
const LoginContainer = styled.div`
  padding: 10px 30px;
  background-color: white;
  width: fit-content;
  border-radius: 5px;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.3);
  margin: auto;
`;

const LoginTitle = styled.div`
  margin-bottom: 10px;
  font-size: 40px;
  font-weight: 600;
  text-align: center;
  color: ${colors.black};
`;

const SignupPrompt = styled.div`
  text-align: center;
  font-size: 16px;
  margin-top: 10px;
`;

const SignupLink = styled(Link)`
  font-weight: 600;
`;
const Cancel = styled(Link)``;
const Login = () => {
  const navigate = useNavigate();
  const loginUserHandler = async (data) => {
    const response = await loginUserAPI(data);
    if (response.status) {
      alert(response.data);
    } else {
      navigate(-1);
    }
  };

  useEffect(() => {
    authorizeUser();
  }, []);

  const authorizeUser = async () => {
    if (await getUserProfileAPI(localStorage.getItem("token"))) {
      navigate("/");
    }
  };
  return (
    <Component>
      <LoginContainer>
        <Cancel to="/">
          <MdKeyboardBackspace size={40} color="black" />
        </Cancel>
        <LoginTitle>Login</LoginTitle>
        <LoginForm loginUserHandler={loginUserHandler} />
        <SignupPrompt>
          Don't have an account?{" "}
          <SignupLink to={"/register"}>Sign up</SignupLink> here.
        </SignupPrompt>
        <hr />
        <Logo>
          travis
          <ImEarth size={20} />r
        </Logo>
        <p style={{ textAlign: "center", margin: 0 }}>
          all rights reserved © 2023
        </p>
      </LoginContainer>
    </Component>
  );
};

export default Login;
