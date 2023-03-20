import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import { Routes, BrowserRouter, Route } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Navbar from "./components/navbar/Navbar";
import Success from "./pages/Success";
import Cancel from "./pages/Cancel";
import Login from "./pages/Login";
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="*" element={<div>404</div>} />
        <Route exact path="/" element={<Home />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/success" element={<Success />} />
        <Route exact path="/cancel" element={<Cancel />} />
        <Route exact path="/login" element={<Login />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
