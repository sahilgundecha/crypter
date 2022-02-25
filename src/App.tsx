import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Test from "./Pages/Test";
import Textfield from "./Components/Textfield/TextField";
import SliderComponent from "./Components/Slider/Slider";
import WalletCard from "./Components/WalletCard/WalletCard";
import Faq from "./Components/Faq/Faq";

const App: React.FC = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Test />} />
        <Route
          path="/slider"
          element={<SliderComponent value={0} children={[]} />}
        />
        <Route path="/faq" element={<Faq />} />
        <Route path="/walletcard" element={<WalletCard ETH={10.78} />} />
        <Route path="/Textfield" element={<Textfield />} />
      </Routes>
    </div>
  );
};

export default App;
