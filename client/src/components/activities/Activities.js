import React, { useContext, useEffect, useRef, useState } from "react";
import { hotelsAPI } from "../../constant/hotels";
import styled from "styled-components";
import { colors } from "../../constant/colors";
import { IoClose, IoLocationSharp } from "react-icons/io5";
import { PackageContext } from "../../context/package-context";
import Button from "../ui/Button";

import { priceFormatter } from "../../util/formatter";

const ActivityContainer = styled.div`
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.3);
  padding: 10px 15px;
  margin-bottom: 20px;
`;
const ActivityDetails = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const ActivityTitle = styled.div`
  display: inline;
  font-size: 18px;
  color: ${colors.black};
  font-weight: 500;
`;
const ActivityPriceContainer = styled.div`
  flex: 5%;
  border-left: 1px solid ${colors.lightgray};
  height: 100px;
  text-align: center;
  padding-top: 30px;
`;
const ActivityPrice = styled.div`
  display: inline;
  font-size: 20px;
  color: ${colors.black};
  font-weight: 500;
`;
const ActivitySite = styled.div`
  color: ${colors.gray};
`;
const ActivityDescription = styled.div``;
const ActivityImage = styled.img`
  width: 280px;
  height: 180px;
  flex: 20%;
`;
const CloseButton = styled.div`
  cursor: pointer;
  margin: 0 0 10px 5px;
`;
const SelectButton = styled(Button)`
  background-color: ${colors.dodgerblue};
  color: white;
  padding: 5px 20px;
`;
const SelectedLabel = styled.div`
  background-color: orangered;
  color: white;
  width: fit-content;
  padding: 5px 10px;
  font-size: 12px;

  border-radius: 50px;
`;
const Activities = ({ setIsOpen, setActivitiesCost }) => {
  const [availableActivities, setAvailableActivities] = useState([]);
  const { travelPackage, setTravelPackage } = useContext(PackageContext);

  useEffect(() => {
    const activities = travelPackage.all_activities.filter((activity) =>
      travelPackage.p_days_plan.every((item) => item.id != activity.id)
    );
    setAvailableActivities(activities);
  }, []);
  return (
    <>
      <CloseButton onClick={() => setIsOpen(false)}>
        <IoClose size={24} />
      </CloseButton>

      {availableActivities.length > 0 ? (
        availableActivities.map((activity) => (
          <Activity
            activity={activity}
            close={setIsOpen}
            setActivitiesCost={setActivitiesCost}
            travelPackage={travelPackage}
            setTravelPackage={setTravelPackage}
          />
        ))
      ) : (
        <h3>No More Activities Available</h3>
      )}
    </>
  );
};

const Activity = ({
  activity,
  travelPackage,
  setTravelPackage,
  close,
  setActivitiesCost,
}) => {
  const selectActivity = () => {
    const newActivity = {
      id: activity.id,
      title: activity.title,
      site: activity.site,
      image: activity.image,
      description: activity.description,
      day: activity.day,
      price: activity.price,
    };
    setTravelPackage({
      ...travelPackage,
      p_days_plan: [...travelPackage.p_days_plan, newActivity],
    });
    setActivitiesCost((oldPrice) => oldPrice + Number(activity.price));
    close(false);
  };

  return (
    <ActivityContainer>
      <ActivityDetails>
        <div style={{ flex: "35%" }}>
          <ActivityTitle>Day-{activity.day}</ActivityTitle>
          <br />
          <ActivityTitle>{activity.title}</ActivityTitle>
          <ActivitySite>
            <IoLocationSharp />
            {activity.site}
          </ActivitySite>
          <ActivityDescription>{activity.description}</ActivityDescription>
          <br />
          <SelectButton onClick={selectActivity}>Add</SelectButton>
        </div>
        <ActivityImage src={activity.image} />
        <ActivityPriceContainer>
          <ActivityPrice>
            {priceFormatter.format(activity.price)}
            {"/- "}
          </ActivityPrice>
          <sub>per person</sub>
        </ActivityPriceContainer>
      </ActivityDetails>
    </ActivityContainer>
  );
};
export default Activities;
