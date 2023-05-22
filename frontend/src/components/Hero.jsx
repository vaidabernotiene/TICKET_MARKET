import styles from "../style";
import { GetStart } from "./GetStart";

export const Hero = () => {
    return (
      <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
    <div className="flex flex-row justify-between items-center w-full">
        <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[75px]">
          The Next <br className="sm:block hidden" />{" "}
          <span className="text-gradient">Generation</span>{" "}
        </h1>
        <div className="ss:flex hidden md:mr-4 mr-0">
          <GetStart />
        </div>
      </div>
    </ section>
    );
  };