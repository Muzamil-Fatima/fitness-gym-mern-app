import { useState } from "react";
import Login from "./Login";
import SignUp from "./SignUp";
import ForgetPassword from "./ForgetPassword";

export default function AuthModal({ onClose }) {
  const [activeForm, setActiveForm] = useState("login");

  const switchForm = (formName) => {
    setActiveForm(formName);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm flex justify-center items-center text-white">
      <div className="bg-[var(--color-darker)] p-6 rounded-xl w-[450px] relative">
        <button
          onClick={onClose}
          className="absolute top-3 right-4 text-2xl text-white"
        >
          ×
        </button>

        {/* Render Appropriate Form */}
        {activeForm === "login" && <Login switchForm={switchForm} />}
        {activeForm === "signUp" && <SignUp switchForm={switchForm} />}
        {activeForm === "forgot" && <ForgetPassword switchForm={switchForm} />}
      </div>
    </div>
  );
}
