import React from "react";
import { useState } from "react";
import "./bidcard.css";
import Box from "@mui/material/Box";
import { CardMedia, CardContent, CardHeader } from "@mui/material";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

import MainImg from "../../Assets/images/bidImg.png";
import bidIcon from "../../Assets/images/candleStick.svg";
import candleStick from "../../Assets/images/candleStick.svg";

// interface press {
//   pressed: boolean;
//   setPressed: React.Dispatch<React.SetStateAction<boolean>>;
// }
const Bidcard = (props: any) => {
  const [pressed, setPressed] = useState<boolean>(false);
  const pressing = () => {
    setPressed(!pressed);
  };
  return (
    <Card
      style={{ boxShadow: "none", width: "max-content" }}
      className="cardmedia1"
    >
      <Box className="boxwrap">
        <CardMedia
          component="img"
          image={MainImg}
          alt="green iguana"
          className="cardmedia"
        />
      </Box>
      <Box>
        <Button variant="contained" className="mybutton">
          Place a bid <img src={bidIcon} alt="icon" className="bigiImg" />
        </Button>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          padding: "7px",
        }}
        className="heartPurchase"
      >
        <Typography className="purchase">PURCHASING !</Typography>
        {pressed ? (
          <FavoriteIcon
            className="heart"
            onClick={pressing}
            style={{ color: "#EF466F" }}
          />
        ) : (
          <FavoriteBorderIcon className="heart" onClick={pressing} />
        )}
      </Box>
      <CardContent
        sx={{
          display: "flex",
          flexDirection: "row",

          justifyContent: "space-between",
          padding: "5px",
        }}
      >
        <Typography variant="subtitle1" color="black">
          {props.artName}
        </Typography>
        <Typography variant="caption" className="greenText">
          {props.ETH}
        </Typography>
      </CardContent>
      <CardContent
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          padding: "5px",
        }}
      >
        {/* <Box>
          {CardData.creator.map((cur) => {
            return <img src={cur} className="icons" />;
          })}
        </Box> */}

        <Typography variant="caption" className="inStock">
          {props.inStock}
        </Typography>
      </CardContent>
      <CardContent
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          padding: "5px",
        }}
      >
        <Typography variant="caption" className="bid">
          <img
            src={candleStick}
            alt="{creatorImg}"
            style={{ padding: "5px !important" }}
          />
          Highest bid <span className="eth">{props.highestBid}</span>
        </Typography>
        <Typography variant="caption" className="newBid">
          {props.bidType} 🔥
        </Typography>
      </CardContent>
    </Card>
  );
};

export default Bidcard;
