import React from "react";
import BookingRow from "./BookingRow";
import CancelledBookingRow from "./CancelledBookingRow";

const CancelledBookingTable = ({ cancelledBookings }) => {
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
          <th>Cancelled On</th>
          <th>Price</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {cancelledBookings &&
          cancelledBookings.map((cancelledBooking, index) => (
            <CancelledBookingRow
              key={index}
              cancelledBooking={cancelledBooking}
              index={index}
            />
          ))}
      </tbody>
    </table>
  );
};

export default CancelledBookingTable;
