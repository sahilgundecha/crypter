import * as React from "react";
import "./CardCollection.css";
import Carousel from "react-elastic-carousel";
import { Container, Box, Card, Button, Typography } from "@mui/material";
import leftArrow from "../../Assets/images/Left.svg";
import rightArrow from "../../Assets/images/RightArrow.svg";
import Data from "./CardArray";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 480, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
  { width: 1500, itemsToShow: 4 },
];
const styleRow = {
  display: "flex",
  flexDirection: "row",
  padding: "10px",
};
const styleEnd = {
  display: "flex",
  justifyContent: "end",
  marginLeft: "90px",
};
const styleFlex = {
  display: "flex",
  justifyContent: "space-between",
};

interface Props {
  cardData: any;
}
interface forArrow {
  type?: any;
  onClick?: any;
  isEdge?: any;
}

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
export const CradCollection = () => {
  return (
    <>
      <Box sx={{ marginY: "50px", marginLeft: "60px" }}>
        <Typography
          variant="h3"
          gutterBottom
          component="div"
          sx={{ fontWeight: "bold" }}
        >
          Hot Collections
        </Typography>
      </Box>
      <Carousel
        itemsToShow={3}
        isRTL={false}
        breakPoints={breakPoints}
        pagination={false}
        renderArrow={myArrow}
      >
        {Data.map((item, index) => (
          <CardCollect cardData={item} key={item.id} />
        ))}
      </Carousel>
    </>
  );
};
export const CardCollect: React.FC<Props> = ({ cardData }) => {
  return (
    <>
      <Container>
        <Card
          key={cardData.id}
          sx={{
            textAlign: "center",
            boxShadow: "none",
            cursor: "pointer",
          }}
        >
          <img
            className="changeWidth1"
            src={cardData.mainImg}
            onClick={() => {
              window.location.href = "/profilepage";
            }}
          />

          <Box
            sx={{
              marginY: "10px",
              display: "flex",
              justifyContent: "space-around",
            }}
          >
            <Carousel
              itemsToShow={3}
              isRTL={false}
              // breakPoints={breakPoints}
              pagination={false}
              renderArrow={myArrow}
            >
              <img
                className="changeWidth1"
                src={cardData.img1}
                onClick={() => {
                  window.location.href = "/profilepage";
                }}
              />
              <img
                className="changeWidth1"
                src={cardData.img2}
                onClick={() => {
                  window.location.href = "/profilepage";
                }}
              />
              <img
                className="changeWidth1"
                src={cardData.img3}
                onClick={() => {
                  window.location.href = "/profilepage";
                }}
              />
              <img
                className="changeWidth1"
                src={cardData.img1}
                onClick={() => {
                  window.location.href = "/profilepage";
                }}
              />
              <img
                className="changeWidth1"
                src={cardData.img2}
                onClick={() => {
                  window.location.href = "/profilepage";
                }}
              />
              <img
                className="changeWidth1"
                src={cardData.img3}
                onClick={() => {
                  window.location.href = "/profilepage";
                }}
              />
            </Carousel>
          </Box>
          <Box>
            <Typography
              sx={{
                fontSize: "24px",
                fontWeight: "bold",
                textAlign: "left",
                marginLeft: "10px",
              }}
              component="p"
            >
              Awesome collections
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              flexDirection: "row",
              margin: "10px",
            }}
          >
            <Typography sx={{ fontSize: "14px" }} variant="h5" component="p">
              <img style={{ marginRight: "10px" }} src={cardData.authorImg} />
              By {cardData.authorName}
            </Typography>
            <Button variant="outlined">{cardData.item} items</Button>
          </Box>
        </Card>
      </Container>
    </>
  );
};
