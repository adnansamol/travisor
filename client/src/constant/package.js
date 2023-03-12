export const travel_package = {
  p_name: "Dreamy Mauritius!",
  p_start_location: "Ahmedabad",
  p_destination: "Mauritius",
  p_days: 7,
  p_description:
    "Suitable for family & couple|Package Gives you the flexibility to Choose your own flights & Activities/ Best suited for Your Needs | Get Complimentary catamaran cruise while experiencing island tour",
  p_price: 125140,
  p_start_date: new Date("03/04/2023"),
  p_end_date: new Date("03/10/2023"),
  p_imagePreview:
    "https://images.pexels.com/photos/13696647/pexels-photo-13696647.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  p_images: [
    "https://images.pexels.com/photos/3703465/pexels-photo-3703465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/7744992/pexels-photo-7744992.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/13696647/pexels-photo-13696647.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  ],
  p_rooms: [
    { adults: 2, children: 0 },
    { adults: 1, children: 2 },
  ],
  p_adults: 0,
  p_children: 0,
  p_transport: {
    vehicle: "AC Sedan",
    type: "Private",
    seat: 4,
    description: "Pickup from airport",
  },
  p_days_plan: [
    {
      day: 1,
      location: "Mauritius",
      activity:
        "3 Full Day Tours (City, Nature Island Tour) with Return Airport Transfers on Share In Coach",
      locImage:
        "https://hldak.mmtcdn.com/prod-s3-activity-templates/activitiesImagesFinal/activity/MRU/ACT10000000015537_2.jpg",
    },
  ],
  p_policies: {
    cancellation: { from: new Date(), to: new Date() },
    changeDate: { from: new Date(), to: new Date() },
  },
  p_flight: {
    plane: "MK-745",
    time: "07h30m",
    departure: new Date(),
    arrival: new Date(),
    class: "Economy",
  },
  p_return_flight: {
    plane: "MK-745",
    time: "07h30m",
    departure: new Date(),
    arrival: new Date(),
    class: "Economy",
  },
};

export const user_travel_history = { u_trips: [], u_tripsTotalCost: 0 };
