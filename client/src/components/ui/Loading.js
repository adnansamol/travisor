import React from "react";
import { ImEarth } from "react-icons/im";
import styled, { keyframes } from "styled-components";
import { colors } from "../../constant/colors";

const spin = keyframes`
    from {transform: rotateZ(0deg);}
    to {transform: rotateZ(360deg);}
`;
const ellipses = keyframes`
    0% {content: "";}
    35% {content: ".";}
    65% {content: "..";}
    100% {content: "...";}
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Text = styled.div`
  &::after {
    content: "";
    animation-name: ${ellipses};
    animation-duration: 2s;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
  }
`;
const Logo = styled(ImEarth)`
  margin: 5px;
  animation-name: ${spin};
  animation-duration: 1s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
`;
const Loading = () => {
  return (
    <Container>
      <Logo size={40} color={colors.teal500} />

      <Text>Fetching</Text>
    </Container>
  );
};

export default Loading;
