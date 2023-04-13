import userModel from "../models/user.js";
export const alreadyRegistered = async (email) => {
  let exist = await userModel.findOne({ u_email: email });
  if (exist) {
    return true;
  }
  return false;
};
