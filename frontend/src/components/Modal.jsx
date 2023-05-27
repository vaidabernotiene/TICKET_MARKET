import Button from "./Button";
import styles from "../style";

export const Modal = ({ isOpen, onClose, onConfirm }) => {
  if (!isOpen) return null;

  return (
    <div className={`${styles.flexCenter} fixed inset-0 z-50`}>
      <div className="bg-white p-6 rounded shadow-lg">
        <h1 className={`${styles.paragraph} text-black`}>
          Do you really want to remove this user?
        </h1>
        <div className={`${styles.flexCenter}`}>
          <Button text="Yes" onClick={onConfirm}></Button>
          <Button text="Back" onClick={onClose}></Button>
        </div>
      </div>
    </div>
  );
};
