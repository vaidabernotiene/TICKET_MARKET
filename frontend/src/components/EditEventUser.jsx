import Button from "./Button";

export const EditEventUser = () => {
  
  return (
    <div className="theme-gradient flex justify-center items-center py-20">
      <div className="bg-form-gradient w-1/2 p-6 border rounded shadow-lg ml-8 ">
        <h1 className="text-white text-3xl mb-4">Edit User</h1>
        <form>
        <div className="mb-4">
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Name"
              // onChange={onHandleChange}
              className="w-full border px-4 py-2 rounded"
            />
          </div>
          <div className="mb-4">
            <input
              type="text"
              id="surnamename"
              name="surname"
              placeholder="Surname"
              // onChange={onHandleChange}
              className="w-full border px-4 py-2 rounded"
            />
          </div>
          <div className="mb-4">
            <input
              type="email"
              id="email"
              name="email"
              // onChange={onHandleChange}
              placeholder="Email"
              className="w-full border px-4 py-2 rounded"
            />
          </div>
          <div className="mb-4">
            <input
              type="text"
              id="phone"
              name="phone"
              // onChange={onHandleChange}
              placeholder="Phone"
              className="w-full border px-4 py-2 rounded"
            />
          </div>
          <div className="columns-2">
            <Button text="Save Changes"/>
          </div>
        </ form>
        </div>
        </div>
    
  );
};
