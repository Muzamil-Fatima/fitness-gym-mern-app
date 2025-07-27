import facebook from "../../../images/facebook.svg";
import tikTok from "../../../images/tikTok.svg";
import arrowRight from "../../../images/arrow-right.png";
import instagram from "../../../images/instagram.svg";

export default function Question() {
  return (
    <div className="font-secondary mt-10 mb-10">
      <div className="">
        <h3 className="font-primary font-bold text-4xl">
          Contact <span className="text-[var(--color-primary)]">Form</span>
        </h3>
        <p className="opacity-50 font-medium text-[20px] mb-24 mt-10">
          Fill out the form below & one of our friendly team members will get
          back to you shortly.👍
        </p>
        <p className="text-3xl">Follow Us on Social Media</p>
        <div className="">
          <ul className="flex justify-start">
            <li>
              <a
                href="https://www.facebook.com/people/Coach-Lenka/100087953091862/?_rdr"
                target="_blank"
              >
                <img src={facebook} alt="facebook" className="w-14 h-14 mr-4 mt-4 border-[var(--color-white)] border-2 border-dashed p-2 rounded-xl hover:bg-[var(--color-darked)] hover:border-[var(--color-primary)]" />
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/lenka_coach_dubai/"
                target="_blank"
              >
                <img src={instagram} alt="instagram" className="w-14 h-14 mr-4 mt-4 border-[var(--color-white)] border-2 border-dashed p-2 rounded-xl hover:bg-[var(--color-darked)] hover:border-[var(--color-primary)]"  />
              </a>
            </li>
            <li>
              <img src={tikTok} alt="tikTok" className="w-14 h-14 mr-4 mt-4 border-[var(--color-white)] border-2 border-dashed p-2 rounded-xl hover:bg-[var(--color-darked)] hover:border-[var(--color-primary)]"  />
            </li>
          </ul>
        </div>
        <div className="mb-5 mt-10 flex h-32 bg-[var(--color-darker)] hover:bg-[var(--color-darked)]  hover:border-2 hover:border-dashed border-[var(--color-primary)] w-full rounded-2xl justify-between items-center ">
          <div className="flex flex-col pl-6">
            <label for="email" className="opacity-50 text-[16px] font-medium">
              You can Email us here
            </label>
            <input
              id="email"
              type="text"
              readonly
              value="lenka@coachlenkadubai.com"
              className="text-[20px] font-medium"
            />
          </div>
          <div>
            <img src={arrowRight} alt="=>" className="mr-8" />
          </div>
        </div>
        <div className="mb-5 flex h-32 bg-[var(--color-darker)] hover:bg-[var(--color-darked)]  hover:border-2 hover:border-dashed border-[var(--color-primary)] w-full rounded-2xl justify-between items-center ">
          <div  className="flex flex-col pl-6">
            <label
              for="mobile no"
              className="opacity-50 text-[16px] font-medium"
            >
              Give as a call on
            </label>
            <input
              id="mobile no"
              type="text"
              readonly
              value="+971 52 653 88 61"
              className="text-[20px] font-medium"
            />
          </div>
          <div>
            <img src={arrowRight} alt="=>" className="mr-8" />
          </div>
        </div>
        <div className="mb-5 flex h-32 bg-[var(--color-darker)] hover:bg-[var(--color-darked)]  hover:border-2 hover:border-dashed border-[var(--color-primary)] w-full rounded-2xl justify-between items-center ">
          <div className="flex flex-col pl-6">
            <label
              for="work-hours"
              className="opacity-50 text-[16px] font-medium"
            >
              Work Hours
            </label>
            <input
              id="work-hours"
              type="text"
              readonly
              value="6:00 am - 10:00 pm"
              className="text-[20px] font-medium"
            />
          </div>
          <div>
            <img src={arrowRight} alt="=>"  className="mr-8" />
          </div>
        </div>
      </div>
    </div>
  );
}
