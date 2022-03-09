import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Test from "./Pages/Test";
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
import CurrentBid from "./Components/CurrentBid/CurrentBid";
import SearchFilter from "./Components/SearchFilterPage/SearchFilter";
import Modals from "./Components/Modals/BidModal/Modals";
import DilogueBox from "./Components/Modals/DilogueBox/DilogueBox";
import Item from "./Components/Item/Item";
import BidCarousel from "./Components/CurrentBid/BidCarousel";
import Discover from "./Pages/DiscoverHomePage/Discover";
import Remove from "./Components/Modals/Remove/Remove";
import Transfer from "./Components/Modals/Transfer/Transfer";
import BurnToken from "./Components/Modals/BurnToken/BurnToken";
import Report from "./Components/Modals/Report/Report";
import FooterComponent from "./Components/FooterComponent/Footer";
import PutOnSale2 from "./Components/Modals/PutOnSale/PutOnSale2";
import FollowModal from "./Components/Modals/FollowModal/FollowModal";
import NavbarComponent from "./Components/Navbar/NavbarComponent";
import { AcceptBid } from "./Components/Modals/FollowModal/AcceptBid";
import { ConnectWallet } from "./Pages/ConnectWallet/ConnectWallet";
import WalletName from "./Pages/ConnectWallet/WalletName";
import CreatorsBid from "./Components/CreatorsBid/CreatorsBid";
import PutOnSale1 from "./Components/Modals/PutOnSale/PutOnSale1";
import PutOnSale3 from "./Components/Modals/PutOnSale/PutOnSale3";
import WhiteCards from "./Components/WhiteCards/WhiteCards";
import SellerBuyerCard from "./Components/SellerBuyerCard/SellerBuyerCard";
import SellerBuyerCarousel from "./Components/SellerBuyerCard/SellerBuyerCarousel";

const App: React.FC = () => {
  return (
    <div className="xyz">
      <NavbarComponent />
      <Routes>
        <Route path="/" element={<Test />} />
        <Route
          path="/slider"
          element={<SliderComponent value={0} children={[]} />}
        />
        <Route path="/faq" element={<Faq />} />
        <Route path="/item" element={<Item />} />
        <Route path="/walletcard" element={<WalletCard ETH={10.78} />} />
        <Route path="/Textfield" element={<Textfield />} />
        <Route path="UsersCard" element={<UsersCard />} />
        <Route path="NoResultsPage" element={<NoResultsPage />} />
        <Route path="/SingleCollectible" element={<SingleCollectible />} />
        <Route path="searchbar" element={<Searchbar />} />
        {/* <Route path="dropdown" element={<Dropdown />} /> */}
        <Route path="carosel" element={<Carosel />} />
        <Route path="followersCard" element={<FollowersCard />} />
        <Route path="/NotificationDisplay" element={<NotificationD />} />
        <Route path="/uploadPage" element={<Upload />} />
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
    
        <Route path="/ConnectWallet" element={<ConnectWallet />} />
        <Route path="/Follow" element={<FollowModal />} />
        <Route path="/Creators" element={<CreatorsBid />} />
        <Route path="/PutOnSale2" element={<PutOnSale2 />} />
        <Route path="/PutOnSale1" element={<PutOnSale1 />} />
        <Route path="/PutOnSale3" element={<PutOnSale3 />} />
        <Route path="/SellerBuyerCard" element={<SellerBuyerCard />} />

        <Route
          path="/modals"
          element={<Modals smalltext1={""} smalltext2={""} smalltext3={""} />}
        />
        <Route path="/DilogueBox" element={<DilogueBox />} />
        <Route path="/Accept" element={<AcceptBid />} />
        <Route path="/SellerBuyerCarousel" element={<SellerBuyerCarousel />} />
      </Routes>
      <FooterComponent />
    </div>
  );
};

export default App;
