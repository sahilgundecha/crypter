import { FC } from "react";
import Bidcard from "./Bidcard";
import Data from "../../DB/BidCard/BidcardArray";
import Carousel from "react-elastic-carousel";
import { Button, Container, Typography, Box } from "@mui/material";
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
interface forArrow {
  type?: any;
  onClick?: any;
  isEdge?: any;
}
const Carosel = () => {
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
      <Container maxWidth="xl">
        <Box sx={{ marginY: "60px", marginLeft: "30px" }}>
          <Typography
            variant="h3"
            gutterBottom
            component="div"
            sx={{ fontWeight: "bold" }}
          >
            Hot bid
          </Typography>
        </Box>
      </Container>
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
    </>
  );
};

export default Carosel;
