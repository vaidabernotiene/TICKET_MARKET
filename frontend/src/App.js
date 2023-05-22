import { Routes, Route } from "react-router-dom";

import "./App.css";
import styles from "./style";

import { Home } from "./components/Home";
import { Login } from "./components/Login";
import { Register } from "./components/Register";
import NavBar from "./components/Navbar";
import { Hero } from "./components/Hero";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="bg-primary w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <NavBar />
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
          </Routes>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
