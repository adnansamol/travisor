import express from "express";
import {
  getAgency,
  getAgencyProfile,
  getAllAgencies,
  loginAgency,
  logoutAgency,
  registerAgency,
  updateAgency,
} from "../controllers/agency-controller.js";

const agencyRouter = express.Router();

agencyRouter.post("/register", registerAgency);
agencyRouter.post("/login", loginAgency);

agencyRouter.get("/profile", getAgencyProfile);

agencyRouter.put("/profile/update", updateAgency);
agencyRouter.put("/logout", logoutAgency);

agencyRouter.get("/getAgency/:id", getAgency);
agencyRouter.get("/getAllAgencies", getAllAgencies);

export default agencyRouter;