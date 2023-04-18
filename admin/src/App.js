import { Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import AddTravelPackage from "./pages/AddTravelPackage";
import Login from "./pages/Login";
import Register from "./pages/Register";
import TravelPackages from "./pages/TravelPackages";
import ProtectedRoute from "./ProtectedRoute";

function App() {
  return (
    <>
      <Header />

      <Routes>
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
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
      </Routes>
    </>
  );
}

export default App;
