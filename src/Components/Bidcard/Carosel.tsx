import React, { Component } from "react";
import Bidcard from "./Bidcard";
import Data from "./bidcardArray";
import { bidDataProps } from "./bidcardArray";
import Carousel from "react-material-ui-carousel";

// interface bidDataProps {
//   userData: {
//     mainImg: string;
//     artName: string;
//     ETH: number;
//     instock: number;
//     highestBid: number;
//     creatorArray: string;
//     bidType: string;
//     creatorList?: creatorArray[];
//   }[];
// }

// type creatorArray = {
//   creators: string;
// };
const carosel = () => {
  return <Carousel></Carousel>;
};

export default carosel;
