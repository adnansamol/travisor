export const travel_package = {
  _id: "1",
  p_agency_id: "1",
  p_name: "Dreamy Mauritius",
  p_start_location: "Ahmedabad",
  p_destination: "Mauritius",
  p_days: 7,
  p_description:
    "Suitable for family |Package Gives you the flexibility to Choose your own flights & Activities/ Best suited for Your Needs | Get Complimentary catamaran cruise while experiencing island tour",
  p_price: { base_price: 125140, discount: 25000 },
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
    fuel_type: "EV",
    seat: 4,
    description: "Pickup from airport",
    price: 2000,
  },
  p_days_plan: [
    {
      day: 1,
      location: "Mauritius",
      duration: "2Hrs",
      activity:
        "3 Full Day Tours (City, Nature Island Tour) with Return Airport Transfers on Share In Coach",
      locImage:
        "https://hldak.mmtcdn.com/prod-s3-activity-templates/activitiesImagesFinal/activity/MRU/ACT10000000015537_2.jpg",
    },
  ],
  p_policies: {
    cancellation: {
      from: new Date(),
      to: new Date(),
      description: "about refund",
    },
    changeDate: {
      from: new Date(),
      to: new Date(),
      description: "about changing date",
    },
  },
  p_flight: {
    stops: [
      {
        departure: new Date(),
        arrival: new Date(),
        class: "Economy",
        from: "Ahmedabad",
        to: "New Delhi",
        plane: "MK-745",
        time: "03h30m",
      },
      {
        departure: new Date(),
        arrival: new Date(),
        class: "Economy",
        from: "New Delhi",
        to: "Mauritius",
        plane: "MK-745",
        time: "04h30m",
      },
    ],
    price: 10000,
  },
  p_return_flight: {
    plane: "MK-745",
    time: "07h30m",
    departure: new Date(),
    arrival: new Date(),
    class: "Economy",
    from: "Mauritius",
    to: "Ahmedabad",
    price: 10000,
  },
  p_hotel: {
    images: [
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
    ],
    name: "Royale Hotel",
    address: "Address 1bc street 24d",
    price_per_room: 2400,
    type: "Luxury",
    rooms: 2,
    dineIncluded: true,
  },
};

export const travel_packages = [
  {
    _id: "1",
    p_agency_id: "1",
    p_name: "Dreamy Mauritius",
    p_start_location: "Ahmedabad",
    p_destination: "Mauritius",
    p_days: 7,
    p_description:
      "Suitable for family |Package Gives you the flexibility to Choose your own flights & Activities/ Best suited for Your Needs | Get Complimentary catamaran cruise while experiencing island tour",
    p_price: { base_price: 125140, discount: 25000 },
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
      fuel_type: "EV",
      seat: 4,
      description: "Pickup from airport",
      price: 2000,
    },
    p_days_plan: [
      {
        day: 1,
        location: "Mauritius",
        duration: "2Hrs",
        activity:
          "3 Full Day Tours (City, Nature Island Tour) with Return Airport Transfers on Share In Coach",
        locImage:
          "https://hldak.mmtcdn.com/prod-s3-activity-templates/activitiesImagesFinal/activity/MRU/ACT10000000015537_2.jpg",
      },
    ],
    p_policies: {
      cancellation: {
        from: new Date(),
        to: new Date(),
        description: "about refund",
      },
      changeDate: {
        from: new Date(),
        to: new Date(),
        description: "about changing date",
      },
    },
    p_flight: {
      stops: [
        {
          departure: new Date(),
          arrival: new Date(),
          class: "Economy",
          from: "Ahmedabad",
          to: "New Delhi",
          plane: "MK-745",
          time: "03h30m",
        },
        {
          departure: new Date(),
          arrival: new Date(),
          class: "Economy",
          from: "New Delhi",
          to: "Mauritius",
          plane: "MK-745",
          time: "04h30m",
        },
      ],
      price: 10000,
    },
    p_return_flight: {
      plane: "MK-745",
      time: "07h30m",
      departure: new Date(),
      arrival: new Date(),
      class: "Economy",
      from: "Mauritius",
      to: "Ahmedabad",
      price: 10000,
    },
    p_hotel: {
      images: [
        "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/23/1d/6c/c2/aerial-view.jpg?w=1000&h=-1&s=1",
      ],
      name: "Le Méridien Ile Maurice",
      address: "Village Hall Lane, Pointe Aux Piments, Mauritius 21304",
      price_per_room: 4400,
      type: "Suites",
      rooms: 2,
      dineIncluded: true,
    },
  },
  {
    _id: "2",
    p_agency_id: "1",
    p_name: "Joyful Goa",
    p_start_location: "Ahmedabad",
    p_destination: "Goa",
    p_days: 5,
    p_description:
      "Suitable for friends/couples |Package Gives you the flexibility to Choose your own flights & Activities/ Best suited for Your Needs | Get Complimentary catamaran cruise while experiencing island tour",
    p_price: { base_price: 20000, discount: 5000 },
    p_start_date: new Date("03/04/2023"),
    p_end_date: new Date("03/10/2023"),
    p_imagePreview:
      "https://images.unsplash.com/photo-1625505826977-66d796089d73?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1214&q=80",
    p_images: [
      "https://images.unsplash.com/photo-1614082242765-7c98ca0f3df3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      "https://images.pexels.com/photos/1450360/pexels-photo-1450360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
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
      fuel_type: "EV",
      seat: 4,
      description: "Pickup from airport",
      price: 2000,
    },
    p_days_plan: [
      {
        day: 1,
        location: "Mauritius",
        duration: "2Hrs",
        activity:
          "3 Full Day Tours (City, Nature Island Tour) with Return Airport Transfers on Share In Coach",
        locImage:
          "https://hldak.mmtcdn.com/prod-s3-activity-templates/activitiesImagesFinal/activity/MRU/ACT10000000015537_2.jpg",
      },
    ],
    p_policies: {
      cancellation: {
        from: new Date(),
        to: new Date(),
        description: "about refund",
      },
      changeDate: {
        from: new Date(),
        to: new Date(),
        description: "about changing date",
      },
    },
    p_flight: {
      stops: [
        {
          departure: new Date(),
          arrival: new Date(),
          class: "Economy",
          from: "Ahmedabad",
          to: "New Delhi",
          plane: "MK-745",
          time: "03h30m",
        },
        {
          departure: new Date(),
          arrival: new Date(),
          class: "Economy",
          from: "New Delhi",
          to: "Mauritius",
          plane: "MK-745",
          time: "04h30m",
        },
      ],
      price: 10000,
    },
    p_return_flight: {
      plane: "MK-745",
      time: "07h30m",
      departure: new Date(),
      arrival: new Date(),
      class: "Economy",
      from: "Mauritius",
      to: "Ahmedabad",
      price: 10000,
    },
    p_hotel: {
      images: [
        "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1c/1d/96/92/taj-hotel-convention.jpg?w=1200&h=-1&s=1",
      ],
      name: "Taj Resort & Convention Centre",
      address: "Vainguinim Beach, Dona Paula, Panjim 403004 India",
      price_per_room: 3400,
      type: "Suites",
      rooms: 2,
      dineIncluded: true,
    },
  },
];

export const user_travel_history = { u_trips: [], u_tripsTotalCost: 0 };
