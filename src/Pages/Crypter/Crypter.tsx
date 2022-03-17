import { FC } from "react";
import Carosel from "../../Components/Bidcard/Carosel";
import { CradCollection } from "../../Components/CardCollection/CradCollection";
import CreatorsBid from "../../Components/CreatorsBid/CreatorsBid";
import CrypterEnd from "../../Components/CrypterEnd/CrypterEnd";
import BidCarousel from "../../Components/CurrentBid/BidCarousel";
import SellerBuyerCard from "../../Components/SellerBuyerCard/SellerBuyerCard";
import Discover from "../DiscoverHomePage/Discover";
import { Container } from "@mui/material";

const Crypter: FC = () => {
  return (
    <>
      <Container>
        <BidCarousel />
        <CreatorsBid />
      </Container>
      <SellerBuyerCard />
      <Container>
        <Carosel />
        <CradCollection />
        <Discover />
        <CrypterEnd />
      </Container>
    </>
  );
};
export default Crypter;
