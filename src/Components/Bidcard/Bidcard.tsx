import React from "react";
import { useState } from "react";
import "./bidcard.css";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import bidImg from "../../Assets/images/bidImg.png";
import creator from "../../Assets/images/creatorImg.png";
import bidIcon from "../../Assets/images/bidIcon.svg";
import candleStick from "../../Assets/images/candleStick.svg";
import { CardMedia, CardContent, CardHeader } from "@mui/material";
import Button from "@mui/material/Button";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

const Bidcard = () => {
  const [pressed, setPressed] = useState<boolean>(false);
  const pressing = () => {
    setPressed(!pressed);
  };
  return (
    <div className="temp">
      <Card
        style={{ boxShadow: "none", width: "max-content" }}
        className="cardmedia1"
      >
        <Box className="boxwrap">
          <CardMedia
            component="img"
            image={bidImg}
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
          <Box>
            <Typography className="purchase">PURCHASING !</Typography>
          </Box>
          <Box>
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
        </Box>
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "row",

            justifyContent: "space-between",
            padding: "5px",
          }}
        >
          <Box>
            <Typography variant="h6" color="black">
              {/* {CardData.artName} */}Amazing digital art
            </Typography>
          </Box>
          <Box>
            <Typography variant="caption" className="greenText">
              {/* {CardData.ETH} */}2.4 ETH
            </Typography>
          </Box>
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

          {/* for test */}
          <img src={creator} alt="" />

          <Typography variant="caption" className="inStock">
            {/* {CardData.inStock} */} 3 in stock
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
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img
              src={candleStick}
              alt="{creatorImg}"
              style={{ marginRight: "5px" }}
            />
            <Typography variant="caption" className="bid">
              Highest bid{" "}
              <span className="eth">{/* {CardData.highestBid} */} 0.04ETH</span>
            </Typography>
          </Box>

          <Typography variant="caption" className="newBid">
            {/* {CardData.bidType} 🔥 */}new Bid 🔥
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default Bidcard;
