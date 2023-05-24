import React, { useState, useContext } from "react";
import { Routes, Route } from "react-router-dom";
import {
  PageNotFound,
  Navbar,
  Home,
  Login,
  Register,
  EventUserRegistrationForm,
  EventUsersList,
  Footer,
} from "./components";
import { AuthenticationContext } from "./components/AuthenticationContext";
import Protected from "./components/Protected";
import "./App.css";
import styles from "./style";

function App() {
  const { setIsSignedIn } = useContext(AuthenticationContext);
  const [isLoading, setIsLoading] = useState(true);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsSignedIn(false);
  };

  return (
    <div className="bg-primary w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar isLoading={isLoading} onLogout={handleLogout} />
          <Routes>
            <Route path="*" element={<PageNotFound />}/>
            <Route path="/home" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route
              element={
                <Protected isLoading={isLoading} setIsLoading={setIsLoading} />
              }
            >
              <Route
                path="/new_participant"
                element={<EventUserRegistrationForm />}
              />
              <Route path="/participants_list" element={<EventUsersList />} />
            </Route>
          </Routes>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
