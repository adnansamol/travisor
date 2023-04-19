import React, { useState } from "react";
import styled from "styled-components";
import AddTravelPackageForm from "../components/form/AddTravelPackageForm";
import { createNewTravelPackageAPI } from "../service/package-api";
const Container = styled.div``;
const FormContainer = styled.div`
  width: 40%;
  margin: auto;
  margin-top: 50px;
`;

const AddTravelPackage = () => {
  const createTravelPackage = async (formData) => {
    const response = await createNewTravelPackageAPI(formData);
  };

  return (
    <Container>
      <FormContainer>
        <h1>Create New Package</h1>
        <AddTravelPackageForm createTravelPackage={createTravelPackage} />
      </FormContainer>
    </Container>
  );
};

export default AddTravelPackage;
