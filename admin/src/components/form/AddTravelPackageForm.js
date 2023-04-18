import React from "react";
import { getAgencyProfileAPI } from "../../service/agency-api";

const AddTravelPackageForm = ({ createTravelPackage }) => {
  const createTravelPackageHandler = async (e) => {
    e.preventDefault();
    const form = e.target;
    const { _id } = await getAgencyProfileAPI(
      localStorage.getItem("admin-token")
    );
    const data = {
      p_agency_id: _id,
      p_name: form.p_name.value,
      p_description: form.p_description.value,
      p_destination: form.p_destination.value,
      p_days: form.p_days.value,
      p_price: form.p_price.value,
      p_refund_date: form.p_refund_date.value,
      p_refund_desc: form.p_refund_desc.value,
      p_image: form.p_imagePreview.files,
    };
    const formData = new FormData(form);
    createTravelPackage(formData);
  };
  return (
    <form onSubmit={createTravelPackageHandler} name="addPackage">
      <div className="form-group">
        <label className="form-label">Package Name</label>
        <input name="p_name" className="form-control" />
      </div>
      <div className="form-group">
        <label className="form-label">Package Description</label>
        <textarea name="p_description" className="form-control" />
      </div>
      <div className="form-group">
        <label className="form-label">Package Destination</label>
        <input name="p_destination" className="form-control" />
      </div>
      <div className="form-group">
        <label className="form-label">Package Days</label>
        <input name="p_days" className="form-control" type="number" min={1} />
      </div>
      <div className="form-group">
        <label className="form-label">Package Price</label>
        <input name="p_price" className="form-control" type="number" />
      </div>
      <div className="form-group">
        <label className="form-label">Thumbnail Image</label>
        <input name="p_imagePreview" className="form-control" type="file" />
      </div>
      <div className="form-group">
        <label className="form-label">Images (minimum 3 images)</label>
        <input name="p_images" className="form-control" type="file" multiple />
      </div>
      <div className="form-group">
        <label className="form-label">Last Refund date</label>
        <input name="p_refund_date" className="form-control" type="date" />
      </div>
      <div className="form-group">
        <label className="form-label">Refund Policy description</label>
        <textarea name="p_refund_desc" className="form-control" />
      </div>
      <input className="btn btn-primary" type="submit" value="Create Package" />
    </form>
  );
};

export default AddTravelPackageForm;
