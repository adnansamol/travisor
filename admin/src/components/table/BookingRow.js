import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  getBookedPackageByIdAPI,
  getCustomerAPI,
} from "../../service/booking-api";

const BookingRow = ({ booking, index }) => {
  const [bookedPackage, setBookedPackage] = useState();
  const [customer, setCustomer] = useState();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetchBookedPackage();
  }, []);

  const fetchBookedPackage = async () => {
    const bookedPackage = await getBookedPackageByIdAPI(
      booking.b_travel_package_id
    );
    setBookedPackage(bookedPackage);
    fetchCustomer();
  };
  const fetchCustomer = async () => {
    const customer = await getCustomerAPI(booking.b_booked_user_id);
    console.log(customer);
    setCustomer(customer);
    setLoading(false);
  };
  return (
    bookedPackage &&
    customer && (
      <tr>
        <td>{index + 1}</td>
        <td>{bookedPackage.p_name}</td>
        <td>{bookedPackage.p_destination}</td>
        <td>{bookedPackage.p_days}</td>
        <td>{new Date(bookedPackage.p_start_date).toLocaleString()}</td>
        <td>{customer.u_name}</td>
        <td>{new Date(booking.b_booking_date).toDateString()}</td>
        <td>{booking.b_booking_cost}</td>
        <td>
          <Link
            className="btn btn-warning"
            to={"/booking/" + bookedPackage._id}
          >
            View
          </Link>
          <button className="btn btn-danger mx-2">Delete</button>
        </td>
      </tr>
    )
  );
};

export default BookingRow;
