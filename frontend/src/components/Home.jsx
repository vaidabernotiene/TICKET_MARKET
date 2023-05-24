import { hero1 } from "../assets";
import layout from "../style";

export const Home = () => {
  return (
    <div>
      <img
        src={hero1}
        alt="hero_backgroundImage"
        className={`${layout.sectionImg} h-50`}
      ></img>
    </div>
  );
};
