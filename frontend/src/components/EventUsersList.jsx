import { eventUsers } from "../constants";
import { useEffect, useState } from "react";
import { EventUserCard } from "./EventUserCard";
import styles from "../style";

export const EventUsersList = () => {
  // const [isLoading, setIsLoading] = useState(true);

  // useEffect(() => {
  //   fetch('http://localhost:5000/adminusers-list')
  //     .then(res => res.json())
  //     .then(users => {
  //       // setProducts(users);
  //       console.log(users)
  //       setIsLoading(false);
  //     });
  // }, []);

  // if (isLoading) {
  //   return <div>Loading...</div>;
  // }
  return (
    <section
      className={`${styles.paddingY} ${styles.flexCenter} flex-col`}
    >
      <h1 className="font-redHat font-semibold ss:text-[64px] text-[52px] text-white ss:leading-[100.8px] leading-[75px] w-full">
        Already in event -
        <span className="text-gradient"> {eventUsers.length}.</span>
      </h1>
      {/* SEARCH BAR*/}
      {/* <input></input> */}
      <div
        className="flex flex-wrap flex-col justify-between w-full sm:flex
    z-[1]"
      >
      <table className="table-auto text-white ">
        {eventUsers.map((user) => (
          <EventUserCard key={user.id} {...user} />
        ))}
        </table>
      </div>
    </section>
  );
};
