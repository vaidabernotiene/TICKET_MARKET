import "../App.css";
import Button from "./Button";

export const Register = () => {
  return (
    <div className="bg-blue-gradient flex justify-center items-center h-screen">
      <div className="w-1/2 p-6 border rounded shadow-lg ml-8 container">
        <h1 className="text-3xl mb-4">Register</h1>
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
              id="surname"
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
            <label htmlFor="password" className="block mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
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
