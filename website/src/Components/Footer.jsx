import Logo from "../../images/Logo.svg";
import faceBook from "../../images/facebook.svg";
import instagram from "../../images/instagram.svg";
import tikTok from "../../images/tikTok.svg";
import arrow from "../../images/arrow-up.svg";
import { NavLink } from "react-router-dom";
export default function Footer() {
  return (
    <div className="font-secondary bg-[var(--color-darker)] full">
      <footer className="w-full m-auto pt-18 px-22 ">
        <div className="mb-8">
          <img src={Logo} alt="Logo" />
        </div>
        <div className="grid-cols-5 grid gap-4">
          <div className=" col-span-2">
            <div>
              <ul className="flex gap-4 mb-10">
                <li>
                  <a
                    href="https://www.facebook.com/people/Coach-Lenka/100087953091862/?_rdr"
                    target="_blank"
                  >
                    <img src={faceBook} alt="facebook icon" className="w-10 h-10" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/lenka_coach_dubai/"
                    target="_blank"
                  >
                    <img src={instagram} alt="instagram icon" className="w-10 h-10"/>
                  </a>
                </li>
                <li>
                  <img src={tikTok} alt="tiktok" className="w-10 h-10" />
                </li>
              </ul>
            </div>
            <p className="font-semibold text-lg m-2">Subscribe to our newsletter!</p>
            <div className="email-block">
              <div className="email-label flex">
                <label htmlFor="email" className="text-base footer-email">
                  Enter Email
                </label>
                <img src={arrow} alt="arrow-icon"  />
              </div>
              <input 
              className="w-3/5 mt-2 bg-transparent border-b border-white text-white placeholder-white outline-none"
              type="email" required  />
            </div>
          </div>
          <div className="text-base space-y-4">
            <h3 className="font-bold">Quick links</h3>
            <ul className="font-normal  opacity-75 space-y-2">
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/about/lenka">About Me</NavLink>
              </li>
              <li>
                <NavLink to="/services">Services</NavLink>
              </li>
              <li>
                <NavLink to="/contact">Contact</NavLink>
              </li>
            </ul>
          </div>
          <div className=" text-base space-y-4 ">
            <h3 className="font-bold">News</h3>
            <h4 className="font-normal opacity-75">Fitness Blog</h4>
            <div className="font-normal opacity-75">FAQ</div>
          </div>
          <div className="text-base space-y-4">
            <h2 className="font-bold">Fitness Services</h2>
            <div className="font-normal opacity-75">
              Book a Free Consultation
            </div>
            <div className="font-normal text-base opacity-75">
              Refer a Friend & Earn Rewards
            </div>
            <div className="font-normal text-base opacity-75">Membership & Pricing</div>
          </div>
        </div>
        <div className="flex text-base mt-24 justify-between ">
          <p className="font-medium">©2025 Muzamil-Fatima. All right reserved</p>
          <ul className="flex gap-14 mb-0.5">
            <li>Privacy Policy</li>
            <li>Legel Notice</li>
            <li>Cookies Policy</li>
            <li>Terms & Condition</li>
          </ul>
        </div>
      </footer>
    </div>
  );
}