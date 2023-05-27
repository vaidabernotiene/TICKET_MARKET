import { useEffect, useState } from "react";
import axios from "axios";
import styles from "../style";

import { EventUserCard } from "./EventUserCard";

export const EventUsersList = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [participant, setParticipant] = useState(null);

  // DELETE participant -----------------------------------------------
  const handleOnDelete = (id) => {
    try {
      axios
        .delete(`http://localhost:5000/participants_list/${id}`)
        .then((response) => {
          window.location.reload();
          console.log("Istrinta sekmingai");
        });
    } catch (error) {
      console.log(error);
    }
  };

  // EDIT participant -----------------------------------------------
  const handleOnEdit = () => {};

  // LIST of participants --------------------------------------------
  useEffect(() => {
    axios.get("http://localhost:5000/participants_list").then((list) => {
      setParticipant(list.data);
      setIsLoading(false);
    });
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <section className={`${styles.paddingY} ${styles.flexCenter} flex-col`}>
      <h1
        className={`${styles.boxWidth} ${styles.heading2} ${styles.paddingX}
        bg-form-gradient sm:text-[24px]`}
      >
        Already in event -<span> {participant.length}.</span>
      </h1>
      <div
        className={`${styles.boxWidth} ${styles.flexBetween} flex-col sm:flex
    z-[1]`}
      >
        <table className="table-auto text-white">
          {participant.map((user) => (
            <EventUserCard
              key={user.id}
              eventUsers={user}
              onEditBtnClick={handleOnEdit}
              onDeleteBtnClick={handleOnDelete}
            />
          ))}
        </table>
      </div>
    </section>
  );
};
