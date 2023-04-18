import React from "react";

const RegisterForm = ({ registerAgency }) => {
  const registerAgencyHandler = (e) => {
    e.preventDefault();
    const form = e.target;
    const data = {
      a_name: form.agency_name.value,
      a_address: form.address.value,
      a_email: form.email.value,
      a_password: form.pass.value,
      a_establish_date: form.establish.value,
      a_country: form.country.value,
      a_phone: form.phone.value,
      a_gstnumber: form.gst.value,
    };

    registerAgency(data);
  };
  return (
    <form onSubmit={registerAgencyHandler}>
      <div className="row mb-2">
        <div className="form-group col">
          <label className="form-label">Agency Name</label>
          <input className="form-control" name="agency_name" />
        </div>

        <div className="form-group col">
          <label className="form-label">Email</label>
          <input className="form-control" name="email" />
        </div>
      </div>
      <div className="row mb-2">
        <div className="form-group col">
          <label className="form-label">Password</label>
          <input className="form-control" name="pass" />
        </div>
        <div className="form-group col">
          <label className="form-label">Confirm Password</label>
          <input className="form-control" name="confirm" />
        </div>
      </div>
      <div className="row mb-2">
        <div className="form-group col">
          <label className="form-label">Phone Number</label>
          <input className="form-control" name="phone" />
        </div>
        <div className="form-group col">
          <label className="form-label">Country</label>
          <input className="form-control" name="country" />
        </div>
      </div>
      <div className="row mb-2">
        <div className="form-group col">
          <label className="form-label">GST Number</label>
          <input className="form-control" name="gst" />
        </div>
        <div className="form-group col">
          <label className="form-label">Establish Date</label>
          <input className="form-control" type="date" name="establish" />
        </div>
      </div>
      <div className="form-group">
        <label className="form-label">Agency Address</label>
        <textarea
          className="form-control"
          style={{ resize: "none" }}
          name="address"
        />
      </div>
      <input className="btn btn-primary" type="submit" />
    </form>
  );
};

export default RegisterForm;
