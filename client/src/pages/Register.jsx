import React, { useEffect } from "react";
import { useNavigate } from "react-router";
import styled from "styled-components";
import RegisterForm from "../components/form/RegisterForm";
import Link from "../components/ui/Link";
import { colors } from "../constant/colors";
import { MdKeyboardBackspace } from "react-icons/md";
import { getUserProfileAPI, registerUserAPI } from "../service/user-api";
import { authorizeUser } from "../auth/Authorization";
import { ImEarth } from "react-icons/im";

const Component = styled.div`
  display: flex;
  background-image: linear-gradient(
      to right,
      rgba(0, 0, 0, 0.8),
      transparent 70%
    ),
    url("images/background/register-bg.jpg");
  background-repeat: no-repeat;
  opacity: 80%;

  height: 100vh;

  background-size: cover;
  justify-content: space-around;
`;

const Moto = styled.div`
  margin-top: 20%;
  font-size: 70px;
  color: white;
  text-shadow: 0px 0px 3px rgba(0, 0, 0, 0.2);
  font-weight: 600;
  font-family: "Alatsi", sans-serif;
`;
const RightContainer = styled.div`
  width: 40%;
`;
const RegisterContainer = styled.div`
  padding: 10px 30px;
  background-color: white;
  height: 650px;
  overflow-y: scroll;
  border-radius: 5px;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.3);
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
  font-size: 16px;
  margin-top: 10px;
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
const LoginLink = styled(Link)`
  font-weight: 600;
`;
const Register = () => {
  const navigate = useNavigate();

  useEffect(() => {
    authorizeUser();
  }, []);

  const registerUserHandler = async (data) => {
    const response = await registerUserAPI(data);
    alert("Account created successfully");
    navigate("/login");
  };
  const authorizeUser = async () => {
    if (await getUserProfileAPI(localStorage.getItem("token"))) {
      navigate("/");
    }
  };
  return (
    <Component>
      <RightContainer>
        <Moto>
          Welcome!
          <br />
          Begin your next awesome journey with travis
          <ImEarth size={40} />r
        </Moto>
        <Moto style={{ fontSize: 18, fontFamily: "sans-serif", marginTop: 20 }}>
          Please see the covid{" "}
          <Link to="/rules-and-guidelines">guidelines</Link> for travelling for
          a safe travel experience.
        </Moto>
      </RightContainer>
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
        <hr />
        <Logo>
          travis
          <ImEarth size={20} />r
        </Logo>
        <p style={{ textAlign: "center", margin: 0 }}>
          all rights reserved © 2023
        </p>
      </RegisterContainer>
    </Component>
  );
};

export default Register;
