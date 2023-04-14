import React from "react";
import styled from "styled-components";
import { colors } from "../../constant/colors";
import { country_list } from "../../constant/countries";
import Button from "../ui/Button";

const FormContainer = styled.form`
  width: 400px;
`;
const FormLabel = styled.label`
  color: rgba(0, 0, 0, 0.7);
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

const FormSelect = styled.select`
  box-sizing: border-box;
  width: 100%;
  font-size: 20px;
  padding: 12px 8px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  margin: 5px 0 10px;
  background-color: rgba(255, 255, 255, 0.4);
  &:focus {
    outline: none;
    border: 1px solid ${colors.teal500};
    box-shadow: 0px 0px 3px ${colors.teal500};
  }
`;
const SelectOption = styled.option`
  padding: 50px 0px;
`;
const ButtonComponent = styled(Button)`
  color: white;
  background-color: ${colors.teal500};
`;

const RegisterForm = ({ registerUserHandler }) => {
  const registerOnSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const data = {
      u_name: form.fname.value + " " + form.lname.value,
      u_email: form.email.value,
      u_password: form.pass.value,
      u_phone: form.phone.value,
      u_country: form.country.value,
    };
    registerUserHandler(data);
  };

  return (
    <FormContainer onSubmit={registerOnSubmit}>
      <div className="row">
        <div className="col">
          <FormLabel htmlFor="fname">First Name</FormLabel>
          <FormInput id="fname" required />
        </div>
        <div className="col">
          <FormLabel htmlFor="lname">Last Name</FormLabel>
          <FormInput id="lname" />
        </div>
      </div>
      <div className="row">
        <div className="col">
          <FormLabel htmlFor="email">Email</FormLabel>
          <FormInput type="email" id="email" required />
          <FormLabel htmlFor="pass">Password</FormLabel>
          <FormInput id="pass" required />
          <FormLabel htmlFor="pass">Confirm Password</FormLabel>
          <FormInput id="confirmPass" required />
        </div>
      </div>
      <div className="row">
        <div className="col">
          <FormLabel htmlFor="phone">Phone Number</FormLabel>
          <FormInput type="tel" id="phone" required />
        </div>
        <div className="col">
          <FormLabel htmlFor="country">Country</FormLabel>
          <FormSelect id="country" required>
            <SelectOption>Select</SelectOption>
            {country_list.map((country) => (
              <SelectOption value={country}>{country}</SelectOption>
            ))}
          </FormSelect>
        </div>
      </div>
      <ButtonComponent type="submit">Sign up</ButtonComponent>
    </FormContainer>
  );
};

export default RegisterForm;
