import React from "react";
import Link from "../ui/Link";
import styled from "styled-components";
import { colors } from "../../constant/colors";
import { SiYourtraveldottv } from "react-icons/si";
import { MdLocationCity, MdOutlineContactSupport } from "react-icons/md";
import { BsFillInfoCircleFill } from "react-icons/bs";
const Navbar = () => {
  const Container = styled.div`
    display: flex;
    background-color: ${colors.purple};
    width: 80%;
    margin: auto;
    margin-top: 20px;
    padding: 15px 15px;
    font-size: 24px;
    border-radius: 10px;
    box-shadow: 0 0 4px rgba(0, 0, 0, 0.1);
    justify-content: space-between;
  `;
  const NavContainer = styled.div`
    text-align: center;
  `;
  const NavText = styled.div`
    font-size: 18px;
  `;
  const NavLink = styled(Link)`
    color: white;
  `;
  const iconSize = 38;
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
