import jwt from "jsonwebtoken";
export const generateJWTToken = (data) => {
  return jwt.sign(data, process.env.JWT_SECRETKEY);
};
