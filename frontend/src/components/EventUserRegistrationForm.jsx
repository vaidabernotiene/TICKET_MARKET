import "../App.css";
import Button from "./Button";
import styles from "../style";

export const EventUserRegistrationForm = () => {
  return (
    <div className="bg-blue-gradient flex justify-center items-center h-screen">
      <div className="w-1/2 p-6 border rounded shadow-lg ml-8 container">
        <h1 className="text-3xl mb-4">Register New Event Participant</h1>
        <form>
          <div className="mb-4">
            <label htmlFor="name" className="block mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              className="w-full border px-4 py-2 rounded"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="name" className="block mb-2">
              Surname
            </label>
            <input
              type="text"
              id="sernamename"
              className="w-full border px-4 py-2 rounded"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full border px-4 py-2 rounded"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="phone" className="block mb-2">
              Phone number
            </label>
            <input
              type="text"
              id="phone"
              className="w-full border px-4 py-2 rounded"
            />
          </div>
          <Button styles={`mt-10`} text='Register'>
          </Button>
        </form>
      </div>
    </div>
  );
};
