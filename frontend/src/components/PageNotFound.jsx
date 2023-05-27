import { Link } from "react-router-dom";
import { eror404 } from "../assets";
import styles from "../style";

export const PageNotFound = () => {
  
  console.log("Uuuups... no such page...");
  return (
    <section className={`${styles.flexCenter} flex-col`}>
      <p className={styles.paragraph}>
          Maybe you are lost? Click <Link to="/home" className="hover:underline">HERE</Link>
        </p>
      <img src={eror404} alt="PageNotFound"></img>
    </section>
  );
};
