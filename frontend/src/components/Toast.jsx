import Button from "./Button";
import styles from "../style";

export const Toast = ({ text, show, hide }) => {
  if (!show) return null;

  return (
    <div className={`${styles.flexCenter} fixed inset-0 z-50`}>
      <div className="bg-white p-6 rounded shadow-lg">
        <h1 className={`text-black`}>{text}</h1>
        <Button className="text-white" text="Close" onClick={hide}>
          Close
        </Button>
      </div>
    </div>
  );
};
