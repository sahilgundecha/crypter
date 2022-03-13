import React, { Component, useState } from "react";
import WhiteCards from "../WhiteCards/WhiteCards";
import Data from "./SellerBuyersArray";
import Carousel from "react-elastic-carousel";
import { Button } from "@mui/material";
import leftArrow from "../../Assets/images/Left.svg";
import rightArrow from "../../Assets/images/RightArrow.svg";

interface cardProps {
  name?: string;
  numbers?: string;
  img1?: string;
  userimgg?: string;
  ETHnum: string | number;
}
const breakPoints2 = [
  { width: 1, itemsToShow: 1},
  { width: 480, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 5 },
  { width: 1500, itemsToShow: 5},
  { width: 2570, itemsToShow: 5 },
];
interface forArrow {
  type?: any;
  onClick?: any;
  isEdge?: any;
}
const SellerBuyerCarosel = () => {
  const myArrow: React.FC<forArrow> = ({ type, onClick, isEdge }) => {
    // console.log("test", consts);
    const pointer: object =
      type === "PREV" ? (
        <img src={leftArrow} className="leftarrow" />
      ) : (
        <img src={rightArrow} className="rightarrow" />
      );
    return (
      <Button onClick={onClick} disabled={isEdge}>
        {pointer}
      </Button>
    );
  };

  return (
    <Carousel
      
      isRTL={false}
      breakPoints={breakPoints2}
      pagination={false}
      renderArrow={myArrow}
    >
      {Data.map((item, index) => (
        <WhiteCards whitecardProps={item} key={index} />
      ))}
    </Carousel>
  );
};

export default SellerBuyerCarosel;
