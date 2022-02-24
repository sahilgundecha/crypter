import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Test from "./Pages/Test";
import Textfield from "./Components/Textfield/TextField";
import SliderComponent from "./Components/Slider/Slider";

const App: React.FC = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Test />} />
        <Route path="/slider" element={<SliderComponent />} />
        <Route path="/Textfield" element={<Textfield />} />
      </Routes>
    </div>
  );
};

export default App;
