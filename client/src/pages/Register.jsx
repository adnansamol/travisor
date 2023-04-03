import React from "react";
import { useNavigate } from "react-router";
import styled from "styled-components";
import RegisterForm from "../components/form/RegisterForm";
import Link from "../components/ui/Link";
import { colors } from "../constant/colors";
import { MdKeyboardBackspace } from "react-icons/md";

const Register = () => {
  const navigate = useNavigate();
  const registerUserHandler = async (data) => {
    // const response = await loginUser(data);
    navigate("/");
  };

  const Component = styled.div`
    display: flex;
    width: 100%;
    background-image: url("images/background/register-bg.jpg");
    background-repeat: no-repeat;
    height: 100vh;
    background-size: cover;
  `;

  const RightContainer = styled.div``;
  const RegisterContainer = styled.div`
    padding: 10px 30px 30px;
    background-color: white;
    width: fit-content;
    height: 650px;
    overflow-y: scroll;
    border-radius: 5px;
    box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.3);
    margin-left: 60%;
    margin-top: 50px;

    &::-webkit-scrollbar {
      width: 8px;
    }
    &::-webkit-scrollbar-track {
      background-color: transparent;
      margin: 10px;
      border-radius: 5px;
    }
    &::-webkit-scrollbar-thumb {
      background-color: ${colors.teal400};
      border-radius: 5px;
    }
  `;

  const Cancel = styled(Link)``;
  const LoginTitle = styled.div`
    margin-bottom: 10px;
    font-size: 40px;
    font-weight: 600;
    text-align: center;
    color: ${colors.black};
  `;

  const LoginPrompt = styled.div`
    text-align: center;
    font-size: 18px;
    margin-top: 10px;
  `;

  const LoginLink = styled(Link)`
    font-weight: 600;
  `;
  return (
    <Component>
      <RightContainer></RightContainer>
      <RegisterContainer>
        <Cancel to="/">
          <MdKeyboardBackspace size={40} color="black" />
        </Cancel>
        <LoginPrompt>
          Already a user? <LoginLink to={"/login"}>Log In</LoginLink> here.
        </LoginPrompt>
        <hr />
        <LoginTitle>Sign up</LoginTitle>
        <RegisterForm registerUserHandler={registerUserHandler} />
      </RegisterContainer>
    </Component>
  );
};

export default Register;
