import React, { useEffect, useRef, useState } from "react";
import Link from "../ui/Link";
import styled from "styled-components";
import { colors } from "../../constant/colors";
import { SiYourtraveldottv } from "react-icons/si";
import { MdLocationCity, MdOutlineContactSupport } from "react-icons/md";
import { BsFillInfoCircleFill } from "react-icons/bs";

const NavContainer = styled.div`
  text-align: center;
`;
const NavText = styled.div`
  font-size: 15px;
`;
const NavLink = styled(Link)`
  color: ${colors.black};
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
    left: 150px;
    background-color: white;
    width: 80%;
    padding: 8px 15px;
    font-size: 24px;
    border-radius: 10px;
    box-shadow: 0 0 4px rgba(0, 0, 0, 0.1);
    justify-content: space-between;
  `;

  return (
    <Container>
      <NavLink to={`/packages`}>
        <NavContainer>
          <SiYourtraveldottv size={iconSize} />
          <NavText>Packages</NavText>
        </NavContainer>
      </NavLink>
      <NavLink to={`/about`}>
        <NavContainer>
          <MdLocationCity size={iconSize} />
          <NavText>Destinations</NavText>
        </NavContainer>
      </NavLink>
      <NavLink to={`/contact`}>
        <NavContainer>
          <MdOutlineContactSupport size={iconSize} />
          <NavText>Contact</NavText>
        </NavContainer>
      </NavLink>
      <NavLink to={`/contact`}>
        <NavContainer>
          <BsFillInfoCircleFill size={iconSize} />
          <NavText>About</NavText>
        </NavContainer>
      </NavLink>
    </Container>
  );
};

export default Navbar;
