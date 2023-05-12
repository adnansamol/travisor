import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Link from "../ui/Link";
import { colors } from "../../constant/colors";
import { ImEarth } from "react-icons/im";
import { SiYourtraveldottv } from "react-icons/si";
import { MdLocationCity, MdOutlineContactSupport } from "react-icons/md";
import { AiFillSafetyCertificate } from "react-icons/ai";
import { BsFillInfoCircleFill } from "react-icons/bs";
import { FaUserCircle } from "react-icons/fa";
import { getUserProfileAPI, logoutUserAPI } from "../../service/user-api";
import { authorizeUser } from "../../auth/Authorization";
import Button from "../ui/Button";
import { destinations } from "../../constant/destinations";

const Container = styled.div`
  z-index: 1;
  position: fixed;
  top: 0;
  width: 100%;
`;

const Logo = styled(Link)`
  display: block;
  position: relative;
  margin-left: 50px;
  width: fit-content;
  color: white;
  font-size: 35px;
  font-weight: 600;
  font-family: "Alatsi", sans-serif;

  &:hover {
    color: white;
  }
`;
const Login = styled(Link)`
  background-color: white;
  border-radius: 5px;
  padding: 5px 15px;
  color: ${colors.black};
  font-size: 20px;
  margin-right: 50px;
`;

const ProfileDropdown = styled.div`
  overflow: clip;
  visibility: hidden;
  opacity: 0;
  position: absolute;
  right: 50px;
  width: fit-content;
  border-radius: 5px;
  background-color: white;
  margin-top: 3px;
  z-index: 5;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.2);
  transition: opacity 0.1s linear;
`;
const ProfileButton = styled(Link)`
  background-color: white;
  border-radius: 5px;
  padding: 5px 15px;
  color: ${colors.black};
  font-size: 20px;
  margin-right: 50px;
`;
const DropdownWrapper = styled.div`
  & ${ProfileButton}:hover + ${ProfileDropdown} {
    visibility: visible;
    opacity: 100%;
  }
  & ${ProfileDropdown}:hover {
    visibility: visible;
    opacity: 100%;
  }
`;

const DropdownLink = styled(Link)`
  color: ${colors.black};
`;

const LogoutButton = styled(Button)`
  color: black;
  background-color: transparent;
  padding: 0;
`;
const DropdownLinkWrapper = styled.div`
  padding: 10px 20px;
  &:hover {
    background-color: ${colors.teal500};
  }
  &:hover > ${DropdownLink} {
    color: white;
  }
`;
const InlineNavLink = styled(Link)`
  color: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  gap: 2px;
`;
const InlineNavAnchor = styled.a`
  color: rgba(0, 0, 0, 0.7);
  text-decoration: none;
`;
const DestinationDropdown = styled.div`
  visibility: hidden;
  display: flex;
  flex-direction: column;
  padding: 10px;
  flex-wrap: wrap;
  height: 200px;
  row-gap: 5px;
  column-gap: 20px;
  opacity: 0;
  position: absolute;
  width: 200px;
  border-radius: 5px;
  background-color: white;
  margin-right: 20px;
  z-index: 5;
  font-size: 14px;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.2);
  transition: opacity 0.1s linear;

  &:hover {
    visibility: visible;
    opacity: 100%;
  }
`;
const DestinationWrapper = styled.div`
  & ${InlineNavLink}:hover + ${DestinationDropdown} {
    visibility: visible;
    opacity: 100%;
  }
`;

const Header = ({ isStatic }) => {
  const [headerTransparency, setHeaderTransparency] = useState("00");
  const [navDisplay, setNavDisplay] = useState("none");
  const [loading, setLoading] = useState(true);

  const [isAuth, setIsAuth] = useState(false);
  const bgRef = useRef();
  const navRef = useRef();
  bgRef.current = headerTransparency;
  navRef.current = navDisplay;

  const navigate = useNavigate();
  const InlineNavbar = styled.div`
    display: ${navRef.current};
    gap: 40px;
    padding: 10px 20px;
    font-size: 16px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
    background-color: white;
  `;
  const HeaderContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: ${colors.teal500 + bgRef.current};
    border-bottom: ${bgRef.current * 1}px solid ${colors.teal500};
  `;
  useEffect(() => {
    const checkAuthorization = async () => {
      if (await authorizeUser()) setIsAuth(true);
      else setIsAuth(false);
      setLoading(false);
    };
    checkAuthorization();
  }, []); //authorize if user is logged in, and display button accordingly

  useEffect(() => {
    if (isStatic) {
      setHeaderTransparency("FF");
      setNavDisplay("flex");
    } else {
      const handleScroll = () => {
        const show = window.scrollY > 20;
        if (show) {
          setHeaderTransparency("FF");
          setNavDisplay("flex");
        } else {
          setHeaderTransparency("00");
          setNavDisplay("none");
        }
      };

      document.addEventListener("scroll", handleScroll);
      return () => {
        document.removeEventListener("scroll", handleScroll);
      };
    }
  }, []); //handles the header display css

  const onLogout = async () => {
    const { u_email } = await getUserProfileAPI(localStorage.getItem("token"));
    const response = await logoutUserAPI(u_email);
    localStorage.removeItem("token");
    alert(response);
    window.location.reload();
  };
  return (
    <Container>
      <HeaderContainer>
        <Logo to="/">
          travis
          <ImEarth size={20} />r
        </Logo>
        {loading ? (
          <div></div>
        ) : isAuth ? (
          <DropdownWrapper>
            <ProfileButton to="/profile/details">
              <FaUserCircle />
            </ProfileButton>
            <ProfileDropdown>
              <DropdownLinkWrapper>
                <DropdownLink to="/profile/details">Profile</DropdownLink>
              </DropdownLinkWrapper>
              <DropdownLinkWrapper>
                <DropdownLink to="/profile/myBookings">
                  My Bookings
                </DropdownLink>
              </DropdownLinkWrapper>
              <DropdownLinkWrapper>
                <LogoutButton onClick={onLogout}>Logout</LogoutButton>
              </DropdownLinkWrapper>
            </ProfileDropdown>
          </DropdownWrapper>
        ) : (
          <Login to="/login">Login</Login>
        )}
      </HeaderContainer>
      <InlineNavbar>
        <InlineNavAnchor href="#packages">
          <SiYourtraveldottv /> Packages
        </InlineNavAnchor>
        <DestinationWrapper>
          <InlineNavLink>
            <MdLocationCity />
            Destinations
          </InlineNavLink>
          <DestinationDropdown>
            {destinations.map((destination) => (
              <InlineNavLink to={"/destination/" + destination.name}>
                {destination.name}
              </InlineNavLink>
            ))}
          </DestinationDropdown>
        </DestinationWrapper>
        <InlineNavLink to={"/contact"}>
          <MdOutlineContactSupport />
          Contact
        </InlineNavLink>
        <InlineNavLink to={"/about"}>
          <BsFillInfoCircleFill />
          About
        </InlineNavLink>
        <InlineNavLink to={"/rules-and-guidelines"}>
          <AiFillSafetyCertificate />
          COVID-19 Safety
        </InlineNavLink>
      </InlineNavbar>
    </Container>
  );
};

export default Header;
