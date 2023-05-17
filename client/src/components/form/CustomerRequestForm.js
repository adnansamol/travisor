import { useEffect, useState } from "react";
import { colors } from "../../constant/colors";
import {
  createCustomerRequestAPI,
  getPhoneNumberByIdAPI,
} from "../../service/customer-request-api";
import Button from "../ui/Button";
import styled from "styled-components";

const Form = styled.form``;
const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
`;
const Label = styled.label`
  font-size: 18px;
  color: white;
  margin-bottom: 5px;
`;
const Input = styled.input`
  margin-bottom: 10px;
  border-radius: 10px;
  font-size: 18px;
  padding: 10px;
  border: none;
`;
const TextArea = styled.textarea`
  margin-bottom: 10px;
  border-radius: 10px;
  font-size: 20px;
  padding: 10px;
  border: none;
  resize: none;
`;
const SubmitButton = styled(Button)`
  color: white;
  background-color: ${colors.black};
`;
const CustomerRequestForm = ({ agencyId, modal }) => {
  const [phone, setPhone] = useState("");

  useEffect(() => {
    const { p_agency_id } = localStorage.getItem("package-cache")
      ? JSON.parse(localStorage.getItem("package-cache"))
      : "";
    const fetchPhoneNumber = async () => {
      const phoneNumber = await getPhoneNumberByIdAPI(p_agency_id);
      setPhone(phoneNumber);
    };
    fetchPhoneNumber();
  }, []);
  const submitCustomization = async (event) => {
    event.preventDefault();
    const form = event.target;
    const formData = {
      c_agency_id: agencyId,
      c_name: form.fullname.value,
      c_email: form.email.value,
      c_phone: form.phone.value,
      c_message: form.message.value,
    };
    const response = await createCustomerRequestAPI(formData);
    alert(response);
    modal(false);
  };
  return (
    <Form onSubmit={submitCustomization}>
      <InputGroup>
        <Label>Full Name *</Label>
        <Input name="fullname" required />
        <Label>Email *</Label>
        <Input name="email" type="email" required />
        <Label>Phone *</Label>
        <Input name="phone" required />
        <Label>Message *</Label>
        <TextArea name="message" required />
        <SubmitButton>Submit</SubmitButton>
      </InputGroup>
      <hr />
      <div
        style={{
          textAlign: "center",
          color: "white",
          fontSize: 18,
        }}
      >
        Call us at toll free number
        <br />
        <h4>{phone}</h4>
      </div>
    </Form>
  );
};

export default CustomerRequestForm;
