
import React from 'react'
import Carousel from 'react-multi-carousel'
import Carosel from '../../Components/Bidcard/Carosel'
import { CradCollection } from '../../Components/CardCollection/CradCollection'
import CreatorsBid from '../../Components/CreatorsBid/CreatorsBid'
import CrypterEnd from '../../Components/CrypterEnd/CrypterEnd'
import BidCarousel from '../../Components/CurrentBid/BidCarousel'
import SellerBuyerCard from '../../Components/SellerBuyerCard/SellerBuyerCard'
import Discover from '../DiscoverHomePage/Discover'

const Crypter:React.FC = () => {
  return (
    <>
  
         <BidCarousel />
         <CreatorsBid />
         <SellerBuyerCard />
          <Carosel />
          <CradCollection />
          <Discover />
         <CrypterEnd />

    </>
  )
}
export default Crypter;
