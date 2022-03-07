import React from "react";
import Carousel from "react-elastic-carousel";
import CurrentBidData from "./CurrentBidArray";
import CurrentBid from "./CurrentBid";
import { Button } from "@mui/material";
import "./CurrentBid.css";
import leftArrow from "../../Assets/images/Left.svg";
import rightArrow from "../../Assets/images/RightArrow.svg";

interface forArrow {
  type?: any;
  onClick?: any;
  isEdge?: any;
}

const BidCarousel = (props: any) => {
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
      itemsToShow={1}
      isRTL={false}
      // breakPoints={breakPoints}
      pagination={false}
      renderArrow={myArrow}
      className={props.className ? props.className : "carouselWrapper"}
    >
      {CurrentBidData.map((itm) => (
        <CurrentBid bidData={itm} key={itm.id} />
      ))}
    </Carousel>
  );
};

export default BidCarousel;
