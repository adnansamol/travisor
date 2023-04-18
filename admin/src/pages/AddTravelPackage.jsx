import React from "react";
import AddTravelPackageForm from "../components/form/AddTravelPackageForm";
import { createNewTravelPackageAPI } from "../service/package-api";

const AddTravelPackage = () => {
  const createTravelPackage = async (formData) => {
    const response = await createNewTravelPackageAPI(formData);
  };
  return (
    <div>
      <AddTravelPackageForm createTravelPackage={createTravelPackage} />
    </div>
  );
};

export default AddTravelPackage;
