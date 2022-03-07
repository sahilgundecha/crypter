import React, { Component, useState } from "react";
import Bidcard from "./Bidcard";
import Data from "./bidcardArray";
import Carousel from "react-elastic-carousel";
import { Button } from "@mui/material";
import leftArrow from "../../Assets/images/Left.svg";
import rightArrow from "../../Assets/images/RightArrow.svg";

interface cardProps {
  id: number;
  mainImg: string;
  artName: string;
  ETH: number;
  inStock: number;
  highestBid: number;
  bidtype: string;
}
const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 480, itemsToShow: 1 },
  { width: 550, itemsToShow: 1 },
  { width: 768, itemsToShow: 2 },
  { width: 1200, itemsToShow: 3 },
  { width: 1500, itemsToShow: 4 },
];
interface forArrow {
  type?: any;
  onClick?: any;
  isEdge?: any;
}
const Carosel = () => {
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
      itemsToShow={4}
      isRTL={false}
      breakPoints={breakPoints}
      pagination={false}
      renderArrow={myArrow}
    >
      {Data.map((item, index) => (
        <Bidcard cardData={item} key={item.id} />
      ))}
    </Carousel>
  );
};

export default Carosel;
