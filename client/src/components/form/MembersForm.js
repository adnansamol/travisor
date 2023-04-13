import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { makePaymentAPI } from "../../service/booking-api";
import Button from "../ui/Button";
import { PackageContext } from "../../context/package-context";

const Container = styled.div`
  width: 100%;
  height: 100%;
  border: 1px solid;
`;
const GuestContainer = styled.div`
  width: 100%;
  height: 100%;
  border: 1px solid;
`;
const PaymentContainer = styled.div`
  width: 100%;
  height: 100%;
  border: 1px solid;
`;

const Form = styled.form``;
const FormLabel = styled.label``;
const FormInput = styled.input``;
const AddMember = styled(Button)``;
const ProceedButton = styled(Button)``;

const RemoveMember = styled(Button)`
  background-color: crimson;
  color: white;
  padding: 5px 15px;
  font-size: 13px;
`;
const PaymentButton = styled(Button)``;
const MembersForm = () => {
  const { travelPackage, setTravelPackage } = useContext(PackageContext);
  const [guestCount, setGuestCount] = useState(2);
  const [guests, setGuests] = useState([]);
  const [togglePayment, setTogglePayment] = useState(false);
  const removeGuestHandler = (id) => {
    const form = document.getElementById(id);
    if (guestCount > 2) {
      form.remove();
    }
  };
  const onProceedHandler = () => {
    const guests = document.getElementsByName("guest");
    for (let guest of guests) {
      setGuests((old) => [
        ...old,
        { name: guest.fullName.value, age: guest.age.value },
      ]);
    }
    setTravelPackage({ ...travelPackage, p_guests: guests });
    setTogglePayment(true);
  };

  const onMakePaymentHandler = async () => {
    const response = await makePaymentAPI(travelPackage);
    window.open(response.url);
    localStorage.setItem("id", response.id);
  };
  useEffect(() => {
    console.log(guests);
  }, [guests]);
  return (
    <Container id="modal">
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
                <FormLabel>Full name</FormLabel>
                <FormInput name="fullName" />
                <FormLabel>Age</FormLabel>
                <FormInput name="age" />
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
