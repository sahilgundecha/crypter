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
import { NotificationD } from "./Components/Notification/NotificationD";
import Upload from "./Pages/Upload/Upload";
import { CradCollection } from "./Components/CardCollection/CradCollection";
import SingleCollectible from "./Pages/SingleCollectible/Singlecollectible";
import Activity from "./Pages/Activity/Activity";
import CurrentBid from "./Components/CurrentBid/CurrentBid";
import SearchFilter from "./Components/SearchFilterPage/SearchFilter";

const App: React.FC = () => {
  return (
    <div className="">
      <Routes>
        <Route path="/" element={<Test />} />
        <Route path="/slider" element={<SliderComponent />} />
        <Route path="/Textfield" element={<Textfield />} />
        <Route path="/SingleCollectible" element={<SingleCollectible />}/>
        <Route path="searchbar" element={<Searchbar />} />
        <Route path="dropdown" element={<Dropdown />} />
        <Route path="carosel" element={<Carosel />} />
        <Route path="followersCard" element={<FollowersCard />} />
        <Route path="/NotificationDisplay" element={<NotificationD />} />
        <Route path="/uploadPage" element={<Upload />} />
        <Route path="/CardCollection" element={<CradCollection />} />
        <Route path="/Activity" element={<Activity />} />
        <Route path="/searchfilter" element={<SearchFilter />} />
        <Route path="/currentbid" element={<CurrentBid />} />
      </Routes>
    </div>
  );
};

export default App;
