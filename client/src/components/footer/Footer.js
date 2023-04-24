import React from "react";
import {
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagramSquare,
  FaLinkedin,
} from "react-icons/fa";
import { ImEarth } from "react-icons/im";
import styled from "styled-components";
import { colors } from "../../constant/colors";
import Link from "../ui/Link";

const Container = styled.div`
  background-color: ${colors.teal100};
  border-top: 1px solid ${colors.teal500};
  padding: 20px 50px;
`;
const Logo = styled(Link)`
  display: block;
  position: relative;
  width: fit-content;
  color: ${colors.black};
  font-size: 35px;
  font-weight: 600;
  font-family: "Alatsi", sans-serif;
  &:hover {
    color: ${colors.black};
  }
`;
const CopyrightText = styled.div`
  color: gray;
  font-size: 13px;
`;
const SocialLinks = styled.div`
  margin-top: 40px;
`;
const Footer = () => {
  return (
    <Container>
      <Logo to="/">
        travis
        <ImEarth size={20} />r
      </Logo>
      <CopyrightText>All rights reserved © 2023</CopyrightText>

      <SocialLinks>
        <a
          style={{ color: colors.black }}
          href="https://www.linkedin.com/in/adnan-samol/"
          target="blank"
        >
          <FaInstagramSquare size={30} />
        </a>
        &nbsp;&nbsp;
        <a
          style={{ color: colors.black }}
          href="https://www.linkedin.com/in/adnan-samol/"
          target="blank"
        >
          <FaFacebookSquare size={30} />
        </a>
        &nbsp;&nbsp;
        <a
          style={{ color: colors.black }}
          href="https://www.linkedin.com/in/adnan-samol/"
          target="blank"
        >
          <FaLinkedin size={30} />
        </a>
        &nbsp;&nbsp;
        <a
          style={{ color: colors.black }}
          href="https://github.com/adnansamol"
          target="blank"
        >
          <FaGithubSquare size={30} />
        </a>
      </SocialLinks>
    </Container>
  );
};

export default Footer;
