import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { colors } from "../../constant/colors";
import { ImEarth } from "react-icons/im";
import Navbar from "../navbar/Navbar";
const Header = () => {
  const [headerTransparency, setHeaderTransparency] = useState(0);
  const navRef = useRef();
  navRef.current = headerTransparency;
  useEffect(() => {
    const handleScroll = () => {
      const show = window.scrollY > 70;
      if (show) {
        setHeaderTransparency(1);
      } else {
        setHeaderTransparency(0);
      }
    };

    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const Container = styled.div`
    position: fixed;
    top: 0;
    width: 100%;
  `;
  const HeaderContainer = styled.div`
    background-color: rgba(255, 255, 255, ${navRef.current});
    border-bottom: ${navRef.current * 1}px solid ${colors.indigo_blue};
  `;
  const Logo = styled(Link)`
    display: block;
    margin: auto;
    width: fit-content;
    color: ${colors.indigo_blue};
    text-decoration: none;
    font-size: 50px;
    font-weight: 600;
    font-family: "Alatsi", sans-serif;
  `;

  return (
    <Container>
      <HeaderContainer>
        <Logo to="/">
          travis
          <ImEarth size={28} />r
        </Logo>
      </HeaderContainer>
      <Navbar />
    </Container>
  );
};

export default Header;
