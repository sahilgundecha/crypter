import React from "react";
import { useState } from "react";
import "../Bidcard/bidcard.css";
import {
  Box,
  Typography,
  Divider,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Paper,
  Button,
} from "@mui/material";

import bidImg from "../../Assets/images/bidImg.png";
import creator from "../../Assets/images/creatorImg.png";
import bidIcon from "../../Assets/images/bidIcon.svg";
import candleStick from "../../Assets/images/candleStick.svg";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import Data from "../Bidcard/bidcardArray";

interface cardProps {
  colData: {
    cardIt: {
      id: number;
      mainImg: string;
      artName: string;
      ETH: number;
      inStock: number;
      highestBid: number;
      bidType: string;
      creatorList?: any;
    }[];
  };
}
const SearchFilterCard = () => {
  const [pressed, setPressed] = useState<boolean>(false);
  const pressing = () => {
    setPressed(!pressed);
  };
  return (
    <>
      {Data.map((item) => {
        return (
          <>
            <Grid item md={4}>
              <Paper>
                <Card
                  style={{
                    boxShadow: "none",
                    width: "max-content",
                  }}
                  className="cardmedia1"
                >
                  <Box className="boxwrap">
                    <CardMedia
                      component="img"
                      image={item.mainImg}
                      alt="green iguana"
                      className="cardmedia"
                    />
                  </Box>
                  <Box>
                    <Button variant="contained" className="mybutton">
                      Place a bid{" "}
                      <img src={bidIcon} alt="icon" className="bigiImg" />
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
                        <FavoriteBorderIcon
                          className="heart"
                          onClick={pressing}
                        />
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
                        {item.artName}
                      </Typography>
                    </Box>
                    <Box>
                      <Typography variant="caption" className="greenText">
                        {item.ETH} ETH
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
                      {item.inStock} in stock
                    </Typography>
                  </CardContent>
                  <Divider sx={{ margin: "5px" }} />
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
                        <span className="eth">{item.highestBid} ETH</span>
                      </Typography>
                    </Box>

                    <Typography variant="caption" className="newBid">
                      {item.bidType}
                    </Typography>
                  </CardContent>
                </Card>
              </Paper>
            </Grid>
          </>
        );
      })}
    </>
  );
};

export default SearchFilterCard;
