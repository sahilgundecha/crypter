import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Test from "./Pages/Test";
import Textfield from "./Components/Textfield/TextField";
import { FollowersCard } from "./Components/FollowersCard/FollowersCard";
import SliderComponent from "./Components/Slider/Slider";
import Searchbar from "./Components/Searchbar/Searchbar";
import Dropdown from "./Components/Dropdown/Dropdown";
import Carosel from "./Components/Bidcard/Carosel";

const App: React.FC = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Test />} />
        <Route path="/slider" element={<SliderComponent />} />
        <Route path="/Textfield" element={<Textfield />} />
        <Route path="followersCard" element={<FollowersCard />} />
        <Route path="searchbar" element={<Searchbar />} />
        <Route path="dropdown" element={<Dropdown />} />
        <Route path="carosel" element={<Carosel />} />
      </Routes>
    </div>
  );
};

export default App;
