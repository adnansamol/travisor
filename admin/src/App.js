import { Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import AddTravelPackage from "./pages/AddTravelPackage";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Register from "./pages/Register";
import TravelPackageDetailView from "./pages/TravelPackageDetailView";
import TravelPackages from "./pages/TravelPackages";
import ProtectedRoute from "./ProtectedRoute";

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
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
      </Routes>
    </>
  );
}

export default App;
