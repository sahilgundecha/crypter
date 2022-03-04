import React, { Component, useState } from "react";
import Bidcard from "./Bidcard";
import Data from "./bidcardArray";
import consts from "react-elastic-carousel";
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
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
  { width: 1500, itemsToShow: 4 },
];

const Carosel = () => {
  function myArrow({ type, onClick, isEdge }: any) {
    const pointer =
      type === consts.PREV ? (
        <img src={rightArrow} className="leftarrow" />
      ) : (
        <img src={leftArrow} className="rightarrow" />
      );
    return (
      <Button onClick={onClick} disabled={isEdge}>
        {pointer}
      </Button>
    );
  }

  // function chnageArrow() {
  //   const leftArrow: any = document.querySelector(".rec-arrow-left");
  //   leftArrow.innerHTML = "<img src={leftArrow} className='rightarrow' />";
  // }
  // chnageArrow();
  return (
    <Carousel
      itemsToShow={4}
      // isRTL={false}
      breakPoints={breakPoints}
      pagination={false}
      // renderArrow={myArrow}
    >
      {Data.map((item, index) => (
        <Bidcard cardData={item} key={item.id} />
      ))}
    </Carousel>
  );
};

export default Carosel;
