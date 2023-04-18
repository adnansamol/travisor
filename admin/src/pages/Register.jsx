import React from "react";
import RegisterForm from "../components/form/RegisterForm";
import { registerAgencyAPI } from "../service/agency-api";
import styled from "styled-components";
const Container = styled.div``;
const FormContainer = styled.div`
  width: 30%;
  margin: auto;
  margin-top: 20px;
`;
const Register = () => {
  const registerAgency = async (data) => {
    const response = await registerAgencyAPI(data);
    alert(response);
  };
  return (
    <Container>
      <FormContainer>
        <h1>Register Your Agency</h1>
        <RegisterForm registerAgency={registerAgency} />
      </FormContainer>
    </Container>
  );
};

export default Register;
