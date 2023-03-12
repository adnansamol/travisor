import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import { Routes, BrowserRouter, Route } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Navbar from "./components/navbar/Navbar";
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="*" element={<div>404</div>} />
        <Route exact path="/" element={<Home />} />
        <Route exact path="/contact" element={<Contact />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
