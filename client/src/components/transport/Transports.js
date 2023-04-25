import React, { useContext } from "react";
import { transports } from "../../constant/transports";
import { PackageContext } from "../../context/package-context";
import styled from "styled-components";
import { colors } from "../../constant/colors";
import { FaCar } from "react-icons/fa";
import Button from "../ui/Button";
import { IoClose } from "react-icons/io5";
const TransportContainer = styled.div`
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.3);
  padding: 10px 15px;
  margin-bottom: 10px;
`;
const TransportVehicle = styled.div`
  font-weight: 600;
  color: ${colors.black};
  font-size: 18px;
`;
const TransportType = styled.div`
  font-size: 16px;
  font-weight: 500;
  color: ${colors.gray};
`;
const VehicleSeats = styled.div`
  font-weight: 500;
  color: ${colors.gray};
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
const Transports = ({ setIsOpen, setTransportCost }) => {
  return (
    <>
      <CloseButton onClick={() => setIsOpen(false)}>
        <IoClose size={24} />
      </CloseButton>
      {transports.map((transport) => (
        <Transport
          transport={transport}
          close={setIsOpen}
          setTransportCost={setTransportCost}
        />
      ))}
    </>
  );
};

export default Transports;

const Transport = ({ transport, close, setTransportCost }) => {
  const { travelPackage, setTravelPackage } = useContext(PackageContext);
  const selectTransport = () => {
    const newTransport = {
      vehicle: transport.vehicle,
      type: transport.type,
      fuel_type: transport.fuel_type,
      seat: transport.seat,
      description: transport.description,
      price: transport.price,
    };

    setTravelPackage({ ...travelPackage, p_transport: newTransport });
    setTransportCost(transport.price);
    close(false);
  };
  return (
    <TransportContainer>
      {travelPackage.p_transport &&
        travelPackage.p_transport.vehicle == transport.vehicle && (
          <SelectedLabel>SELECTED</SelectedLabel>
        )}
      <div style={{ display: "flex", gap: 50 }}>
        <FaCar size={50} />{" "}
        <div>
          <TransportVehicle>{transport.vehicle}</TransportVehicle>
          <TransportType>{transport.type}</TransportType>
        </div>
      </div>
      Seats: <VehicleSeats>{transport.seat}</VehicleSeats>
      <p>{transport.description}</p>
      <SelectButton onClick={selectTransport}>Select</SelectButton>
    </TransportContainer>
  );
};
