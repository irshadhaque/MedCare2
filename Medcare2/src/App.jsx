import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import HeroSection from "./components/HeroSection";
import ServiceCards from "./components/ServiceCards";
import FAQSection from "./components/FAQSection";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Login from "./components/Login";
import AboutUs from "./components/AboutUs";
function HomePage() {
  return (
    <>
      <HeroSection />
      <ServiceCards />
      <FAQSection />
    </>
  );
}

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<AboutUs />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
