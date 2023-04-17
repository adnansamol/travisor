import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { makePaymentAPI } from "../../service/booking-api";
import Button from "../ui/Button";
import { PackageContext } from "../../context/package-context";
import { getUserProfileAPI } from "../../service/user-api";
import { useNavigate } from "react-router-dom";
import { colors } from "../../constant/colors";
import { IoClose } from "react-icons/io5";

const Container = styled.div`
  width: 100%;
  height: 100%;
`;
const GuestContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;
const PaymentContainer = styled.div`
  width: 100%;
  height: 100%;
  border: 1px solid;
`;

const Form = styled.form`
  display: flex;
  align-items: flex-end;
`;
const InputContainer = styled.div`
  margin: 10px 10px 0 10px;
`;
const FormLabel = styled.label`
  display: block;
  margin-bottom: 5px;
  color: ${colors.black};
  font-weight: 500;
`;
const FormInput = styled.input`
  padding: 5px;
  border: 1px solid lightgray;
  border-radius: 5px;

  &:focus {
    outline: none;
    border: 1px solid orangered;
  }
`;
const AddMember = styled(Button)`
  background-color: ${colors.dodgerblue};
  color: white;
`;
const ProceedButton = styled(Button)`
  margin-left: calc(100% - 120px);
  margin-top: 20%;
  background-color: ${colors.teal500};
`;

const RemoveMember = styled(Button)`
  background-color: crimson;
  color: white;
  padding: 5px 15px;
  font-size: 13px;
`;
const CloseButton = styled.div`
  cursor: pointer;
  margin: 0 0 10px 5px;
`;
const PaymentButton = styled(Button)``;
const MembersForm = ({ setIsOpen }) => {
  const navigate = useNavigate();
  const { travelPackage, setTravelPackage } = useContext(PackageContext);
  const [guestCount, setGuestCount] = useState(2);
  const [togglePayment, setTogglePayment] = useState(false);
  const removeGuestHandler = (id) => {
    const form = document.getElementById(id);
    if (guestCount > 2) {
      form.remove();
    }
  };
  const onProceedHandler = () => {
    const guestList = document.getElementsByName("guest");
    let guests = [];
    for (let guest of guestList) {
      if (
        guest.fullName.value.trim() == "" ||
        guest.age.value == "" ||
        guest.age.value == 0 ||
        isNaN(guest.age.value)
      ) {
        return alert("Please fill all the valid details of the guest");
      }
      guests.push({ name: guest.fullName.value, age: guest.age.value });
    }
    setTravelPackage({ ...travelPackage, p_guests: guests });
    setTogglePayment(true);
  };

  const onMakePaymentHandler = async () => {
    if (await getUserProfileAPI(localStorage.getItem("token"))) {
      const response = await makePaymentAPI(travelPackage);
      window.open(response.url);
      localStorage.setItem("travelPackage", JSON.stringify(travelPackage));
      localStorage.setItem("id", response.id);
    } else {
      alert("Please login to continue payment..");
      navigate("/login");
    }
  };

  return (
    <Container id="modal">
      <CloseButton onClick={() => setIsOpen(false)}>
        <IoClose size={24} />
      </CloseButton>
      {!togglePayment && (
        <GuestContainer>
          {guestCount < 6 && (
            <AddMember onClick={() => setGuestCount((old) => old + 1)}>
              Add Guest
            </AddMember>
          )}
          {[...Array(guestCount)].map((_, i) => (
            <>
              <Form name="guest" id={i}>
                <InputContainer>
                  <h4>New Guest</h4>
                  <FormLabel>Full name</FormLabel>
                  <FormInput name="fullName" />
                </InputContainer>
                <InputContainer>
                  <FormLabel>Age</FormLabel>
                  <FormInput type="number" name="age" />
                </InputContainer>
                <RemoveMember
                  type="button"
                  onClick={() => removeGuestHandler(i)}
                >
                  Remove
                </RemoveMember>
              </Form>
            </>
          ))}

          <ProceedButton onClick={onProceedHandler}>Proceed</ProceedButton>
        </GuestContainer>
      )}
      {togglePayment && (
        <PaymentContainer>
          <PaymentButton onClick={onMakePaymentHandler}>
            Make Payment
          </PaymentButton>
        </PaymentContainer>
      )}
    </Container>
  );
};

export default MembersForm;
