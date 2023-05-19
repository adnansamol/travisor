import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  getBookedPackageByIdAPI,
  getCustomerAPI,
} from "../../service/booking-api";
import Loading from "../loading/Loading";

const CancelledBookingRow = ({ cancelledBooking, index }) => {
  const [bookedPackage, setBookedPackage] = useState();
  const [customer, setCustomer] = useState();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetchBookedPackage();
  }, []);

  const fetchBookedPackage = async () => {
    const bookedPackage = await getBookedPackageByIdAPI(
      cancelledBooking.b_travel_package_id
    );
    setBookedPackage(bookedPackage);
    fetchCustomer();
  };
  const fetchCustomer = async () => {
    const customer = await getCustomerAPI(cancelledBooking.b_booked_user_id);
    console.log(customer);
    setCustomer(customer);
    setLoading(false);
  };
  return loading ? (
    <tr>
      <td>
        <Loading />
      </td>
    </tr>
  ) : (
    <tr>
      <td>{index + 1}</td>
      <td>{bookedPackage.p_name}</td>
      <td>{bookedPackage.p_destination}</td>
      <td>{bookedPackage.p_days}</td>
      <td>{new Date(bookedPackage.p_start_date).toLocaleString()}</td>
      <td>{customer.u_name}</td>
      <td>{new Date(cancelledBooking.updatedAt).toDateString()}</td>
      <td>{cancelledBooking.b_booking_cost}</td>
      <td>
        {/* <Link
          className="btn btn-warning"
          to={"/cancelledBooking/" + cancelledBooking._id}
        >
          View
        </Link> */}
        <button className="btn btn-danger mx-2">Delete</button>
      </td>
    </tr>
  );
};

export default CancelledBookingRow;
