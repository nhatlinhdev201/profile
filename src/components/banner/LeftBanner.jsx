import { useTypewriter, Cursor } from "react-simple-typewriter";
import Media from './Media';
import { bannerImg } from "../../assets";
import TechList from "./TechList";
import BreakLine from "../common/BreakLine";

const LeftBanner = () => {
  const [text] = useTypewriter({
    words: ["Front-End Developer."],
    loop: true,
    typeSpeed: 20,
    deleteSpeed: 15,
    delaySpeed: 2000,
  });
  return (
    <div className="w-full min-h-[calc(100vh-290px)] flex flex-col gap-20">
      <div className="flex flex-col gap-5">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="col-span-1">
            <h4
              className="text-center lg:text-left text-lg font-normal bg-clip-text text-transparent bg-gradient-to-r from-[#ff00ff] to-[#00ffff] mb-10"
            >
              WELCOME TO MY WORLD
            </h4>
            <h1 className="text-center lgl:text-left text-6xl font-bold text-white">
              {"Hi, I'm "} <span className="text-designColor capitalize">Nhat Linh</span>
            </h1>
            <h2 className="text-center lgl:text-left text-4xl font-bold text-white">
              a <span>{text}</span>
              <Cursor
                cursorBlinking="false"
                cursorStyle="|"
                cursorColor="#ff014f"
              />
            </h2>
            <p className="text-center lgl:text-left text-base font-bodyFont leading-6 tracking-wide mt-16">
              {"Learn relentlessly, work tirelessly, constantly upgrade and evolve. Ready to face every challenge to conquer the pinnacle. I will become a professional fullstack developer. I'm looking forward to collaborating and working with you soon."}
            </p>
          </div>
          <div className="col-span-1 flex justify-center items-center">
            <img
              className="w-[400px] h-[285px] lgl:w-[500px] lgl:h-[355px]"
              src={bannerImg}
              alt="bannerImg"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-5">
        <BreakLine title="tech stack" />
        <div className="w-full flex justify-center">
          <TechList />
        </div>
      </div>
      <div className="flex flex-col gap-5">
        <BreakLine title="My social" />
        <div className="w-full flex justify-center">
          <Media />
        </div>
      </div>
    </div>
  );
}

export default LeftBanner