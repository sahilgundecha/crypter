import { Link } from "react-router-dom";

import {
  Container,
  Grid,
  Paper,
  Typography,
  Divider,
  Box,
  styled,
  Switch,
  CardMedia,
  CardContent,
  Card,
} from "@mui/material";
import Textfield from "../../Components/Textfield/TextField";
import { useState } from "react";
import img1 from "../../Assets/images/bidImg.png";
import ButtonComponent from "../../Components/ButtonComponent/ButtonComponent";
import CancelTwoToneIcon from "@mui/icons-material/CancelTwoTone";
import bidIcon from "../../Assets/images/bidIcon.svg";
import candleStick from "../../Assets/images/candleStick.svg";
import rod1 from "../../Assets/images/rod1.svg";
import rod2 from "../../Assets/images/rod2.svg";
import rod3 from "../../Assets/images/rod3.svg";
import rod4 from "../../Assets/images/rod4.svg";
import plus1 from "../../Assets/images/plus1.svg";
import plus2 from "../../Assets/images/plus2.svg";
import plus3 from "../../Assets/images/plus3.svg";
import plus4 from "../../Assets/images/plus4.svg";
import buffer from "../../Assets/images/buffer.svg";
import creator from "../../Assets/images/creatorImg.png";
import "./SingleCollectible.css";

import Button from "@mui/material/Button";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { FileUploader } from "react-drag-drop-files";
import FollowStep from "../../Components/Modals/FollowStepModals/FollowStep";

