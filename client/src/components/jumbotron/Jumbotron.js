import React from "react";
import styled from "styled-components";
const Container = styled.div`
  position: absolute;
  top: 0;
  z-index: -1;
  height: 85vh;
  width: 100%;
  background-image: url("/images/background/login-bg-2.jpg");

  background-position: center -70px;
  background-repeat: no-repeat;
  background-size: cover;
`;

const Jumbotron = ({ children }) => {
  return <Container>{children}</Container>;
};

export default Jumbotron;
