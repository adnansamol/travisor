import { Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import AddTravelPackage from "./pages/AddTravelPackage";

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="addPackage" element={<AddTravelPackage />} />
      </Routes>
    </>
  );
}

export default App;
