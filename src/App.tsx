import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Textfield from "./Components/Textfield/TextField";
import { FollowersCard } from "./Components/FollowersCard/FollowersCard";
import SliderComponent from "./Components/Slider/Slider";
import { UsersCard } from "./Components/UsersCard/UsersCard";
import NoResultsPage from "./Pages/NoResultsPage/NoResultsPage";
import WalletCard from "./Components/WalletCard/WalletCard";
import Faq from "./Components/Faq/Faq";
import Searchbar from "./Components/Searchbar/Searchbar";
import Dropdown from "./Components/Dropdown/Dropdown";
import Carosel from "./Components/Bidcard/Carosel";
import { NotificationD } from "./Components/Notification/NotificationD";
import Upload from "./Pages/Upload/Upload";
import { CradCollection } from "./Components/CardCollection/CradCollection";
import ProfilePage from "./Pages/ProfilePage/ProfilePage";
import SingleCollectible from "./Pages/SingleCollectible/Singlecollectible";
import Activity from "./Pages/Activity/Activity";
import SearchFilter from "./Components/SearchFilterPage/SearchFilter";

import Item from "./Components/Item/Item";
import BidCarousel from "./Components/CurrentBid/BidCarousel";
import Discover from "./Pages/DiscoverHomePage/Discover";
import Remove from "./Components/Modals/Remove/Remove";
import Transfer from "./Components/Modals/Transfer/Transfer";
import BurnToken from "./Components/Modals/BurnToken/BurnToken";
import Report from "./Components/Modals/Report/Report";
import FooterComponent from "./Components/FooterComponent/Footer";

import FollowModal from "./Components/Modals/FollowModal/FollowModal";
import NavbarComponent from "./Components/Navbar/NavbarComponent";
import { AcceptBid } from "./Components/Modals/FollowModal/AcceptBid";
import EditProfilePage from "./Pages/EditProfilePage/EditProfilePage";
import { ConnectWallet } from "./Pages/ConnectWallet/ConnectWallet";
import WalletName from "./Pages/ConnectWallet/WalletName";
import CreatorsBid from "./Components/CreatorsBid/CreatorsBid";

import SellerBuyerCard from "./Components/SellerBuyerCard/SellerBuyerCard";
import SellerBuyerCarousel from "./Components/SellerBuyerCard/SellerBuyerCarousel";
import Crypter from "./Pages/Crypter/Crypter";

import ChangePrice from "./Components/Modals/ChangePrice/ChangePrice";

import CrypterEnd from "./Components/CrypterEnd/CrypterEnd";
import SingleCollectible1 from "./Pages/SingleCollectible/SingleCollectible1";

const App: React.FC = () => {
  return (
    <div className="xyz">
      <NavbarComponent />
      <Routes>
        <Route path="/" element={<Crypter />} />
        <Route path="/slider" element={<SliderComponent />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/item" element={<Item />} />

        <Route path="/Textfield" element={<Textfield />} />
        <Route path="UsersCard" element={<UsersCard />} />
        <Route path="NoResultsPage" element={<NoResultsPage />} />
        <Route path="/SingleCollectible" element={<SingleCollectible />} />
        <Route path="searchbar" element={<Searchbar />} />
        <Route path="carosel" element={<Carosel />} />
        <Route path="followersCard" element={<FollowersCard />} />
        <Route path="/NotificationDisplay" element={<NotificationD />} />
        <Route path="/Upload" element={<Upload />} />
        <Route path="/CardCollection" element={<CradCollection />} />
        <Route path="/ProfilePage" element={<ProfilePage />} />
        <Route path="/Activity" element={<Activity />} />
        <Route path="/searchfilter" element={<SearchFilter />} />
        <Route path="/homepage" element={<BidCarousel />} />
        <Route path="/currentbid" element={<BidCarousel />} />
        <Route path="/discover" element={<Discover />} />
        <Route path="WalletName" element={<WalletName />} />
        <Route path="/Remove" element={<Remove />} />
        <Route path="/Transfer" element={<Transfer />} />
        <Route path="/Burn" element={<BurnToken />} />
        <Route path="/Report" element={<Report />} />
        <Route path="/Crypter" element={<Crypter />} />
        <Route path="/ConnectWallet" element={<ConnectWallet />} />
        <Route path="/CrypterEnd" element={<CrypterEnd />} />
        <Route path="/Follow" element={<FollowModal />} />
        <Route path="/Creators" element={<CreatorsBid />} />
        <Route path="/dropdown" element={<Dropdown item1="test" />} />

        <Route path="/Single1" element={<SingleCollectible1 />} />

        <Route path="/SellerBuyerCard" element={<SellerBuyerCard />} />

        <Route path="/ChangePrice" element={<ChangePrice />} />
        <Route path="/Accept" element={<AcceptBid />} />
        <Route path="/EditProfilePage" element={<EditProfilePage />} />
        <Route path="/SellerBuyerCarousel" element={<SellerBuyerCarousel />} />
      </Routes>
      <FooterComponent />
    </div>
  );
};

export default App;
