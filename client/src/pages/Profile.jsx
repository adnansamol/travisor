import React, { useState } from "react";
import styled from "styled-components";
import Link from "../components/ui/Link";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import Header from "../components/header/Header";
import { colors } from "../constant/colors";

const Container = styled.div`
  margin-top: 150px;
`;

const NavigationContainer = styled.div`
  width: 40%;
  display: flex;
  margin: auto;
  gap: 25px;
`;
const NavLinkContainer = styled.div`
  margin: auto;
  margin-bottom: 25px;
  flex: 100%;
  padding: 15px 25px;
  background-color: white;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  color: ${colors.black};
`;

const NavLink = styled(Link)`
  color: ${colors.black};
  font-weight: 500;
  text-align: center;
`;
const ActiveLink = styled(Link)`
  font-weight: 500;
  text-align: center;
`;
const Profile = () => {
  const { pathname } = useLocation();
  const [bookings, setBookings] = useState();
  const [selected, setSelected] = useState();
  const navigate = useNavigate();

  // const getUserBookings = async () => {
  //   const user = await fetchUser();
  //   const response = await getBookingByUserIdAPI(user._id);
  //   setBookings(response);
  // };

  // const onCancelBooking = async (id) => {
  //   const response = await cancelBookingAPI(id, "cancelled");
  //   getUserBookings();
  // };

  return (
    <>
      <Header scrollValue={-1} />
      <Container>
        <NavigationContainer>
          <NavLinkContainer>
            {pathname == "/profile/details" ? (
              <ActiveLink to="/profile/details">My Profile</ActiveLink>
            ) : (
              <NavLink to="/profile/details">My Profile</NavLink>
            )}
          </NavLinkContainer>
          <NavLinkContainer>
            {pathname == "/profile/myBookings" ? (
              <ActiveLink to="/profile/myBookings">My Bookings</ActiveLink>
            ) : (
              <NavLink to="/profile/myBookings">My Bookings</NavLink>
            )}
          </NavLinkContainer>
          <NavLinkContainer>
            {pathname == "/profile/travelHistory" ? (
              <ActiveLink to="/profile/travelHistory">TravelHistory</ActiveLink>
            ) : (
              <NavLink to="/profile/travelHistory">TravelHistory</NavLink>
            )}
          </NavLinkContainer>
        </NavigationContainer>
        <Outlet />
      </Container>
    </>
  );
};

export default Profile;
