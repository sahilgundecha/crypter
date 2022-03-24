import { useState, FC } from "react";
import "./bidcard.css";
import bidIcon from "../../Assets/images/bidIcon.svg";
import candleStick from "../../Assets/images/candleStick.svg";
import {
  CardMedia,
  CardContent,
  Box,
  Card,
  Typography,
  Divider,
  Paper,
} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import PlaceaBidModals from "../Modals/PlaceaBidModal/PlaceaBidModals";
import { Link } from "react-router-dom";

interface Props {
  cardData: any;
  whiteCard?: boolean;
}

const Bidcard: FC<Props> = ({ cardData }, props) => {
  const [pressed, setPressed] = useState<boolean>(false);
  const pressing = () => {
    setPressed(!pressed);
  };
  return (
    <>
      {cardData.whiteCard ? (
        <Paper
          sx={{
            boxShadow: "0px 64px 64px #1F2F461F",
            borderRadius: "20px",
            padding: " 0px",
            margin: "25px 5px",
          }}
          className="cardPaper"
        >
          <Card
            style={{
              boxShadow: "none",
              width: "max-content",
            }}
            className="withMargin"
          >
            <Box className="boxwrap">
              <CardMedia
                component="img"
                image={cardData.mainImg}
                alt="green iguana"
                className="cardmedia"
              />
            </Box>
            <Box>
              <PlaceaBidModals bidcard={true} logo={bidIcon} />
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
            <Link to="/item" className="linkUnderline">
              <CardContent
                sx={{
                  display: "flex",
                  flexDirection: "row",

                  justifyContent: "space-between",
                  padding: "5px",
                  cursoe: "pointer",
                }}
              >
                <Box>
                  <Typography variant="h6" color="black">
                    {cardData.artName}
                  </Typography>
                </Box>
                <Box>
                  <Typography variant="caption" className="greenText">
                    {cardData.ETH} ETH
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
                <Box>
                  {cardData.creator.map((curr: any, index: number) => (
                    <img src={curr} className="icons" key={index} />
                  ))}
                </Box>

                <Typography variant="caption" className="inStock">
                  {cardData.inStock} in stock
                </Typography>
              </CardContent>
              <Box>
                <Divider />
              </Box>
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
                    <span className="eth">{cardData.highestBid} ETH</span>
                  </Typography>
                </Box>

                <Typography variant="caption" className="newBid">
                  {cardData.bidType}
                </Typography>
              </CardContent>
            </Link>
          </Card>
        </Paper>
      ) : (
        <Card
          style={{
            boxShadow: "none",
            width: "max-content",
          }}
          className="withMargin"
        >
          <Box className="boxwrap">
            <CardMedia
              component="img"
              image={cardData.mainImg}
              alt="green iguana"
              className="cardmedia"
            />
          </Box>
          <Box>
            <PlaceaBidModals bidcard={true} logo={bidIcon} />
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
          <Link to="/item" className="linkUnderline">
            <CardContent
              sx={{
                display: "flex",
                flexDirection: "row",

                justifyContent: "space-between",
                padding: "5px",
                cursoe: "pointer",
              }}
            >
              <Box>
                <Typography variant="h6" color="black">
                  {cardData.artName}
                </Typography>
              </Box>
              <Box>
                <Typography variant="caption" className="greenText">
                  {cardData.ETH} ETH
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
              <Box>
                {cardData.creator.map((curr: any, index: number) => (
                  <img src={curr} className="icons" key={index} />
                ))}
              </Box>

              <Typography variant="caption" className="inStock">
                {cardData.inStock} in stock
              </Typography>
            </CardContent>
            <Box>
              <Divider />
            </Box>
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
                  <span className="eth">{cardData.highestBid} ETH</span>
                </Typography>
              </Box>

              <Typography variant="caption" className="newBid">
                {cardData.bidType}
              </Typography>
            </CardContent>
          </Link>
        </Card>
      )}
    </>
  );
};

export default Bidcard;
