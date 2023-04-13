import React, { useEffect, useState } from "react";
import { getUserProfileAPI, logoutUserAPI } from "../service/user-api";
import styled from "styled-components";
import Link from "../components/ui/Link";
import { useNavigate } from "react-router-dom";
import Button from "../components/ui/Button";

const Profile = () => {

  const LogoutButton = styled(Button)``;
  const [user,setUser] = useState();

  const navigate = useNavigate();
  useEffect(() => {
    fetchUser();
  }, []);
  const fetchUser = async () => {
    const data = await getUserProfileAPI(localStorage.getItem("token"));
  
    setUser(data);
  };

  const onLogout = async()=>{
    const {u_email} = await getUserProfileAPI(localStorage.getItem("token"));
    const response = await logoutUserAPI(u_email);
    localStorage.removeItem("token");
    alert(response);
    navigate("/");
  }
  return user && <div>{user.u_email}<LogoutButton onClick={onLogout}>Logout</LogoutButton></div>;
};

export default Profile;
