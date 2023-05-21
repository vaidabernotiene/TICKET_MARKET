import { Routes, Route } from "react-router-dom";

import "./App.css";
import styles from "./style";

import { Home } from "./components/Home";
import { Login } from "./components/Login";
import { Register } from "./components/Register";

function App() {
  return (
    <div className="w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
