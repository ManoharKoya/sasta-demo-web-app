import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Moto from "./pages/Moto";
import ContactUs from "./pages/ContactUs";

import "./css/App.css";
import "./css/Pages.css";
import "./css/ContactDeatils.css";

function App() {
  return (
    <div className="App">
      <header>
        <Navbar />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/moto" element={<Moto />} />
          <Route path="/contact-us" element={<ContactUs />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
