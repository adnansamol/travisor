import React from "react";
import styled from "styled-components";
import TPackage from "./TPackage";

const TPackages = () => {
  const Container = styled.div`
    margin: auto;
    width: fit-content;
  `;
  const FlexContainer = styled.div`
    display: flex;
    gap: 25px;
  `;
  const Title = styled.div`
    font-size: 40px;
    font-weight: 600;

    margin-bottom: 25px;
  `;
  return (
    <Container>
      <Title>Special Holiday Packages</Title>
      <FlexContainer>
        <TPackage />
        <TPackage />
        <TPackage />
        <TPackage />
        <TPackage />
      </FlexContainer>
    </Container>
  );
};

export default TPackages;
