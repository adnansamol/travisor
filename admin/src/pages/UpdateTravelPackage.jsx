import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import UpdateTravelPackageForm from "../components/form/UpdateTravelPackageForm";
import Loading from "../components/loading/Loading";
import { updateTravelPackageAPI } from "../service/package-api";
const Container = styled.div``;
const FormContainer = styled.div`
  width: 40%;
  margin: auto;
  margin-top: 50px;
`;

const UpdateTravelPackage = () => {
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const updateTravelPackage = async (id, formData) => {
    setLoading(true);
    const response = await updateTravelPackageAPI(id, formData);
    setLoading(false);
    alert(response);
    navigate("/allPackages");
  };

  return (
    <Container>
      {loading ? (
        <Loading />
      ) : (
        <FormContainer>
          <h1>Update Package</h1>

          <UpdateTravelPackageForm updateTravelPackage={updateTravelPackage} />
        </FormContainer>
      )}
    </Container>
  );
};

export default UpdateTravelPackage;
