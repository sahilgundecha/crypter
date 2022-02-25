import React, { Component, useState } from "react";
import Bidcard from "./Bidcard";
import Data from "./bidcardArray";

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
const carosel = () => {
  // const [bidArray, setBidArray] = useState(Data);
  return <Bidcard colData={Data} />;
};

export default carosel;
