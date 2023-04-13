import React, { useContext, useRef } from "react";
import { hotelsAPI } from "../../constant/hotels";
import styled from "styled-components";
import { colors } from "../../constant/colors";
import { IoClose, IoLocationSharp } from "react-icons/io5";
import { PackageContext } from "../../context/package-context";
import Button from "../ui/Button";

const HotelContainer = styled.div`
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.3);
  padding: 10px 15px;
  margin-bottom: 20px;
`;
const HotelDetails = styled.div`
  display: flex;
  justify-content: space-between;
`;
const HotelName = styled.div`
  font-size: 20px;
  color: ${colors.black};
  font-weight: 500;
`;
const HotelAddress = styled.div`
  color: ${colors.gray};
`;

const HotelImage = styled.img`
  width: 280px;
  height: 180px;
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
const Hotels = ({ setIsOpen }) => {
  return (
    <>
      <CloseButton onClick={() => setIsOpen(false)}>
        <IoClose size={24} />
      </CloseButton>
      {hotelsAPI[0].map((hotel) => (
        <Hotel hotel={hotel} close={setIsOpen} />
      ))}
    </>
  );
};

const Hotel = ({ hotel, close }) => {
  const { travelPackage, setTravelPackage } = useContext(PackageContext);
  const roomRef = useRef();
  const selectHotel = () => {
    const newHotel = {
      name: hotel.name,
      address: hotel.address,
      images: hotel.images,
      type: roomRef.current.value,
    };

    setTravelPackage({ ...travelPackage, p_hotel: newHotel });
    close(false);
  };

  return (
    <HotelContainer>
      <HotelDetails>
        <div>
          <HotelName>{hotel.name}</HotelName>
          <HotelAddress>
            <IoLocationSharp />
            {hotel.address}
          </HotelAddress>
          <br />
          <div>Rating: {hotel.rating}/5</div>
          <div>
            Room Type:{" "}
            <select ref={roomRef} defaultValue={travelPackage.p_hotel.type}>
              {hotel.room_types.map((type) => (
                <option value={type}>{type}</option>
              ))}
            </select>
          </div>
          <br />
          {travelPackage.p_hotel.name === hotel.name ? (
            <b style={{ color: "orangered" }}>SELECTED</b>
          ) : (
            <SelectButton onClick={selectHotel}>Select</SelectButton>
          )}
        </div>

        <HotelImage src={hotel.images[0]} />
      </HotelDetails>
    </HotelContainer>
  );
};
export default Hotels;
