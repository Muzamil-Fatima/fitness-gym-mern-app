import { NavLink, Outlet } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import Logo from "../../images/Logo.svg";
import cart from "../../images/cart.svg";
import user from "../../images/user.svg";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
      <div className="">
        <div className=" w-11/12 m-auto flex items-center justify-between px-8 py-6 h-full font-[Hanson] ">
          <div className="flex-1">
            <NavLink to="/">
              <img src={Logo} alt="Logo" className="w-64 h-8" />
            </NavLink>
          </div>
          <div className="flex space-x-8 ">
            <ul className="flex space-x-14  font-bold text-base px-18">
              <li className="hover:underline">
                <NavLink to="/">Home</NavLink>{" "}
              </li>
              <li
                className="relative group hover:underline"
                ref={dropdownRef}
                onMouseEnter={() => setIsOpen(true)}
                onMouseLeave={() => setIsOpen(false)}
              >
                <span
                  onClick={() => setIsOpen(!isOpen)}
                  className="cursor-pointer"
                >
                  About
                </span>{" "}
                {isOpen && (
                  <ul className="absolute top-[100%] left-0  bg-[var(--color-darker)] text-xl font-[Poppins] font-medium rounded shadow-lg p-4 w-40 z-50">
                    <li className="px-4 py-2 hover:underline">
                      <NavLink
                        to="/about/lenka"
                        onClick={() => setIsOpen(false)}
                      >
                        Lenka
                      </NavLink>
                    </li>
                    <li className=" px-4 py-2 hover:underline">
                      <NavLink
                        to="/about/training-classes"
                        onClick={() => setIsOpen(false)}
                      >
                        Classes
                      </NavLink>
                    </li>
                    <li className="px-4 py-2 hover:underline">
                      <NavLink
                        to="/about/sessions"
                        onClick={() => setIsOpen(false)}
                      >
                        Sessions
                      </NavLink>
                    </li>
                  </ul>
                )}
              </li>
              <li className="hover:underline">
                <NavLink to="/services">Services</NavLink>{" "}
              </li>
              <li className="hover:underline">
                <NavLink to="/contact">Contact</NavLink>{" "}
              </li>
            </ul>
            <div className="flex-1 flex justify-end space-x-4">
              <img src={cart} alt="cart" className="h-8 w-8" />
              <img src={user} alt="user" className="h-8 w-8" />
            </div>
          </div>
        </div>
        <hr className="opacity-50" />
     
          <Outlet />
      </div>
  );
}
