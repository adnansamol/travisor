import React from "react";

const ActivityForm = ({ activites, setActivities, days }) => {
  const addActivityHandler = (event) => {
    event.preventDefault();

    const form = event.target;
    console.log(days);
    if (activites.find((value) => value.day == form.day.value)) {
      alert("Day is already planned");
    } else if (activites.length < days - 1) {
      setActivities((old) => [
        ...old,
        {
          id: form.day.value,
          day: form.day.value,
          site: form.site.value,
          title: form.title.value,
          description: form.description.value,
          price: form.price.value,
          image: form.activity_image.files,
        },
      ]);
    } else {
      alert("Cant add further activites. Days limit reached!");
    }
  };

  return (
    <form onSubmit={addActivityHandler}>
      <h3>Add New Activity</h3>
      <div className="row">
        <div className="form-input-group col-md-3">
          <label className="form-label">Day</label>
          <input
            className="form-control"
            name="day"
            type="number"
            min={2}
            max={days - 1}
            required
          />
        </div>

        <div className="form-input-group col">
          <label className="form-label">Site</label>
          <input className="form-control" name="site" required />
        </div>
      </div>
      <div className="row">
        <div className="form-input-group col">
          <label className="form-label">Title</label>
          <input className="form-control" name="title" required />
        </div>
        <div className="form-input-group col-md-3">
          <label className="form-label">Price</label>
          <input
            className="form-control"
            name="price"
            type="number"
            min={0}
            required
          />
        </div>
      </div>
      <div className="form-input-group">
        <label className="form-label">Description</label>
        <textarea className="form-control" name="description" required />
      </div>
      <div className="form-input-group">
        <label className="form-label">Image</label>
        <input className="form-control" type="file" name="activity_image" />
      </div>
      <input className="btn btn-primary" type="submit" value="Add" />
    </form>
  );
};

export default ActivityForm;
