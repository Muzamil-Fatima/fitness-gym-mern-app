import { Routes, Route, Navigate } from "react-router-dom";
import NavBar from "./Components/NavBar";
import Home from "./Pages/Home/Home";
import Contact from "./Pages/Contact/Contact";
import SessionCard from "./Pages/About/SessionCard";
import Classes from "./Pages/About/Classes";
import Lenka from "./Pages/About/Lenka";
import Footer from "./Components/Footer";
import MyServices from "./Pages/Services/MyServices";
import ServicesDetails from "./Pages/Services/ServicesDetails";
import AuthModal from "./Pages/Auth/AuthModal";
import { useState, useEffect } from "react";
import UserProfile from "./Pages/Auth/UserProfile";
import PageWrapper from "./Pages/About/PageWrapper";

function App() {
  const [authIsOpen, setAuthIsOpen] = useState(false);
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (!user) {
      const timer = setTimeout(() => {
        setAuthIsOpen(true);
      }, 4000);
      return () => clearTimeout(timer);
    }
  }, []);
  return (
    <div className="bg-[var(--color-dark)] text-[var(--color-white)] min-h-screen w-full font-primary m-0 p-0">
      <NavBar userIcon={() => setAuthIsOpen(true)} />
      {authIsOpen && <AuthModal onClose={() => setAuthIsOpen(false)} />}
      <Routes>
        <Route index element={<Home />} />
        <Route path="training-classes/:slug" element={<PageWrapper />} />
        <Route path="about">
          <Route path="sessions" element={<SessionCard />} />
          <Route path="lenka" element={<Lenka />} />
          <Route path="training-classes" element={<Classes />} />
        </Route>
        <Route path="services" element={<MyServices />} />
        <Route path="services/:id" element={<ServicesDetails />} />
        <Route path="contact" element={<Contact />} />
        <Route path="profile" element={<UserProfile />} />
        {/* </Route> */}
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
