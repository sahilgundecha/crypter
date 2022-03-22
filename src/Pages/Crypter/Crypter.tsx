import { FC } from "react";
import Carosel from "../../Components/Bidcard/Carosel";
import { CradCollection } from "../../Components/CardCollection/CradCollection";
import CreatorsBid from "../../Components/CreatorsBid/CreatorsBid";
import CrypterEnd from "../../Components/CrypterEnd/CrypterEnd";
import BidCarousel from "../../Components/CurrentBid/BidCarousel";
import SellerBuyerCard from "../../Components/SellerBuyerCard/SellerBuyerCard";
import Discover from "../DiscoverHomePage/Discover";
import "./Crypter.css"
import { Container, Box } from "@mui/material";

const Crypter: FC = () => {
  return (
    <>
      <Box className="crypterBox1">
        <BidCarousel />
        <CreatorsBid />
      </Box>
      <SellerBuyerCard />
      <Box  className="crypterBox1">
        <Carosel />
        <CradCollection />
        <Discover />
        <CrypterEnd />
      </Box>
    </>
  );
};
export default Crypter;
