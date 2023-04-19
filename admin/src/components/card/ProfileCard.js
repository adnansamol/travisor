import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { getAgencyProfileAPI, logoutAgencyAPI } from "../../service/agency-api";
import ProfileForm from "../form/ProfileForm";
import Loading from "../loading/Loading";

const AgencyDetailsContainer = styled.div`
  margin: auto;
  margin-top: 65px;
  padding: 15px 25px;
  background-color: white;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  width: 40%;
`;
const PersonalDetails = styled.div`
  font-size: 24px;
  display: inline;
`;
const Text = styled.div`
  margin: 5px 0;
`;
const Label = styled.span`
  color: black;
  font-weight: 500;
`;

const ProfileCard = () => {
  const navigate = useNavigate();
  const [agency, setUser] = useState();
  const [loading, setLoading] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    fetchUser();
  }, []);
  const fetchUser = async () => {
    const data = await getAgencyProfileAPI(localStorage.getItem("admin-token"));
    setUser(data);
    setLoading(false);
    return data;
  };
  const onLogout = async () => {
    const { a_email } = await getAgencyProfileAPI(
      localStorage.getItem("admin-token")
    );
    const response = await logoutAgencyAPI(a_email);
    localStorage.removeItem("admin-token");
    alert(response);
    navigate("/");
  };

  return (
    <AgencyDetailsContainer>
      <PersonalDetails>Agency Details</PersonalDetails>
      <div
        style={{
          textAlign: "right",
          display: "inline-block",

          marginLeft: "250px",
        }}
      >
        <button className="btn btn-success" onClick={() => setIsOpen(true)}>
          Update
        </button>
      </div>
      <hr />
      {loading ? (
        <Loading />
      ) : !isOpen ? (
        agency && (
          <>
            <div>
              Welcome, <b>{agency.a_name}</b>
            </div>
            <Text>
              <Label>Address:</Label> {agency.a_address}
            </Text>
            <Text>
              <Label>Email:</Label> {agency.a_email}
            </Text>
            <Text>
              <Label>Phone:</Label> {agency.a_phone}
            </Text>
            <Text>
              <Label>GST Number:</Label> {agency.a_gstnumber}
            </Text>
            <Text>
              <Label>Country:</Label> {agency.a_country}
            </Text>
            <div style={{ textAlign: "right" }}>
              <button className="btn btn-outline-dark" onClick={onLogout}>
                Logout
              </button>
            </div>
          </>
        )
      ) : (
        <ProfileForm setIsOpen={setIsOpen} agency={agency} />
      )}
    </AgencyDetailsContainer>
  );
};

export default ProfileCard;
