import React, { useEffect, useState } from "react";
import { getUserProfileAPI, logoutUserAPI } from "../service/user-api";
import styled from "styled-components";
import Link from "../components/ui/Link";
import { useNavigate } from "react-router-dom";
import Button from "../components/ui/Button";
import {
  cancelBookingAPI,
  getBookingByUserIdAPI,
} from "../service/booking-api";
import Header from "../components/header/Header";
import { colors } from "../constant/colors";

const Container = styled.div`
  margin-top: 110px;
`;
const UserDetailsContainer = styled.div`
  margin: auto;
  padding: 15px 25px;
  background-color: white;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  width: 40%;
`;
const PersonalDetails = styled.div`
  font-size: 24px;
`;
const Text = styled.div`
  margin: 5px 0;
`;
const Label = styled.span`
  color: ${colors.black};
  font-weight: 500;
`;
const LogoutButton = styled(Button)``;
const Profile = () => {
  const [user, setUser] = useState();
  const [bookings, setBookings] = useState();

  const navigate = useNavigate();
  useEffect(() => {
    fetchUser();
  }, []);
  const fetchUser = async () => {
    const data = await getUserProfileAPI(localStorage.getItem("token"));

    setUser(data);
    return data;
  };

  const getUserBookings = async () => {
    const user = await fetchUser();
    const response = await getBookingByUserIdAPI(user._id);
    setBookings(response);
  };

  const onLogout = async () => {
    const { u_email } = await getUserProfileAPI(localStorage.getItem("token"));
    const response = await logoutUserAPI(u_email);
    localStorage.removeItem("token");
    alert(response);
    navigate("/");
  };

  const onCancelBooking = async (id) => {
    const response = await cancelBookingAPI(id, "cancelled");
    getUserBookings();
  };

  return (
    <>
      <Header scrollValue={-1} />
      {user && (
        <Container>
          <UserDetailsContainer>
            <PersonalDetails>Personal Details</PersonalDetails>
            <hr />
            <div>
              Welcome, <b>{user.u_name}</b>
            </div>
            <Text>
              <Label>Email:</Label> {user.u_email}
            </Text>
            <Text>
              <Label>Gender:</Label> {user.u_gender}
            </Text>
            <Text>
              <Label>Phone:</Label> {user.u_phone}
            </Text>
            <Text>
              <Label>Country:</Label> {user.u_country}
            </Text>
          </UserDetailsContainer>
        </Container>
      )}
    </>
  );
};

export default Profile;
