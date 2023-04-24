import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import UpdateTravelPackageForm from "../components/form/UpdateTravelPackageForm";
import { updateTravelPackageAPI } from "../service/package-api";
const Container = styled.div``;
const FormContainer = styled.div`
  width: 40%;
  margin: auto;
  margin-top: 50px;
`;

const UpdateTravelPackage = () => {
  const navigate = useNavigate();

  const updateTravelPackage = async (id, formData) => {
    const response = await updateTravelPackageAPI(id, formData);
    alert(response);
    navigate("/allPackages");
  };

  return (
    <Container>
      <FormContainer>
        <h1>Update Package</h1>
        <UpdateTravelPackageForm updateTravelPackage={updateTravelPackage} />
      </FormContainer>
    </Container>
  );
};

export default UpdateTravelPackage;