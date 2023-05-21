export const Register= ()=>{

    return (
        <div className="w-1/3 p-6 border rounded shadow-lg ml-8 container">
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
          <button
            type="submit"
            className="w-full bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
          >
            Register
          </button>
        </form>
        </div>
    )
}