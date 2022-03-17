import { FC } from "react";
import Carosel from "../../Components/Bidcard/Carosel";
import { CradCollection } from "../../Components/CardCollection/CradCollection";
import CreatorsBid from "../../Components/CreatorsBid/CreatorsBid";
import CrypterEnd from "../../Components/CrypterEnd/CrypterEnd";
import BidCarousel from "../../Components/CurrentBid/BidCarousel";
import SellerBuyerCard from "../../Components/SellerBuyerCard/SellerBuyerCard";
import Discover from "../DiscoverHomePage/Discover";
import { Container, Box } from "@mui/material";

const Crypter: FC = () => {
  return (
    <>
      <Box sx={{ margin: "0px 60px" }}>
        <BidCarousel />
        <CreatorsBid />
      </Box>
      <SellerBuyerCard />
      <Box sx={{ margin: "0px 50px" }}>
        <Carosel />
        <CradCollection />
        <Discover />
        <CrypterEnd />
      </Box>
    </>
  );
};
export default Crypter;
