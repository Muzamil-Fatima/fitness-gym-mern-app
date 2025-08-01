import { Routes, Route, Navigate } from "react-router-dom";
import NavBar from "./Components/NavBar";
import Home from "./Pages/Home/Home";
import Contact from "./Pages/Contact/Contact";
import SessionCard from "./Pages/About/SessionCard";
import Classes from "./Pages/About/Classes";
import Lenka from "./Pages/About/Lenka";
import Footer from "./Components/Footer";
import Functional from "./Pages/About/Functional";
import OnlineTraining from "./Pages/About/OnlineTraining";
import StrengthPower from "./Pages/About/StrengthPower";
import WeightLoss from "./Pages/About/WeightLoss";
import MyServices from "./Pages/Services/MyServices";
import ServicesDetails from "./Pages/Services/ServicesDetails";
import AuthModal from "./Pages/Auth/AuthModal";
import { useState, useEffect } from "react";

function App() {
  const [authIsOpen, setAuthIsOpen] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setAuthIsOpen(true);
    }, 4000);
    return () => clearTimeout(timer);
  }, []);
  return (
    <div className="bg-[var(--color-dark)] text-[var(--color-white)] min-h-screen w-full font-primary m-0 p-0">
      <NavBar userIcon={() => setAuthIsOpen(true)} />
      {authIsOpen && <AuthModal onClose={() => setAuthIsOpen(false)} />}
      <Routes>
        {/* <Route path="/" element={<NavBar />}> */}
        <Route index element={<Home />} />

        <Route path="about">
          <Route path="sessions" element={<SessionCard />} />
          <Route path="training-classes" element={<Classes />} />
          <Route
            path="training-classes/functional-training"
            element={<Functional />}
          />
          <Route
            path="training-classes/online-training"
            element={<OnlineTraining />}
          />
          <Route
            path="training-classes/strength-power-training"
            element={<StrengthPower />}
          />
          <Route
            path="training-classes/weight-loss-training"
            element={<WeightLoss />}
          />
          <Route path="lenka" element={<Lenka />} />
        </Route>
        <Route path="services" element={<MyServices />} />
        <Route path="services/:id" element={<ServicesDetails />} />
        <Route path="contact" element={<Contact />} />
        {/* </Route> */}
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