export default function SingleCollectible(props: any) {
  const [Picture, setPicture] = useState(true);
  const [Picture1, setPicture1] = useState(true);
  const [Picture2, setPicture2] = useState(true);
  const [Picture3, setPicture3] = useState(true);
  const changeBackground = () => {
    setPicture(false);
  };
  const changeBackgroundOut = () => {
    setPicture(true);
  };
  const changeBackground1 = () => {
    setPicture1(false);
  };
  const changeBackgroundOut1 = () => {
    setPicture1(true);
  };
  const changeBackground2 = () => {
    setPicture2(false);
  };
  const changeBackgroundOut2 = () => {
    setPicture2(true);
  };
  const changeBackground3 = () => {
    setPicture3(false);
  };
  const changeBackgroundOut3 = () => {
    setPicture3(true);
  };
  const AntSwitch = styled(Switch)(({ theme }) => ({
    width: 28,
    height: 16,
    padding: 0,
    display: "flex",
    "&:active": {
      "& .MuiSwitch-thumb": {
        width: 15,
      },
      "& .MuiSwitch-switchBase.Mui-checked": {
        transform: "translateX(9px)",
      },
    },
    "& .MuiSwitch-switchBase": {
      padding: 2,
      "&.Mui-checked": {
        transform: "translateX(12px)",
        color: "#fff",
        "& + .MuiSwitch-track": {
          opacity: 1,
          backgroundColor:
            theme.palette.mode === "dark" ? "#177ddc" : "#1890ff",
        },
      },
    },
    "& .MuiSwitch-thumb": {
      boxShadow: "0 2px 4px 0 rgb(0 35 11 / 20%)",
      width: 12,
      height: 12,
      borderRadius: 6,
      transition: theme.transitions.create(["width"], {
        duration: 200,
      }),
    },
    "& .MuiSwitch-track": {
      borderRadius: 16 / 2,
      opacity: 1,
      backgroundColor:
        theme.palette.mode === "dark"
          ? "rgba(255,255,255,.35)"
          : "rgba(0,0,0,.25)",
      boxSizing: "border-box",
    },
  }));
  const styleDirection = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  };

  const styleCol = {
    display: "flex",
    flexDirection: "column",
  };
  interface stateProps {
    file: string;
    tittle?: string;
  }

  const [pressed, setPressed] = useState<boolean>(false);
  const pressing = () => {
    setPressed(!pressed);
  };
  const [file, setFile] = useState(null);
  const handleChange = (file: any) => {
    setFile(file);
  };
  const fileTypes = ["PNG", "GIF", "WEBP", "MP3", "Max1GB"];
  return (
    <>
      <Container>
        <Grid container spacing={10} className="marginChange">
          <Grid item sm={12} xs={12} md={8}>
            <Box sx={styleDirection}>
              <Box>
                <Typography variant="h4">
                  {props.tittle ? props.tittle : "Create single collectible"}
                </Typography>
              </Box>
              <Box>
                <Link to={props.link ? props.link : "/multiple-collectible"}>
                  <ButtonComponent
                    btnColor={"#23262F"}
                    styleType={"outline"}
                    classNames="btnStyle1"
                  >
                    Switch to {props.switch ? props.switch : "mutiple"}
                  </ButtonComponent>
                </Link>
              </Box>
            </Box>
            <Box sx={styleCol}>
              <Typography variant="p" className="changeFont">
                Upload file
              </Typography>
              <Typography variant="p" className="font1">
                Drag or choose your file to upload
              </Typography>
              <FileUploader
                multiple={true}
                handleChange={handleChange}
                name="file"
                types={fileTypes}
              />
            </Box>
            <Box>
              <p>Item details</p>
              <Textfield />
            </Box>
            <Box sx={styleDirection} className="paddingChange">
              <Box sx={styleCol}>
                <Typography variant="p" className="changeFont">
                  Put on sale
                </Typography>
                <Typography variant="p" className="font1">
                  You’ll receive bids on this item
                </Typography>
              </Box>
              <Box>
                <AntSwitch
                  defaultChecked
                  inputProps={{ "aria-label": "ant design" }}
                />
              </Box>
            </Box>
            <Box sx={styleDirection} className="paddingChange">
              <Box sx={styleCol}>
                <Typography variant="p" className="changeFont">
                  Instant sale price
                </Typography>
                <Typography variant="p" className="font1">
                  Enter the price for which the item will be instantly sold
                </Typography>
              </Box>
              <Box>
                <AntSwitch inputProps={{ "aria-label": "ant design" }} />
              </Box>
            </Box>
            <Box sx={styleDirection} className="paddingChange">
              <Box sx={styleCol}>
                <Typography variant="p" className="changeFont">
                  Unlock once purchased
                </Typography>
                <Typography variant="p" className="font1">
                  Content will be unlocked after successful transaction
                </Typography>
              </Box>
              <Box>
                <AntSwitch inputProps={{ "aria-label": "ant design" }} />
              </Box>
            </Box>
            <Box sx={styleDirection} className="paddingChange">
              <Box sx={styleCol}>
                <Typography variant="p" className="changeFont">
                  Choose collection
                </Typography>
                <Typography variant="p" className="font1">
                  Choose an exiting collection or create a new one
                </Typography>
              </Box>
            </Box>
            <Grid container spacing={2}>
              <Grid item sm={3} xs={6} md={3}>
                <Box sx={styleCol} className="bgColor">
                  <img
                    src={Picture ? rod1 : plus4}
                    className="imFluid"
                    onMouseOver={changeBackground}
                    onMouseLeave={changeBackgroundOut}
                  />
                  <Typography variant="p">Create collection</Typography>
                </Box>
              </Grid>
              <Grid item sm={3} xs={6} md={3}>
                <Box sx={styleCol} className="bgColor">
                  <img
                    src={Picture1 ? rod2 : plus3}
                    className="imFluid"
                    onMouseOver={changeBackground1}
                    onMouseLeave={changeBackgroundOut1}
                  />
                  <Typography variant="p">Crypto Legend - Professor</Typography>
                </Box>
              </Grid>
              <Grid item sm={3} xs={6} md={3}>
                <Box sx={styleCol} className="bgColor">
                  <img
                    src={Picture2 ? rod3 : plus2}
                    className="imFluid"
                    onMouseOver={changeBackground2}
                    onMouseLeave={changeBackgroundOut2}
                  />
                  <Typography variant="p">Crypto Legend - Professor</Typography>
                </Box>
              </Grid>
              <Grid item sm={3} xs={6} md={3}>
                <Box sx={styleCol} className="bgColor">
                  <img
                    src={Picture3 ? rod4 : plus1}
                    className="imFluid"
                    onMouseOver={changeBackground3}
                    onMouseLeave={changeBackgroundOut3}
                  />
                  <Typography variant="p">Legend Photography</Typography>
                </Box>
              </Grid>
            </Grid>
            <Box sx={styleDirection} className="paddingChange">
              <Box>
                <FollowStep viewItem={true} />
              </Box>
              <Box>
                <Typography variant="p">
                  Auto Saving <img className="marginR" src={buffer} />
                </Typography>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Paper className="changePadding">
              <Typography variant="p" className="font2">
                Preview
              </Typography>
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
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
