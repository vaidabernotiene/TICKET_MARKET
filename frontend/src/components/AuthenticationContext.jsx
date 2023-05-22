import { createContext, useState } from "react";

export const AuthenticationContext = createContext();

export const AuthenticationWrapper = ({ children }) => {
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [username, setUsername] = useState("");

  const handleAuthentication = (data) => setIsSignedIn(data);
  const handleSetUsername = (data) => setUsername(data);

  return (
    <AuthenticationContext.Provider
      value={{
        isSignedIn,
        setIsSignedIn: handleAuthentication,
        username,
        setUsername: handleSetUsername,
      }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
};
