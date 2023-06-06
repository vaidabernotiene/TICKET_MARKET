import React, { useState, useContext } from "react";
import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import {
  PageNotFound,
  Navbar,
  Home,
  Login,
  Register,
  EventUserRegistrationForm,
  EventUsersList,
  EditEventUser,
  Footer,
} from "./components";
import "./App.css";
import styles from "./style";
import { AuthenticationContext } from "./components/AuthenticationContext";
import Protected from "./components/Protected";

function App() {
  const { isSignedIn, setIsSignedIn } = useContext(AuthenticationContext);
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsSignedIn(false);
  };

  return (
    <div className="bg-primary w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          {location.pathname === "/" ||
          location.pathname === "/home" ||
          location.pathname === "/login" ||
          location.pathname === "/register" ||
          location.pathname === "/participants_list" ||
          location.pathname === "/edit" ? (
            <Navbar isLoading={isLoading} onLogout={handleLogout} />
          ) : (
            <></>
          )}
          <Routes>
            <Route path="*" element={<PageNotFound />} />
            <Route path="/" element={<Home />} />
            <Route
              path="/home"
              element={isSignedIn ? <Navigate to="/" /> : <Home />}
            />
            <Route
              path="/login"
              element={isSignedIn ? <Navigate to="/" /> : <Login />}
            />
            <Route
              path="/register"
              element={isSignedIn ? <Navigate to="/" /> : <Register />}
            />
            <Route element={<Protected />}>
              <Route
                path="/new_participant"
                element={<EventUserRegistrationForm />}
              />
              <Route path="/participants_list" element={<EventUsersList />} />
              <Route path="/edit" element={<EditEventUser />} />
            </Route>
          </Routes>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
