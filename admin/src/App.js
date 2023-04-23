import { Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import AddTravelPackage from "./pages/AddTravelPackage";
import BookingDetailView from "./pages/BookingDetailView";
import Bookings from "./pages/Bookings";
import CancelledBookings from "./pages/CancelledBookings";
import CustomerRequests from "./pages/CustomerRequests";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Register from "./pages/Register";
import TravelPackageDetailView from "./pages/TravelPackageDetailView";
import TravelPackages from "./pages/TravelPackages";
import ProtectedRoute from "./ProtectedRoute";
import UpdateTravelPackage from "./pages/UpdateTravelPackage";

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />
        <Route
          path="addPackage"
          element={
            <ProtectedRoute>
              <AddTravelPackage />
            </ProtectedRoute>
          }
        />
        <Route
          path="updatePackage/:id"
          element={
            <ProtectedRoute>
              <UpdateTravelPackage />
            </ProtectedRoute>
          }
        />
        <Route
          path="allPackages"
          element={
            <ProtectedRoute>
              <TravelPackages />
            </ProtectedRoute>
          }
        />
        <Route
          path="profile"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />
        <Route
          path="package/:id"
          element={
            <ProtectedRoute>
              <TravelPackageDetailView />
            </ProtectedRoute>
          }
        />
        <Route
          path="bookings"
          element={
            <ProtectedRoute>
              <Bookings />
            </ProtectedRoute>
          }
        />
        <Route
          path="customerRequests"
          element={
            <ProtectedRoute>
              <CustomerRequests />
            </ProtectedRoute>
          }
        />
        <Route
          path="cancelledBookings"
          element={
            <ProtectedRoute>
              <CancelledBookings />
            </ProtectedRoute>
          }
        />
        <Route
          path="booking/:id"
          element={
            <ProtectedRoute>
              <BookingDetailView />
            </ProtectedRoute>
          }
        />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
      </Routes>
    </>
  );
}

export default App;
