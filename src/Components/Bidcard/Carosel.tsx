import React, { Component, useState } from "react";
import Bidcard from "./Bidcard";
import Data from "./bidcardArray";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

interface cardProps {
  colData: {
    cardIt: {
      id: number;
      mainImg: string;
      artName: string;
      ETH: number;
      inStock: number;
      highestBid: number;
      bidtype: string;
      creatorList?: any;
    }[];
  };
}
const Carosel = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 4,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  // const [bidArray, setBidArray] = useState(Data);
  return (
    <div>
      <Bidcard colData={Data} />;
    </div>
  );
};

export default Carosel;
