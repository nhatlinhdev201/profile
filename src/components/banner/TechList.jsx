import { IoLogoJavascript } from "react-icons/io5";
import { FaFigma, FaNodeJs } from "react-icons/fa";
import { SiFirebase, SiSpring, SiMongodb, SiMicrosoftsqlserver } from "react-icons/si";
import { GrReactjs, GrAndroid } from "react-icons/gr";
import { TbBrandNextjs } from "react-icons/tb";
const TechList = () => {
  return (
    <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
      <div className="grid grid-cols-5 md:grid-cols-10 gap-4">
        <span className="bannerIcon">
          <IoLogoJavascript />
        </span>
        <span className="bannerIcon">
          <GrReactjs />
        </span>
        <span className="bannerIcon">
          <TbBrandNextjs />
        </span>
        <span className="bannerIcon">
          <FaNodeJs />
        </span>
        <span className="bannerIcon">
          <SiSpring />
        </span>
        <span className="bannerIcon">
          <GrAndroid />
        </span>
        <span className="bannerIcon">
          <SiMongodb />
        </span>
        <span className="bannerIcon">
          <SiMicrosoftsqlserver />
        </span>
        <span className="bannerIcon">
          <SiFirebase />
        </span>
        <span className="bannerIcon">
          <FaFigma />
        </span>
      </div>
    </div>
  )
}


export default TechList;