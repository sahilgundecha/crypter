import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Test from "./Pages/Test";
import Textfield from "./Components/Textfield/TextField";
import { FollowersCard } from "./Components/FollowersCard/FollowersCard";
import SliderComponent from "./Components/Slider/Slider";
import { NotificationD } from "./Components/Notification/NotificationD";
import Upload from "./Pages/Upload/Upload";
import { CradCollection } from "./Components/CardCollection/CradCollection";

const App: React.FC = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Test />} />
        <Route path="/slider" element={<SliderComponent />} />
        <Route path="/Textfield" element={<Textfield />} />
        <Route path="followersCard" element={<FollowersCard/>}/>
        <Route path="/NotificationDisplay" element={<NotificationD />}/>
        <Route path="/uploadPage" element={<Upload />}/>
        <Route path="/CardCollection" element={<CradCollection />}/>
      </Routes>
    </div>
  );
};

export default App;
