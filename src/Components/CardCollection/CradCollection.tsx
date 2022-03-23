import { FC } from "react";
import "./CardCollection.css";
import Carousel from "react-elastic-carousel";
import Data from "../../DB/CardCollection/CardCollectionArray";
import { Container, Box, Card, Button, Typography } from "@mui/material";
import leftArrow from "../../Assets/images/Left.svg";
import { Link } from "react-router-dom";
import rightArrow from "../../Assets/images/RightArrow.svg";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 480, itemsToShow: 1 },
  { width: 550, itemsToShow: 1 },
  { width: 768, itemsToShow: 2 },
  { width: 1024, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
  { width: 1500, itemsToShow: 4 },
];

interface Props {
  cardData: any;
}
interface forArrow {
  type?: any;
  onClick?: any;
  isEdge?: any;
}

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
        className="widthC"
      >
        {Data.map((item, index) => (
          <CardCollect cardData={item} key={item.id} />
        ))}
      </Carousel>
    </>
  );
};
export const CardCollect: FC<Props> = ({ cardData }) => {
  return (
    <>
      <Container>
        <Card
          key={cardData.id}
          sx={{
            textAlign: "center",
            boxShadow: "none",
            cursor: "pointer",
            margin: "0px 10px"
          }}
        >
          <Link to="/profile-page" className="linkUnderline">
            <img className="changewidth1" src={cardData.mainImg} />
          </Link>
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
              pagination={false}
              renderArrow={myArrow}
            >
              <Link to="/profile-page" className="linkUnderline">
                <img className="changewidth1 cWidth" src={cardData.img1} />
              </Link>
              <Link to="/profile-page" className="linkUnderline">
                <img className="changewidth1 cWidth" src={cardData.img2} />
              </Link>
              <Link to="/profile-page" className="linkUnderline">
                <img className="changewidth1 cWidth" src={cardData.img3} />
              </Link>

              <Link to="/profile-page" className="linkUnderline">
                <img className="changewidth1 cWidth" src={cardData.img1} />
              </Link>
              <Link to="/profile-page" className="linkUnderline">
                <img className="changewidth1 cWidth" src={cardData.img2} />
              </Link>
              <Link to="/profile-page" className="linkUnderline">
                <img className="changewidth1 cWidth" src={cardData.img3} />
              </Link>
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
              className="autName"
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
          > <span className="rowBox">
             <img src={cardData.authorImg} />
            <Typography sx={{ fontSize: "14px" }} component="p" >
              By {cardData.authorName}
            </Typography></span>
            <Button variant="outlined" className="autItem">{cardData.item} items</Button>
          </Box>
        </Card>
      </Container>
    </>
  );
};
