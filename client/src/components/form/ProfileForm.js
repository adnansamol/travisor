import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { country_list } from "../../constant/countries";
import { getUserProfileAPI, updateUserAPI } from "../../service/user-api";
import Button from "../ui/Button";
import Loading from "../ui/Loading";

const Form = styled.form``;
const InputContainer = styled.div``;
const FormLabel = styled.label``;
const FormInput = styled.input``;
const FormSelect = styled.select``;
const UpdateButton = styled(Button)``;
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
        <UpdateButton type="submit">Update</UpdateButton>
      </Form>
    )
  );
};

export default ProfileForm;
