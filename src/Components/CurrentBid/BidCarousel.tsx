import React from "react";
import Carousel from "react-elastic-carousel";
import CurrentBidData from "./CurrentBidArray";
import CurrentBid from "./CurrentBid";
import { Button } from "@mui/material";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import ButtonComponent from "../ButtonComponent/ButtonComponent";
import "./BidCloned.css";
import leftArrow from "../../Assets/images/Left.svg";
import rightArrow from "../../Assets/images/RightArrow.svg";
import BidCloned from "./BidCloned";

interface forArrow {
  type?: any;
  onClick?: any;
  isEdge?: any;
}

const BidCarousel = (props: any) => {
  const handleDiscover = () => {
    window.location.href = "/searchfilter";
  };
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
            <ButtonComponent
              styleType="outline"
              classNames="headButton"
              btnColor="#23262F"
              handleClick={handleDiscover}
            >
              Start your search
            </ButtonComponent>
          </Box>
        </Box>
      </Container>
      <Carousel
        itemsToShow={1}
        isRTL={false}
        // breakPoints={breakPoints}
        pagination={false}
        renderArrow={myArrow}
        className={props.className ? props.className : "carouselWrapper"}
      >
        {CurrentBidData.map((itm) => (
          // <CurrentBid bidData={itm} key={itm.id} />
          <BidCloned bidData={itm} key={itm.id} />
        ))}
      </Carousel>
    </>
  );
};

export default BidCarousel;
