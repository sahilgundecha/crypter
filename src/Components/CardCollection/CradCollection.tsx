import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import "./CardCollection.css";
import Carousel from "react-elastic-carousel";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Container } from "@mui/material";
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
    display:'flex',
    flexDirection:'row',
    padding:'10px'
}
const styleEnd = 
    {
    display:'flex',
    justifyContent:'end',
    marginLeft:'90px'
}
const styleFlex = {
    display:'flex',
    justifyContent:"space-between"
  }

    interface Props { 
      cardData: any;
    }
export const CradCollection = () => {
  return (
    <>
    <Carousel
      itemsToShow={3}
      isRTL={false}
      breakPoints={breakPoints}
      pagination={false}
      // renderArrow={myArrow}
    > 
    {Data.map((item,index) => (
        <CardCollect cardData={item} key={item.id} />

      ))}
  </Carousel>
  </>
  )
}
export const CardCollect: React.FC<Props> = ({ cardData }) => {
  return (
    <>
    <Container>
           
    <Card  key={cardData.id}
      sx={{
        textAlign: "center",
        boxShadow: "none",
        cursor:'pointer'
      }}
      onClick={()=>{window.location.href ='/profilepage'}}
    >
      <img className="changeWidth1" src={cardData.mainImg} />

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
          // renderArrow={myArrow}
>
          <img className="changeWidth1" src={cardData.img1} />
          <img className="changeWidth1" src={cardData.img2}  />
          <img className="changeWidth1" src={cardData.img3} />
          <img className="changeWidth1" src={cardData.img1} />
          <img className="changeWidth1" src={cardData.img2} />
          <img className="changeWidth1" src={cardData.img3} /> 
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
        <Typography
          sx={{ fontSize: "14px" }}
          variant="h5"
          component="p"
        >
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


