import React, { useEffect, useRef, useState } from "react";
import Link from "../ui/Link";
import styled from "styled-components";
import { colors } from "../../constant/colors";
import { SiYourtraveldottv } from "react-icons/si";
import { MdLocationCity, MdOutlineContactSupport } from "react-icons/md";
import { BsFillInfoCircleFill } from "react-icons/bs";
import { destinations } from "../../constant/destinations";
import { AiFillSafetyCertificate } from "react-icons/ai";

const NavContainer = styled.div`
  text-align: center;
`;
const NavText = styled.div`
  font-size: 15px;
`;
const DestinationDropdown = styled.div`
  visibility: hidden;
  display: flex;
  flex-direction: column;
  padding: 10px;
  flex-wrap: wrap;
  height: 200px;
  gap: 5px;
  column-gap: 20px;
  opacity: 0;
  position: absolute;
  width: 200px;
  border-radius: 5px;
  background-color: white;
  margin-top: 2px;
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
const NavLink = styled(Link)`
  color: ${colors.black};

  & ${NavContainer}:hover + ${DestinationDropdown} {
    visibility: visible;
    opacity: 100%;
  }
`;
const NavAnchor = styled.a`
  color: ${colors.black};
  text-decoration: none;
`;

const Navbar = () => {
  const [navDisplay, setNavDisplay] = useState("flex");
  const navRef = useRef();
  navRef.current = navDisplay;

  useEffect(() => {
    const handleScroll = () => {
      const show = window.scrollY > 20;
      if (show) {
        setNavDisplay("none");
      } else {
        setNavDisplay("flex");
      }
    };

    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const iconSize = 30;

  const Container = styled.div`
    position: absolute;
    display: ${navRef.current};
    top: 100px;
    left: 20%;
    background-color: white;
    width: 60%;
    padding: 8px 30px;
    font-size: 24px;
    border-radius: 10px;
    box-shadow: 0 0 4px rgba(0, 0, 0, 0.1);
    justify-content: space-between;
  `;

  return (
    <Container>
      <NavAnchor href="#packages">
        <NavContainer>
          <SiYourtraveldottv size={iconSize} />
          <NavText>Packages</NavText>
        </NavContainer>
      </NavAnchor>
      <NavLink>
        <NavContainer>
          <SiYourtraveldottv size={iconSize} />
          <NavText>Destinations</NavText>
        </NavContainer>
        <DestinationDropdown>
          {destinations.map((destination) => (
            <NavLink to={"/destination/" + destination.name}>
              {destination.name}
            </NavLink>
          ))}
        </DestinationDropdown>
      </NavLink>
      <NavLink to={`/contact`}>
        <NavContainer>
          <MdOutlineContactSupport size={iconSize} />
          <NavText>Contact</NavText>
        </NavContainer>
      </NavLink>
      <NavLink to={`/about`}>
        <NavContainer>
          <BsFillInfoCircleFill size={iconSize} />
          <NavText>About</NavText>
        </NavContainer>
      </NavLink>
      <NavLink to={`/rules-and-guidelines`}>
        <NavContainer>
          <AiFillSafetyCertificate size={iconSize} />
          <NavText>COVID-19 Safety</NavText>
        </NavContainer>
      </NavLink>
    </Container>
  );
};

export default Navbar;
