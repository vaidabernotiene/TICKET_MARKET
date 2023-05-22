import { eventUsers } from "../constants";
import { EventUserCard } from "./EventUserCard";
import styles from "../style";

export const EventUsersList = () => {
  return (
    <section
      className={`${styles.paddingY} ${styles.flexCenter} flex-col relative `}
    >
      <h1 className="font-redHat font-semibold ss:text-[64px] text-[52px] text-white ss:leading-[100.8px] leading-[75px] w-full">
        Already in attend -
        <span className="text-gradient"> {eventUsers.length}.</span>
      </h1>
      {/* SEARCH BAR*/}
      {/* <input></input> */}
      <div
        className="flex flex-wrap flex-col justify-between w-full 
    relative z-[1]"
      >
      <table className="table-auto text-white">
        {eventUsers.map((user) => (
          <EventUserCard key={user.id} {...user} />
        ))}
        </table>
      </div>
    </section>
  );
};
