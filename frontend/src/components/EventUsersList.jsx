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
      console.log(list.data);
      setIsLoading(false);
    });
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <section className={`${styles.paddingY} ${styles.flexCenter} flex-col`}>
      <h1
        className={`${styles.heading2} bg-form-gradient ss:text-[58px] text-[42px] text-white ss:leading-[100.8px] leading-[75px] w-full`}
      >
        Already in event -<span> {participant.length}.</span>
      </h1>
      {/* <div className={`${styles.flexStart} relative`}>
        <span className={`absolute h-full ${styles.flexCenter}`}>
          <svg
            viewBox="0 0 24 24"
            class="text-white h-4 w-4 fill-current text-gray-500"
          >
            <path d="M10 4a6 6 0 100 12 6 6 0 000-12zm-8 6a8 8 0 1114.32 4.906l5.387 5.387a1 1 0 01-1.414 1.414l-5.387-5.387A8 8 0 012 10z"></path>
          </svg>
        </span>
        <input
          type="text"
          id="table-search"
          className="block p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Search"
        />
      </div> */}
      <div
        className="flex flex-wrap flex-col justify-between w-full sm:flex
    z-[1]"
      >
        <table className="table-auto text-white ">
          {participant.map((user) => (
            <EventUserCard
              key={user.id}
              {...user}
              onEditBtnClick={handleOnEdit}
              onDeleteBtnClick={handleOnDelete}
            />
          ))}
        </table>
      </div>
    </section>
  );
};
