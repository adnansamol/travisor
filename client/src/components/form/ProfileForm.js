import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { colors } from "../../constant/colors";
import { country_list } from "../../constant/countries";
import { getUserProfileAPI, updateUserAPI } from "../../service/user-api";
import Button from "../ui/Button";
import Loading from "../ui/Loading";

const Form = styled.form``;
const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
const FormLabel = styled.label`
  font-size: 14px;
  font-weight: 500;
`;
const FormInput = styled.input`
  width: 200px;
  margin-bottom: 10px;
  padding: 5px;
  font-size: 16px;
`;
const FormSelect = styled.select`
  width: 200px;
  margin-bottom: 10px;
  padding: 5px;
  font-size: 16px;
`;
const ButtonContainer = styled.div`
  text-align: right;
`;
const UpdateButton = styled(Button)`
  font-size: 16px;
  font-weight: 500;
  background-color: ${colors.dodgerblue};
  color: white;
`;
const CloseButton = styled(Button)`
  margin-right: 10px;
  font-size: 16px;
  font-weight: 500;
  background-color: transparent;
  border: 1px solid ${colors.gray};
`;

const ProfileForm = ({ setIsOpen }) => {
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(true);
  const nameRef = useRef();
  const phoneRef = useRef();
  const countryRef = useRef();
  useEffect(() => {
    fetchUser();
  }, []);

  const fetchUser = async () => {
    const data = await getUserProfileAPI(localStorage.getItem("token"));
    setLoading(false);
    setUser(data);
  };
  const updateUserProfile = async (e) => {
    e.preventDefault();
    if (
      nameRef.current.value == "" ||
      phoneRef.current.value == "" ||
      countryRef.current.value == ""
    ) {
      return alert("Please enter valid details");
    }
    const details = {
      u_email: user.u_email,
      u_name: nameRef.current.value,
      u_phone: phoneRef.current.value,
      u_country: countryRef.current.value,
    };
    if (await getUserProfileAPI(localStorage.getItem("token"))) {
      const response = await updateUserAPI(details);
      alert(response);
      setIsOpen(false);
    } else {
      alert("Please login first");
    }
  };
  return loading ? (
    <Loading />
  ) : (
    user && (
      <Form onSubmit={updateUserProfile}>
        <InputContainer>
          <FormLabel>Full Name</FormLabel>
          <FormInput ref={nameRef} defaultValue={user.u_name} />
        </InputContainer>
        <InputContainer>
          <FormLabel>Phone number</FormLabel>
          <FormInput ref={phoneRef} defaultValue={user.u_phone} />
        </InputContainer>
        <InputContainer>
          <FormLabel>Country</FormLabel>
          <FormSelect ref={countryRef} defaultValue={user.u_country}>
            {country_list.map((country) => (
              <option value={country}>{country}</option>
            ))}
          </FormSelect>
        </InputContainer>
        <ButtonContainer>
          <CloseButton type="button" onClick={() => setIsOpen(false)}>
            Close
          </CloseButton>
          <UpdateButton type="submit">Update</UpdateButton>
        </ButtonContainer>
      </Form>
    )
  );
};

export default ProfileForm;
