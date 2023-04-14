import React from "react";
import styled from "styled-components";

const Container = styled.div`
  padding: 5px;
`;
const Title = styled.div``;
const FilterLabel = styled.label``;
const RatingRange = styled.input``;
const FilterCheckbox = styled.input``;

const HotelFilters = ({ appliedFilters, setAppliedFilters }) => {
  const onRatingChange = (e) => {
    setAppliedFilters({ ...appliedFilters, rating: e.target.value });
  };
  const onRoomTypeChange = (e) => {
    const checkedList = [];
    const filter = document.getElementsByName("roomType");
    for (let x of filter) {
      if (x.checked == true) checkedList.push(x.value);
    }

    setAppliedFilters({ ...appliedFilters, room_type: checkedList });
  };
  const onFacilitiesChange = (e) => {
    const checkedList = [];
    const filter = document.getElementsByName("facilities");
    for (let x of filter) {
      if (x.checked == true) checkedList.push(x.value);
    }

    setAppliedFilters({ ...appliedFilters, facilities: checkedList });
  };
  //"Ocean view", "Bridal suite", "Suites", "Family rooms"
  return (
    <Container>
      <Title>Filters</Title>
      <FilterLabel>rating: </FilterLabel>
      <RatingRange
        onChange={onRatingChange}
        type="range"
        min={1}
        max={5}
        step={1}
      />
      <FilterLabel>Room types</FilterLabel>
      1
      <FilterCheckbox
        onChange={onRoomTypeChange}
        name="roomType"
        type="checkbox"
        value="Ocean view"
      />
      2
      <FilterCheckbox
        onChange={onRoomTypeChange}
        name="roomType"
        type="checkbox"
        value="Bridal suite"
      />
      3
      <FilterCheckbox
        onChange={onRoomTypeChange}
        name="roomType"
        type="checkbox"
        value="Suites"
      />
      4
      <FilterCheckbox
        onChange={onRoomTypeChange}
        name="roomType"
        type="checkbox"
        value="Family rooms"
      />
      <FilterLabel>Facilities</FilterLabel>
      6
      <FilterCheckbox
        onChange={onFacilitiesChange}
        name="facilities"
        type="checkbox"
        value="Free parking"
      />
      7
      <FilterCheckbox
        onChange={onFacilitiesChange}
        name="facilities"
        type="checkbox"
        value="Free High Speed Internet (WiFi)"
      />
      8
      <FilterCheckbox
        onChange={onFacilitiesChange}
        name="facilities"
        type="checkbox"
        value="Pool"
      />
      9
      <FilterCheckbox
        onChange={onFacilitiesChange}
        name="facilities"
        type="checkbox"
        value="Workout Room"
      />
      10
      <FilterCheckbox
        onChange={onFacilitiesChange}
        name="facilities"
        type="checkbox"
        value="Free breakfast"
      />
      <FilterCheckbox
        onChange={onFacilitiesChange}
        name="facilities"
        type="checkbox"
        value="Beach"
      />
    </Container>
  );
};
//"Free parking","Free High Speed Internet (WiFi)","Pool"," Fitness Centre with Gym / Workout Room", "Free breakfast", "Beach",
export default HotelFilters;
