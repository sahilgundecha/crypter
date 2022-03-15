import { FC } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Textfield from "./Components/Textfield/TextField";
import { FollowersCard } from "./Components/FollowersCard/FollowersCard";
import SliderComponent from "./Components/Slider/Slider";
import { UsersCard } from "./Components/UsersCard/UsersCard";
import NoResultsPage from "./Pages/NoResultsPage/NoResultsPage";
import WalletCard from "./Components/WalletCard/WalletCard";
import Faq from "./Components/Faq/Faq";
import Searchbar from "./Common/Searchbar/Searchbar";
import Dropdown from "./Common/Dropdown/Dropdown";
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
import FooterComponent from "./Common/FooterComponent/Footer";
import FollowModal from "./Components/Modals/FollowModal/FollowModal";
import NavbarComponent from "./Common/Navbar/NavbarComponent";
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
import MultipleCollectible from "./Pages/SingleCollectible/MultipleCollectible";

const App: FC = () => {
  return (
    <div>
      <NavbarComponent />
      <Routes>
        <Route path="/" element={<Crypter />} />
        <Route path="/slider" element={<SliderComponent />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/item" element={<Item />} />
        <Route path="/textfield" element={<Textfield />} />
        <Route path="/users-card" element={<UsersCard />} />
        <Route path="/no-results-page" element={<NoResultsPage />} />
        <Route path="/single-collectible" element={<SingleCollectible />} />
        <Route path="/searchbar" element={<Searchbar />} />
        <Route path="/carosel" element={<Carosel />} />
        <Route path="/followers-card" element={<FollowersCard />} />
        <Route path="/notification-display" element={<NotificationD />} />
        <Route path="/upload" element={<Upload />} />
        <Route path="/card-collection" element={<CradCollection />} />
        <Route path="/profile-page" element={<ProfilePage />} />
        <Route path="/activity" element={<Activity />} />
        <Route path="/search-filter" element={<SearchFilter />} />
        <Route path="/home-page" element={<BidCarousel />} />
        <Route path="/current-bid" element={<BidCarousel />} />
        <Route path="/discover" element={<Discover />} />
        <Route path="/wallet-name" element={<WalletName />} />
        <Route path="/remove" element={<Remove />} />
        <Route path="/transfer" element={<Transfer />} />
        <Route path="/burn" element={<BurnToken />} />
        <Route path="/report" element={<Report />} />
        <Route path="/crypter" element={<Crypter />} />
        <Route path="/connect-wallet" element={<ConnectWallet />} />
        <Route path="/crypter-end" element={<CrypterEnd />} />
        <Route path="/follow" element={<FollowModal />} />
        <Route path="/creators" element={<CreatorsBid />} />
        <Route path="/drop-down" element={<Dropdown item1="test" />} />

        <Route path="/multiple-collectible" element={<MultipleCollectible />} />

        <Route path="/seller-buyer-card" element={<SellerBuyerCard />} />

        <Route path="/change-price" element={<ChangePrice />} />
        <Route path="/accept" element={<AcceptBid />} />
        <Route path="/edit-profile-page" element={<EditProfilePage />} />
        <Route
          path="/seller-buyer-carousel"
          element={<SellerBuyerCarousel />}
        />
      </Routes>
      <FooterComponent />
    </div>
  );
};

export default App;
