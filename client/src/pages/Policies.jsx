import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 100%;
`;
const PoliciesContainer = styled.div`
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.3);
  padding: 10px 15px;
`;
const Title = styled.div`
  font-size: 24px;
  font-weight: 500;
`;
const RefundPolicyDescription = styled.div``;
const Policies = () => {
  return (
    <Container>
      <PoliciesContainer>
        <Title>Package Policies</Title>
        <hr />
        <RefundPolicyDescription>
          <h5>Refund Policy</h5>
          The refund policy for every package may differ. Refund policy refers
          to the valid date on or after the package becomes ineligible for a
          refund.
        </RefundPolicyDescription>
      </PoliciesContainer>
    </Container>
  );
};

export default Policies;
