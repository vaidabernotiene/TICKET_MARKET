import { eror404 } from "../assets";
import styles from "../style";

export const PageNotFound = () => {
  
  console.log("Uuuups... maybe you lost?");
  return (
    <section className={`${styles.flexCenter}`}>
      <img src={eror404} alt="PageNotFound"></img>
    </section>
  );
};
