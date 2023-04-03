import React, { useEffect } from "react";
import { getUserProfileAPI } from "../service/user-api";

const Profile = () => {
  useEffect(() => {
    fetchUser();
  }, []);
  const fetchUser = async () => {
    console.log(await getUserProfileAPI(localStorage.getItem("token")));
  };
  return <div>Profile</div>;
};

export default Profile;
