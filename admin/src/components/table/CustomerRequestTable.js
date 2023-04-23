import React from "react";
import CustomerRequestRow from "./CustomerRequestRow";
import { deleteCustomerRequestAPI } from "../../service/customer-request-api";

const CustomerRequestTable = ({ customerRequests }) => {
  const deleteCustomerRequest = async (id) => {
    if (window.confirm("Customer Request will be permanently deleted")) {
      const response = await deleteCustomerRequestAPI(id);
      alert(response);
    }
  };
  return (
    <table className="table">
      <thead>
        <tr>
          <th>Sr No.</th>
          <th>Sent At</th>
          <th>Name</th>
          <th>Email</th>
          <th>Phone</th>
          <th>Message</th>
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
              deleteCustomerRequest={deleteCustomerRequest}
            />
          ))}
      </tbody>
    </table>
  );
};

export default CustomerRequestTable;
