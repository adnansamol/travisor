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
import Itinerary from "./pages/Itinerary";
import Summary from "./pages/Summary";
import Policies from "./pages/Policies";
import MyBookings from "./pages/MyBookings";
import TravelHistory from "./pages/TravelHistory";
import ProfileCard from "./components/card/ProfileCard";
import About from "./pages/About";
import Destination from "./pages/Destination";
import BookingDetailView from "./pages/BookingDetailView";
import RulesAndGuidelines from "./pages/RulesAndGuidelines";
import BookingSummary from "./pages/BookingSummary";
function App() {
  window.addEventListener("pa", () => {
    if (
      window.location.pathname != "/package/1/itinerary" ||
      "/package/1/policies"
    ) {
      localStorage.removeItem("package-cache");
    }
  });

  return (
    <>
      <Routes>
        <Route path="*" element={<div>404</div>} />
        <Route exact path="/" element={<Home />} />
        <Route exact path="/destination/:name" element={<Destination />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/about" element={<About />} />
        <Route
          exact
          path="/rules-and-guidelines"
          element={<RulesAndGuidelines />}
        />

        <Route
          exact
          path="/profile"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        >
          <Route path="details" element={<ProfileCard />} />
          <Route path="myBookings" element={<MyBookings />} />
          <Route path="travelHistory" element={<TravelHistory />} />
        </Route>
        <Route
          exact
          path="/booking/:id"
          element={
            <ProtectedRoute>
              <BookingDetailView />
            </ProtectedRoute>
          }
        />

        <Route path="/package/:id" element={<PackageDetailView />}>
          <Route path="itinerary" element={<Itinerary />} />
          <Route path="policies" element={<Policies />} />
          <Route path="summary" element={<Summary />} />
        </Route>
        <Route exact path="/success" element={<Success />} />
        <Route exact path="/cancel" element={<Cancel />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/register" element={<Register />} />
      </Routes>
    </>
  );
}

export default App;
