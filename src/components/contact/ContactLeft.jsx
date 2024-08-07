import { contactImg } from "../../assets/index";
import Media from "../banner/Media";

const ContactLeft = () => {
  return (
    <div className="w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-4 lgl:p-8 rounded-lg shadow-shadowOne flex flex-col gap-8 justify-center">
      <img
        className="w-full h-64 object-cover rounded-lg mb-2"
        src={contactImg}
        alt="contactImg"
      />
      <div className="flex flex-col gap-4">
        <h3 className="text-3xl font-bold text-white">Nhat Linh</h3>
        <p className="text-lg font-normal text-gray-400">
          Front End Developer
        </p>
        <p className="text-base text-gray-400 tracking-wide">
          It is a pleasure to collaborate and work with you. Please leave a
          message or contact information. Looking forward to working and growing together soon.
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Phone: <span className="text-lightText">+84 906 702 589</span>
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Email: <span className="text-lightText">nhatlinhdev201@gmail.com</span>
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <h2 className="text-base uppercase font-titleFont mb-4">Find me in</h2>
        <Media />
      </div>
    </div>
  );
}

export default ContactLeft