import {
  Typography,
  Divider,
  Modal,
  Box,
  CardMedia,
  CardContent,
  Card,
} from "@mui/material";

import { useState } from "react";
import img1 from "../../../Assets/images/bidImg.png";
import ButtonComponent from "../../../Common/ButtonComponent/ButtonComponent";
import CancelTwoToneIcon from "@mui/icons-material/CancelTwoTone";
import bidIcon from "../../../Assets/images/bidIcon.svg";
import candleStick from "../../../Assets/images/candleStick.svg";
import creator from "../../../Assets/images/creatorImg.png";
import Button from "@mui/material/Button";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import cross from "../../../Assets/images/cross.svg";


const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 250,
  height:485,
  bgcolor: "background.paper",
  border: "1px solid #000",
  borderRadius: "10px",
  boxShadow: 24,
  p: 4,
};

export default function BasicModal() {
  const [pressed, setPressed] = useState<boolean>(false);
  const pressing = () => {
    setPressed(!pressed);
  };
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [Value, setValue] = useState("14.4");
  const handleValue = (e: any) => {
    setValue(e.target.value);
  };

  return (
    <>
      <Box onClick={handleOpen}>
        <ButtonComponent
          btnColor={"#23262F"}
          styleType={"outline"}
          classNames="buttonStyle1 hidden width300"
        >
          Preview
        </ButtonComponent>
      </Box>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
            <Box sx={{marginBottom:'20px'}}>
        <Box className="crossimg">
            <img onClick={handleClose} width={27} src={cross} alt="img" />
          </Box>
          <Typography variant="p" className="font2">
            Preview
          </Typography>
          </Box>
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
                image={img1}
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
                  Sally Fadel
                </Typography>
              </Box>
              <Box>
                <Typography variant="caption" className="greenText">
                  161 ETH
                </Typography>
              </Box>
            </CardContent>
            <CardContent
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                padding: "13px 0px",
              }}
            >
              <img src={creator} alt="" />

              <Typography variant="caption" className="inStock">
                5 in stock
              </Typography>
            </CardContent>
            <Divider textAlign="right" orientation="horizontal"></Divider>
            <CardContent
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                padding: "13px 0px",
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
                  Highest bid <span className="eth">220 ETH</span>
                </Typography>
              </Box>

              <Typography variant="caption" className="newBid">
                New Bid
              </Typography>
            </CardContent>
            <Box
              className="hoverOnclick"
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <CancelTwoToneIcon></CancelTwoToneIcon>
              <Typography className="mRight">Clear all</Typography>
            </Box>
          </Card>
        </Box>
      </Modal>
    </>
  );
}
