import { FC, lazy } from "react";
import { Provider } from "react-redux";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import FooterComponent from "./Common/FooterComponent/Footer";
import Crypter from "./Pages/Crypter/Crypter";
import ScrollToTop from "./Components/ScrollTop";
import NavbarComponent from "./Common/Navbar/NavbarComponent";
import { store } from "./redux/store/Store";
import Carosel from "./Components/Bidcard/Carosel";
import Spinner from "./Common/Spinner/Spinner";
const NoResultsPage = lazy(() => import("./Pages/NoResultsPage/NoResultsPage"));
const Faq = lazy(() => import("./Components/Faq/Faq"));
const Upload = lazy(() => import("./Pages/Upload/Upload"));
const ProfilePage = lazy(() => import("./Pages/ProfilePage/ProfilePage"));
const SingleCollectible = lazy(
  () => import("./Pages/SingleCollectible/Singlecollectible")
);
const Activity = lazy(() => import("./Pages/Activity/Activity"));
const SearchFilter = lazy(
  () => import("./Components/SearchFilterPage/SearchFilter")
);
const Item = lazy(() => import("./Components/Item/Item"));
const Discover = lazy(() => import("./Pages/DiscoverHomePage/Discover"));
const EditProfilePage = lazy(
  () => import("./Pages/EditProfilePage/EditProfilePage")
);
const WalletName = lazy(() => import("./Pages/ConnectWallet/WalletName"));
const MultipleCollectible = lazy(
  () => import("./Pages/SingleCollectible/MultipleCollectible")
);
const ConnectWallet = lazy(() => import("./Pages/ConnectWallet/ConnectWallet"));

const App: FC = () => {
  return (
    <Provider store={store}>
      <NavbarComponent />
      <ScrollToTop />
      <Routes>
        <Route path="/connect-wallet" element={<ConnectWallet />} />
        <Route path="/" element={<Crypter />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/item" element={<Item />} />
        <Route path="/no-results-page" element={<NoResultsPage />} />
        <Route path="/single-collectible" element={<SingleCollectible />} />
        <Route path="/carosel" element={<Carosel />} />
        <Route path="/upload" element={<Upload />} />
        <Route path="/profile-page" element={<ProfilePage />} />
        <Route path="/activity" element={<Activity />} />
        <Route path="/search-filter" element={<SearchFilter />} />
        <Route path="/discover" element={<Discover />} />
        <Route path="/wallet-name" element={<WalletName />} />
        <Route path="/crypter" element={<Crypter />} />
        <Route path="/multiple-collectible" element={<MultipleCollectible />} />
        <Route path="/edit-profile-page" element={<EditProfilePage />} />
      </Routes>
      <FooterComponent />
    </Provider>
  );
};

export default App;
