import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { colors } from "../../constant/colors";

const Container = styled.div`
  padding: 5px 10px;
  background-color: ${colors.teal100};
  margin-bottom: 20px;
`;
const Form = styled.form`
  display: flex;
  font-size: 14px;
  align-items: center;
`;
const Title = styled.div``;
const RatingContainer = styled.div``;
const RoomTypeContainer = styled.div``;
const FacilitiesContainer = styled.div``;
const FilterLabel = styled.label`
  color: ${colors.gray};
  font-weight: 600;
  display: flex;
`;
const RatingRange = styled.input`
  width: 100px;
  margin-right: 10px;
`;

const FilterCheckbox = styled.input`
  margin-left: 3px;
  margin-right: 8px;
`;
const ResetButton = styled.button`
  font-size: 14px;
  padding: 5px 10px;
  background-color: ${colors.gray};
  color: white;
`;

const HotelFilters = ({ appliedFilters, setAppliedFilters }) => {
  const [ratingLabel, setRatingLabel] = useState(5);

  useEffect(() => {
    if (!appliedFilters) {
    }
  }, [appliedFilters]);
  const onRatingChange = (e) => {
    setRatingLabel(e.target.value);

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
  return (
    <Container>
      <Title>Filters</Title>
      <Form>
        <RatingContainer>
          <FilterLabel>rating: {ratingLabel}</FilterLabel>
          <RatingRange
            onChange={onRatingChange}
            type="range"
            min={1}
            max={5}
            step={1}
          />
          <ResetButton
            type="reset"
            onClick={() => setAppliedFilters(undefined)}
          >
            Reset
          </ResetButton>
        </RatingContainer>
        <RoomTypeContainer>
          <FilterLabel>Room types</FilterLabel>
          Ocean view
          <FilterCheckbox
            onChange={onRoomTypeChange}
            name="roomType"
            type="checkbox"
            value="Ocean view"
          />
          Bridal suite
          <FilterCheckbox
            onChange={onRoomTypeChange}
            name="roomType"
            type="checkbox"
            value="Bridal suite"
          />
          Suites
          <FilterCheckbox
            onChange={onRoomTypeChange}
            name="roomType"
            type="checkbox"
            value="Suites"
          />
          Family rooms
          <FilterCheckbox
            onChange={onRoomTypeChange}
            name="roomType"
            type="checkbox"
            value="Family rooms"
          />
        </RoomTypeContainer>
        <FacilitiesContainer>
          <FilterLabel>Facilities</FilterLabel>
          Free parking
          <FilterCheckbox
            onChange={onFacilitiesChange}
            name="facilities"
            type="checkbox"
            value="Free parking"
          />
          Free High Speed Internet (WiFi)
          <FilterCheckbox
            onChange={onFacilitiesChange}
            name="facilities"
            type="checkbox"
            value="Free High Speed Internet (WiFi)"
          />
          Pool
          <FilterCheckbox
            onChange={onFacilitiesChange}
            name="facilities"
            type="checkbox"
            value="Pool"
          />
          Fitness Centre with Gym / Workout Room
          <FilterCheckbox
            onChange={onFacilitiesChange}
            name="facilities"
            type="checkbox"
            value="Fitness Centre with Gym / Workout Room"
          />
          Free breakfast
          <FilterCheckbox
            onChange={onFacilitiesChange}
            name="facilities"
            type="checkbox"
            value="Free breakfast"
          />
          Beach
          <FilterCheckbox
            onChange={onFacilitiesChange}
            name="facilities"
            type="checkbox"
            value="Beach"
          />
        </FacilitiesContainer>
      </Form>
    </Container>
  );
};
//"Free parking","Free High Speed Internet (WiFi)","Pool"," Fitness Centre with Gym / Workout Room", "Free breakfast", "Beach",
export default HotelFilters;
