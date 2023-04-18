import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { getAgencyProfileAPI, updateAgencyAPI } from "../../service/agency-api";
import Loading from "../loading/Loading";
import { country_list } from "../../constant/countries";
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

const ProfileForm = ({ setIsOpen }) => {
  const [agency, setAgency] = useState();
  const [loading, setLoading] = useState(true);
  const nameRef = useRef();
  const addressRef = useRef();
  const phoneRef = useRef();
  const countryRef = useRef();
  const gstRef = useRef();
  useEffect(() => {
    fetchUser();
  }, []);

  const fetchUser = async () => {
    const data = await getAgencyProfileAPI(localStorage.getItem("admin-token"));
    setLoading(false);
    setAgency(data);
  };
  const updateUserProfile = async (e) => {
    e.preventDefault();
    if (
      nameRef.current.value == "" ||
      gstRef.current.value == "" ||
      addressRef.current.value == "" ||
      phoneRef.current.value == "" ||
      countryRef.current.value == ""
    ) {
      return alert("Please enter valid details");
    }
    const details = {
      a_email: agency.a_email,
      a_name: nameRef.current.value,
      a_address: addressRef.current.value,
      a_phone: phoneRef.current.value,
      a_country: countryRef.current.value,
      a_gstnumber: gstRef.current.value,
    };
    if (await getAgencyProfileAPI(localStorage.getItem("admin-token"))) {
      const response = await updateAgencyAPI(details);
      alert(response);
      setIsOpen(false);
    } else {
      alert("Please login first");
    }
  };
  return loading ? (
    <Loading />
  ) : (
    agency && (
      <Form onSubmit={updateUserProfile}>
        <InputContainer>
          <FormLabel>Agency Name</FormLabel>
          <FormInput ref={nameRef} defaultValue={agency.a_name} />
        </InputContainer>
        <InputContainer>
          <FormLabel>Office Address</FormLabel>
          <FormInput ref={addressRef} defaultValue={agency.a_address} />
        </InputContainer>
        <InputContainer>
          <FormLabel>Phone number</FormLabel>
          <FormInput ref={phoneRef} defaultValue={agency.a_phone} />
        </InputContainer>
        <InputContainer>
          <FormLabel>GST number</FormLabel>
          <FormInput ref={gstRef} defaultValue={agency.a_gstnumber} />
        </InputContainer>
        <InputContainer>
          <FormLabel>Country</FormLabel>
          <FormSelect ref={countryRef} defaultValue={agency.a_country}>
            {country_list.map((country) => (
              <option value={country}>{country}</option>
            ))}
          </FormSelect>
        </InputContainer>
        <ButtonContainer>
          <button
            className="btn btn-secondary mx-2"
            type="button"
            onClick={() => setIsOpen(false)}
          >
            Close
          </button>
          <button className="btn btn-primary" type="submit">
            Confirm
          </button>
        </ButtonContainer>
      </Form>
    )
  );
};

export default ProfileForm;
