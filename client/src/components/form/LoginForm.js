import React from "react";
import styled from "styled-components";
import { colors } from "../../constant/colors";
import Button from "../ui/Button";

const FormContainer = styled.form`
  width: 400px;
`;
const FormLabel = styled.label`
  color: rgba(0, 0, 0, 0.6);
  font-weight: 600;
`;
const FormInput = styled.input`
  box-sizing: border-box;
  width: 100%;
  font-size: 20px;
  padding: 12px 8px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  margin: 5px 0 10px;

  &:focus {
    outline: none;
    border: 1px solid ${colors.teal500};
    box-shadow: 0px 0px 3px ${colors.teal500};
  }
`;
const ButtonComponent = styled(Button)`
  color: white;
  background-color: ${colors.teal500};
`;
const LoginForm = ({ loginUserHandler }) => {
  const loginOnSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const data = {
      email: form.email.value,
      password: form.pass.value,
    };
    loginUserHandler(data);
  };

  return (
    <FormContainer onSubmit={loginOnSubmit}>
      <FormLabel htmlFor="email">Email</FormLabel>
      <FormInput type="email" id="email" required />
      <FormLabel htmlFor="pass">Password</FormLabel>
      <FormInput type="password" id="pass" required />
      <ButtonComponent type="submit">Log in</ButtonComponent>
    </FormContainer>
  );
};

export default LoginForm;
