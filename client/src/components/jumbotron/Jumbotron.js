import React from "react";
import styled from "styled-components";

const Jumbotron = ({ children }) => {
  const image =
    "https://images.pexels.com/photos/15031960/pexels-photo-15031960.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";

  const Container = styled.div` 
    position: absolute;
    top:0;
    z-index: -1;
    height: 90vh;
    width: 100%;
    background-image: linear-gradient(
        to bottom,
        rgba(255, 255, 255, 1) 5%,
        transparent
      ),
      url(${image})
        ;
    );
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    `;
  return <Container>{children}</Container>;
};

export default Jumbotron;
