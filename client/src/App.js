import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Success from "./pages/Success";
import Cancel from "./pages/Cancel";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import PackageDetailView from "./pages/PackageDetailView";
import ProtectedRoute from "./protected-routes";
import { useEffect, useState } from "react";
import { getUserProfileAPI } from "./service/user-api";
import Summary from "./pages/Summary";
import Policies from "./pages/Policies";
function App() {
  return (
    <>
      <Routes>
        <Route path="*" element={<div>404</div>} />
        <Route exact path="/" element={<Home />} />
        <Route exact path="/contact" element={<Contact />} />

        <Route
          exact
          path="/profile"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />

        <Route path="/package/:id" element={<PackageDetailView />}>
          <Route path="summary" element={<Summary />} />
          <Route path="policies" element={<Policies />} />
        </Route>
        <Route exact path="/success" element={<Success />} />
        <Route exact path="/cancel" element={<Cancel />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/register" element={<Register />} />
      </Routes>

      {/* <Footer /> */}
    </>
  );
}

export default App;
