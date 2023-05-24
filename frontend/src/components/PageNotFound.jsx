import { eror404 } from "../assets";

export const PageNotFound = () => {
    console.log('Uuuups... maybe you lost?')
  return (
    <div className="h-full overflow-hidden">
      <img src={eror404} alt="PageNotFound"></img>
    </div>
  );
};
