import React, { useEffect, useState } from "react";
import { getUserProfileAPI, logoutUserAPI } from "../service/user-api";
import styled from "styled-components";
import Link from "../components/ui/Link";
import { useNavigate } from "react-router-dom";
import Button from "../components/ui/Button";
import { getBookingByUserIdAPI } from "../service/booking-api";

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
  return (
    user && (
      <div>
        {user.u_email}
        <Button onClick={getUserBookings}>My Bookings</Button>
        {bookings &&
          bookings.map((booking) => <div>{booking.b_booking_cost}</div>)}
        <LogoutButton onClick={onLogout}>Logout</LogoutButton>
      </div>
    )
  );
};

export default Profile;
