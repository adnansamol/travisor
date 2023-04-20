import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Loading from "../components/loading/Loading";
import CustomerRequestTable from "../components/table/CustomerRequestTable";
import { getAgencyProfileAPI } from "../service/agency-api";
import { getCustomerRequestsAPI } from "../service/customer-request-api";

const Container = styled.div``;
const TableContainer = styled.div`
  width: 80%;
  margin: auto;
`;
const CustomerRequests = () => {
  const [customerRequests, setCustomerRequests] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetchCustomerRequests();
  }, []);
  const fetchCustomerRequests = async () => {
    const { _id } = await getAgencyProfileAPI(
      localStorage.getItem("admin-token")
    );
    const response = await getCustomerRequestsAPI(_id);
    setCustomerRequests(response);
    setLoading(false);
  };
  return (
    <Container>
      {loading ? (
        <Loading />
      ) : (
        <TableContainer>
          <h1>Customer Requests</h1>
          <CustomerRequestTable customerRequests={customerRequests} />
        </TableContainer>
      )}
    </Container>
  );
};

export default CustomerRequests;
