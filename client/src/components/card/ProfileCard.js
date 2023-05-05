import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { colors } from "../../constant/colors";
import { getUserProfileAPI, logoutUserAPI } from "../../service/user-api";
import ProfileForm from "../form/ProfileForm";
import Button from "../ui/Button";
import Loading from "../ui/Loading";

const UserDetailsContainer = styled.div`
  margin: auto;
  margin-bottom: 25px;
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
  color: ${colors.black};
  font-weight: 500;
`;
const LogoutButton = styled(Button)`
  font-size: 14px;
  padding: 10px 20px;
  background-color: ${colors.black};
  color: white;
`;
const UpdateButton = styled(Button)`
  border: 1px solid ${colors.green};
  background-color: white;
  color: ${colors.green};
  font-size: 14px;
  padding: 8px 15px;
`;

const ProfileCard = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    fetchUser();
  }, []);
  const fetchUser = async () => {
    const data = await getUserProfileAPI(localStorage.getItem("token"));
    setUser(data);
    setLoading(false);
    return data;
  };
  const onLogout = async () => {
    const { u_email } = await getUserProfileAPI(localStorage.getItem("token"));
    const response = await logoutUserAPI(u_email);
    localStorage.removeItem("token");
    alert(response);
    navigate("/");
  };

  return (
    <UserDetailsContainer>
      <PersonalDetails>Personal Details</PersonalDetails>
      <div
        style={{
          textAlign: "right",
          display: "inline-block",
          marginLeft: "320px",
        }}
      >
        <UpdateButton onClick={() => setIsOpen(true)}>Update</UpdateButton>
      </div>
      <hr />
      {loading ? (
        <Loading />
      ) : !isOpen ? (
        user && (
          <>
            <div>
              Welcome, <b>{user.u_name}</b>
            </div>
            <Text>
              <Label>Email:</Label> {user.u_email}
            </Text>
            {/* <Text>
              <Label>Gender:</Label> {user.u_gender}
            </Text> */}
            <Text>
              <Label>Phone:</Label> {user.u_phone}
            </Text>
            <Text>
              <Label>Country:</Label> {user.u_country}
            </Text>
            <div style={{ textAlign: "right" }}>
              <LogoutButton onClick={onLogout}>Logout</LogoutButton>
            </div>
          </>
        )
      ) : (
        <ProfileForm setIsOpen={setIsOpen} user={user} />
      )}
    </UserDetailsContainer>
  );
};

export default ProfileCard;
