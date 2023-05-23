import { Routes, Route } from "react-router-dom";

import "./App.css";
import styles from "./style";

import {
  Navbar,
  Home,
  Login,
  Register,
  Hero,
  EventUserRegistrationForm,
  EventUsersList,
  Footer,
} from "./components";

function App() {
  return (
    <div className="bg-primary w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
          {/* <div className={`bg-primary ${styles.flexStart}`}>
            <div className={`${styles.boxWidth}`}>
              <Hero />
            </div>
          </div> */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/new_participant" element={<EventUserRegistrationForm />} />
            <Route path="/participants_list" element={<EventUsersList />} />
          </Routes>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
