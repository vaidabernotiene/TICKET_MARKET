import Button from "./Button";
import styles from "../style";

export const Modal = ({ isOpen, onClose, onConfirm }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded shadow-lg">
        <h1 className={`${styles.paragraph} text-black`}>
          Do you really want to remove this user?
        </h1>
        <div className="flex justify-end">
          <Button text="Yes" onClick={onConfirm}></Button>
          <Button text="Back" onClick={onClose}></Button>
        </div>
      </div>
    </div>
  );
};
