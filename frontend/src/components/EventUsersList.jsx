import { useEffect, useState } from "react";
import axios from "axios";
import styles from "../style";

import { EventUserCard } from "./EventUserCard";

export const EventUsersList = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [participant, setParticipant] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:5000/participants_list')
      .then(list => {
        setParticipant(list.data);
        console.log(list)
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }
  return (
    <section
      className={`${styles.paddingY} ${styles.flexCenter} flex-col`}
    >
      <h1 className="font-redHat font-semibold ss:text-[64px] text-[52px] text-white ss:leading-[100.8px] leading-[75px] w-full">
        Already in event -
        <span className="text-gradient"> {setParticipant.length}.</span>
      </h1>
      {/* SEARCH BAR*/}
      {/* <input></input> */}
      <div
        className="flex flex-wrap flex-col justify-between w-full sm:flex
    z-[1]"
      >
      <table className="table-auto text-white ">
        {participant.map((user) => (
          <EventUserCard key={user.id} {...user}/>
        ))}
        </table>
      </div>
    </section>
  );
};
