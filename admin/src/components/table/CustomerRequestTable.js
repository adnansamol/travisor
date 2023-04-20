import React from "react";
import { deleteTravelPackageByIdAPI } from "../../service/package-api";
import CustomerRequestRow from "./CustomerRequestRow";

const CustomerRequestTable = ({ customerRequests }) => {
  const deleteCustomerRequest = async (id) => {
    const response = await deleteTravelPackageByIdAPI(id);
    alert(response);
  };
  return (
    <table className="table">
      <thead>
        <tr>
          <th>Sr No.</th>
          <th>Name</th>
          <th>Email</th>
          <th>Phone</th>
          <th>Country</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {customerRequests &&
          customerRequests.map((customerRequest, index) => (
            <CustomerRequestRow
              key={index}
              customerRequest={customerRequest}
              index={index}
            />
          ))}
      </tbody>
    </table>
  );
};

export default CustomerRequestTable;
