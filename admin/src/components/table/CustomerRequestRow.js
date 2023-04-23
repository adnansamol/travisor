import React from "react";
import { Link } from "react-router-dom";

const CustomerRequestRow = ({
  customerRequest,
  index,
  deleteCustomerRequest,
}) => {
  return (
    customerRequest && (
      <tr>
        <td>{index + 1}</td>
        <td>{new Date(customerRequest.createdAt).toLocaleString()}</td>
        <td>{customerRequest.c_name}</td>
        <td>{customerRequest.c_email}</td>
        <td>{customerRequest.c_phone}</td>
        <td>{customerRequest.c_message}</td>
        <td>
          <button
            className="btn btn-danger mx-2"
            onClick={() => deleteCustomerRequest(customerRequest._id)}
          >
            Delete
          </button>
        </td>
      </tr>
    )
  );
};

export default CustomerRequestRow;
