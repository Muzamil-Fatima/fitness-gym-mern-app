import { Route, Routes } from "react-router-dom";
import SideBar from "./Component/SideBar";
import OverView from "./Pages/Dashboard/OverView";
import Appointment from "./Pages/Appointment/Appointment";
import Classes from "./Pages/Classes/Classes";
import Services from "./Pages/Services/Services";
import Client from "./Pages/Clients/Client";
import Setting from "./Pages/Setting/Settings";
import Profile from "./Pages/Setting/ProfileDetails";
import Team from "./Pages/Setting/Team";
// import SideIcon from "./Component/SideIcon";
import Login from "./Pages/Login/LoginForm";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="login" element={<Login />} />
        <Route
          path="/*"
          element={
            <div className="flex bg-[var(--color-dark)] h-screen text-[var(--color-white)]">
              <div className="h-screen sticky top-0">
              <SideBar />
              </div>
              <div className="h-screen w-px bg-gray-500 opacity-40"></div>
              <div className="flex-1 ml-8 overflow-y-auto min-h-screen">
                <Routes>
                  <Route path="overview" element={<OverView />} />
                  <Route path="client" element={<Client />} />
                  <Route path="appointment" element={<Appointment />} />
                  <Route path="classes" element={<Classes />} />
                  <Route path="services" element={<Services />} />
                  <Route path="setting" element={<Setting />} />
                  <Route path="setting/profile-details" element={<Profile />} />
                  <Route path="setting/team-details" element={<Team />} />
                </Routes>
                {/* <div>
                  <SideIcon />
                </div> */}
              </div>
            </div>
          }
        />
      </Routes>
    </>
  );
}
