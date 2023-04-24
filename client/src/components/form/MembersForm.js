import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { makePaymentAPI } from "../../service/booking-api";
import Button from "../ui/Button";
import { PackageContext } from "../../context/package-context";
import { getUserProfileAPI } from "../../service/user-api";
import { useNavigate } from "react-router-dom";
import { colors } from "../../constant/colors";
import { IoClose } from "react-icons/io5";
import PaymentSummary from "../card/PaymentSummary";

const Container = styled.div`
  width: 100%;
  height: 100%;
`;
const GuestContainer = styled.div`
  width: 100%;
  height: 80%;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  padding-bottom: 20px;
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
const ButtonContainer = styled.div`
  background-color: white;
  border-top: 1px solid;
  width: 100%;
  text-align: right;
`;
const ContinueButton = styled(Button)`
  margin-top: 10px;
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

const MembersForm = ({ setIsOpen }) => {
  const navigate = useNavigate();
  const { travelPackage, setTravelPackage } = useContext(PackageContext);
  const [guestCount, setGuestCount] = useState(2);
  const [togglePayment, setTogglePayment] = useState(false);
  const removeGuestHandler = (id) => {
    const form = document.getElementById(id);
    if (document.getElementsByName("guest").length > 1) {
      form.remove();
    }
  };
  const onProceedHandler = () => {
    const guestList = document.getElementsByName("guest");
    let guests = [];
    let adults = 0;
    let children = 0;

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
      if (guest.age.value > 18) adults++;
      else if (guest.age.value < 18) children++;
    }
    const rooms = Math.abs(guests.length / 2);
    const basePrice =
      (travelPackage.p_price.base_price - travelPackage.p_price.discount) *
      guests.length;
    console.log(travelPackage.p_hotel);
    const hotelPrice = Number(travelPackage.p_hotel.price_per_room * rooms);
    const transportPrice = travelPackage.p_transport
      ? Number(travelPackage.p_transport.price)
      : 0;
    const flightPrice = travelPackage.p_flight
      ? Number(travelPackage.p_flight.price)
      : 0 + travelPackage.p_flight_return
      ? Number(travelPackage.p_flight_return.price)
      : 0;
    console.log(flightPrice, hotelPrice, transportPrice);
    const totalCost = basePrice + hotelPrice + transportPrice + flightPrice;

    setTravelPackage({
      ...travelPackage,
      p_guests: guests,
      p_adults: adults,
      p_children: children,
      p_rooms: rooms,
      p_total_cost: totalCost,
    });
    setTogglePayment(true);
  };

  const onMakePaymentHandler = async () => {
    if (await getUserProfileAPI(localStorage.getItem("token"))) {
      const response = await makePaymentAPI(travelPackage);
      window.open(response.url);
      localStorage.setItem("travelPackage", JSON.stringify(travelPackage));
      localStorage.setItem("id", response.id);
    } else {
      alert("Please login to continue payment!");
      navigate("/login");
    }
  };

  return (
    <Container id="modal">
      <CloseButton onClick={() => setIsOpen(false)}>
        <IoClose size={24} />
      </CloseButton>
      {!togglePayment && (
        <>
          {" "}
          <GuestContainer>
            <AddMember onClick={() => setGuestCount((old) => old + 1)}>
              Add Guest
            </AddMember>
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
          </GuestContainer>
          <ButtonContainer>
            <ContinueButton onClick={onProceedHandler}>Continue</ContinueButton>
          </ButtonContainer>
        </>
      )}
      {togglePayment && (
        <PaymentSummary onMakePaymentHandler={onMakePaymentHandler} />
      )}
    </Container>
  );
};

export default MembersForm;
