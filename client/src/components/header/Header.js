import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import Link from "../ui/Link";
import { colors } from "../../constant/colors";
import { ImEarth } from "react-icons/im";
import { SiYourtraveldottv } from "react-icons/si";
import { MdLocationCity, MdOutlineContactSupport } from "react-icons/md";
import { BsFillInfoCircleFill } from "react-icons/bs";
import { FaUserCircle } from "react-icons/fa";
import { getUserProfileAPI } from "../../service/user-api";
import { authorizeUser } from "../../auth/Authorization";

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
  font-size: 50px;
  font-weight: 600;
  font-family: "Alatsi", sans-serif;
`;
const Login = styled(Link)`
  background-color: white;
  border-radius: 5px;
  padding: 5px 15px;
  color: ${colors.black};
  font-size: 20px;
  margin-right: 50px;
`;
const ProfileButton = styled(Link)`
  background-color: white;
  border-radius: 5px;
  padding: 5px 15px;
  color: ${colors.black};
  font-size: 20px;
  margin-right: 50px;
`;

const InlineNavLink = styled(Link)`
  color: rgba(0, 0, 0, 0.7);
`;

const Header = ({ scrollValue }) => {
  const [headerTransparency, setHeaderTransparency] = useState("00");
  const [navDisplay, setNavDisplay] = useState("none");

  const [isAuth, setIsAuth] = useState(false);
  const bgRef = useRef();
  const navRef = useRef();
  bgRef.current = headerTransparency;
  navRef.current = navDisplay;

  const InlineNavbar = styled.div`
    display: ${navRef.current};
    gap: 40px;
    padding: 10px 20px;
    font-size: 24px;

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
    };
    checkAuthorization();
  }, []); //authorize if user is logged in, and display button accordingly

  useEffect(() => {
    const handleScroll = () => {
      const show = window.scrollY > scrollValue;
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
  }, []); //handles the header display css

  return (
    <Container>
      <HeaderContainer>
        <Logo to="/">
          travis
          <ImEarth size={28} />r
        </Logo>
        {isAuth ? (
          <ProfileButton to="/profile">
            <FaUserCircle />
          </ProfileButton>
        ) : (
          <Login to="/login">Login</Login>
        )}
      </HeaderContainer>
      <InlineNavbar>
        <InlineNavLink>
          <SiYourtraveldottv /> Packages
        </InlineNavLink>
        <InlineNavLink>
          <MdLocationCity />
          Destinations
        </InlineNavLink>
        <InlineNavLink>
          <MdOutlineContactSupport />
          Contact
        </InlineNavLink>
        <InlineNavLink>
          <BsFillInfoCircleFill />
          About
        </InlineNavLink>
      </InlineNavbar>
    </Container>
  );
};

export default Header;
