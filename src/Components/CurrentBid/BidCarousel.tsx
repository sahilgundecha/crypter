import React, { FC } from "react";
import { Link } from "react-router-dom";
import Carousel from "react-elastic-carousel";
import CurrentBidData from "../../DB/CurrentBid/CurrentBidArray";
import { Button, Container, Box, Typography } from "@mui/material";
import ButtonComponent from "../ButtonComponent/ButtonComponent";
import "./CurrentBid.css";
import leftArrow from "../../Assets/images/Left.svg";
import rightArrow from "../../Assets/images/RightArrow.svg";
import CurrentBid from "./CurrentBid";

interface forArrow {
  type?: any;
  onClick?: any;
  isEdge?: any;
}

const BidCarousel = (props: any) => {
  const handleDiscover = () => {
    window.location.href = "/searchfilter";
  };
  const myArrow: FC<forArrow> = ({ type, onClick, isEdge }) => {
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
    <>
      <Container
        maxWidth={false}
        sx={{ margin: "60px 0px", textAlign: "center", width: "100%" }}
      >
        <Box sx={{ textAlign: "center" }}>
          <Typography variant="subtitle2" component="div" className="headOne">
            CREATE, EXPLORE, & COLLECT DIGITAL ART NFTS.
          </Typography>
          <Typography variant="h3" component="div" className="headText">
            The new creative economy.
          </Typography>
          <Box>
            <Link to="/search-filter" className="linkUnderline">
              <ButtonComponent
                styleType="outline"
                classNames="headButton"
                btnColor="#23262F"
              >
                Start your search
              </ButtonComponent>
            </Link>
          </Box>
        </Box>
      </Container>
      <Carousel
        itemsToShow={1}
        isRTL={false}
        pagination={false}
        renderArrow={myArrow}
        className={props.className ? props.className : "carouselWrapper"}
      >
        {CurrentBidData.map((itm) => (
          // <CurrentBid bidData={itm} key={itm.id} />
          <CurrentBid bidData={itm} key={itm.id} />
        ))}
      </Carousel>
    </>
  );
};

export default BidCarousel;
