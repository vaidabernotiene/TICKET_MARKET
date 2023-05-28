import React, { useState } from "react";
import Button from "./Button";
import styles from "../style";
import { Modal } from "./Modal";

export const EventUserCard = ({
  eventUsers,
  onHandlerDelete,
}) => {
  const { id, name, surname, email, phone } = eventUsers;
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleDeleteClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleConfirmDelete = () => {
    onHandlerDelete(id);
    setIsModalOpen(false);
  };

  return (
    <tbody className={`${styles.paragraph}`}>
      <tr className="text-[16px]">
        <td>{name}</td>
        <td>{surname}</td>
        <td>{email}</td>
        <td>{phone}</td>
        <td className="flex justify-end">
          <Button styles={`m-5`} text="Delete" onClick={handleDeleteClick} />
          <Modal
            text="Do you really want to remove this user?"
            isOpen={isModalOpen}
            onClose={handleCloseModal}
            onConfirm={handleConfirmDelete}
          />
        </td>
      </tr>
    </tbody>
  );
};
