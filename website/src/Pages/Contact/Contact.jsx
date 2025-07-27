import Consultation from "../../Components/Consultation";
import Question from "./Question";
import MessageForm from "./MessageForm";
import ContactForm from "./ContactForm";

export default function Contact() {
  return (
    <div className="w-11/12 m-auto ">
      <Question />
      <hr />
      <div className="grid grid-cols-5" >
        <div className="col-span-2">
          <ContactForm />
        </div>
        <div className="col-span-3">
          <MessageForm />
        </div>
      </div>
      <hr className="mt-10" />
      <div className="m-20">
        <Consultation />
      </div>
    </div>
  );
}
