import React from "react";
import BookingRow from "./BookingRow";

const BookingTable = ({ bookings }) => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>Sr No.</th>
          <th>Name</th>
          <th>Destination</th>
          <th>Days</th>
          <th>Trip Date</th>
          <th>Booked By</th>
          <th>Booked On</th>
          <th>Price</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {bookings &&
          bookings.map((booking, index) => (
            <BookingRow key={index} booking={booking} index={index} />
          ))}
      </tbody>
    </table>
  );
};

export default BookingTable;
