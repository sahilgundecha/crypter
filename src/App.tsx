import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Test from "./Pages/Test";
import Textfield from "./Components/Textfield/TextField";
import { FollowersCard } from "./Components/FollowersCard/FollowersCard";
import SliderComponent from "./Components/Slider/Slider";
import { UsersCard } from "./Components/UsersCard/UsersCard";

const App: React.FC = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Test />} />
        <Route path="/slider" element={<SliderComponent />} />
        <Route path="/Textfield" element={<Textfield />} />
        <Route path="followersCard" element={<FollowersCard/>}/>
        <Route path="UsersCard" element={<UsersCard/>}/>
      </Routes>
    </div>
  );
};

export default App;
