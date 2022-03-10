import React, { useState } from "react";
import "./Item.css";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import Divider from "@mui/material/Divider";
import IosShareIcon from "@mui/icons-material/IosShare";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import headImg from "../../Assets/images/itemImg.png";
import send from "../../Assets/images/popShare.svg";
import creatorProfile from "../../Assets/images/ProfileImage.jpg";
import dollar from "../../Assets/images/dollar.svg";
import report from "../../Assets/images/report.svg";
import right from "../../Assets/images/itemRight.svg";
import tweet from "../../Assets/images/twitter.svg";
import cross from "../../Assets/images/itemCross.svg";
import fb from "../../Assets/images/fb.svg";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import ButtonComponent from "../ButtonComponent/ButtonComponent";
import ItemNavPill from "../ItemNavPill/ItemNavPill";
import { Info, History, Bids, Owners } from "./ItemArray";
import Transfer from "../Modals/Transfer/Transfer";
import PlaceaBidModals from "../Modals/PlaceaBidModal/PlaceaBidModals";
import DilogueBox from "../Modals/DilogueBox/DilogueBox";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}
function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function allyProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const Item = () => {
  const [value, setvalue] = React.useState(0);
  const [search, setSearch] = React.useState(true);
  const [pink, setPink] = React.useState(false);
  const [dotPopup, setDotPopup] = React.useState(false);
  const [sharePopup, setSharePopup] = React.useState(false);

  const opendotPopup = () => {
    setDotPopup(!dotPopup);
    setSharePopup(false);
  };
  const openSharePopup = () => {
    setDotPopup(false);
    setSharePopup(!sharePopup);
  };

  const chnagePink = () => {
    setPink(!pink);
    setDotPopup(false);
    setSharePopup(false);
  };

  const chnageSearch = () => {
    setSearch(false);
  };

  const handleChange = (event: any, newValue: React.SetStateAction<number>) => {
    setvalue(newValue);
  };

  return (
    <Container>
      <Grid container sx={{ margin: "50px 0px" }}>
        <Grid item xs={12} xl={7} md={7} lg={7} sm={12} className="relativeDiv">
          <Box>
            <img src={headImg} alt="bidImage" style={{ width: "95%" }} />
          </Box>
          <Box className="artWrapper">
            <Typography variant="subtitle2" component="span" className="art">
              ART
            </Typography>
            <Typography variant="subtitle2" component="span" className="unlock">
              UNLOCKABLE
            </Typography>
          </Box>
          {sharePopup ? (
            <Box className="dotsPopup">
              <Box sx={{ marginBottom: "15px" }}>
                <Typography variant="subtitle2" gutterBottom component="div">
                  Share link to this page
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "row",
                  marginBottom: "10px",
                }}
              >
                <Box>
                  <img src={tweet} alt="" className="sharepopupIcon" />
                </Box>

                <Box sx={{ marginLeft: "10px" }}>
                  <img src={fb} alt="" className="sharepopupIcon" />
                </Box>
              </Box>
            </Box>
          ) : null}
          {dotPopup ? (
            <Box className="dotsPopup">
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                }}
                className="hoverPink"
              >
                <Box>
                  <img src={dollar} alt="" className="dotpopupIcon" />
                </Box>
                <Box>
                  <Typography variant="subtitle2" gutterBottom component="div">
                    Change price
                  </Typography>
                </Box>
              </Box>
              <Divider light sx={{ margin: "5px 0px" }} />
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                }}
                className="hoverPink"
              >
                <Box>
                  <img src={right} alt="" className="dotpopupIcon" />
                </Box>
                {/* <Box>
                  <Typography variant="subtitle2" gutterBottom component="div">
                    Transfer token
                  </Typography>
                </Box> */}
                <Transfer />
              </Box>
              <Divider light sx={{ margin: "5px 0px" }} />
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                }}
                className="hoverPink"
              >
                <Box>
                  <img src={cross} alt="" className="dotpopupIcon" />
                </Box>
                <Box>
                  <Typography variant="subtitle2" gutterBottom component="div">
                    Remove from sale
                  </Typography>
                </Box>
              </Box>
              <Divider light sx={{ margin: "5px 0px" }} />
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                }}
                className="hoverPink"
              >
                <Box>
                  <img src={cross} alt="" className="dotpopupIcon" />
                </Box>
                <Box>
                  <Typography variant="subtitle2" gutterBottom component="div">
                    Burn token
                  </Typography>
                </Box>
              </Box>
              <Divider light sx={{ margin: "5px 0px" }} />
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                }}
                className="hoverPink"
              >
                <Box>
                  <img src={report} alt="" className="dotpopupIcon" />
                </Box>
                <Box>
                  <Typography variant="subtitle2" gutterBottom component="div">
                    Remove
                  </Typography>
                </Box>
              </Box>
            </Box>
          ) : null}
          <Box className="popoverWrapper">
            <Box>
              <IosShareIcon
                sx={{
                  borderRadius: "35px",
                  padding: "5px",
                  color: "#777e90",
                  width: "25px",
                  height: "25px",
                }}
                className="heartIocn"
                onClick={openSharePopup}
              ></IosShareIcon>
            </Box>
            <Box>
              {pink ? (
                <FavoriteBorderIcon
                  sx={{
                    borderRadius: "35px",
                    padding: "5px",
                    color: "#777e90",
                    width: "25px",
                    height: "25px",
                  }}
                  onClick={chnagePink}
                  className="heartIocn3"
                ></FavoriteBorderIcon>
              ) : (
                <FavoriteIcon
                  sx={{
                    borderRadius: "35px",
                    padding: "5px",

                    width: "25px",
                    height: "25px",
                    color: "#EF466F",
                  }}
                  onClick={chnagePink}
                  className="heartIocn2"
                ></FavoriteIcon>
              )}
            </Box>
            <Box>
              <MoreHorizIcon
                className="heartIocn"
                sx={{
                  borderRadius: "35px",
                  padding: "5px",
                  color: "#777e90",
                  width: "25px",
                  height: "25px",
                }}
                onClick={opendotPopup}
              ></MoreHorizIcon>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} xl={4} md={4} lg={4} sm={12}>
          <Box>
            <Typography variant="h3" gutterBottom component="div">
              The amazing art
            </Typography>
          </Box>
          <Box
            sx={{ display: "flex", flexDirection: "row", marginBottom: "25px" }}
          >
            <Box sx={{ marginRight: "5px" }}>
              <Typography variant="caption" display="span" className="greenEth">
                3.5 ETH
              </Typography>
            </Box>
            <Box sx={{ marginRight: "5px" }}>
              <Typography variant="caption" display="span" className="dollar">
                $4,429.87
              </Typography>
            </Box>
            <Box sx={{ marginRight: "5px" }}>
              <Typography variant="caption" display="span" className="inStock">
                10 in stock
              </Typography>
            </Box>
          </Box>
          <Box>
            <Typography variant="caption" display="block" className="linkText">
              This NFT Card will give you Access to Special Airdrops. To learn
              more about UI8 please visit
            </Typography>
            <Typography
              variant="caption"
              display="block"
              gutterBottom
              className="link"
            >
              <a href="">https://ui8.net</a>
            </Typography>
          </Box>
          <Box className="itemNavPills">
            <Grid className="navpill_Styling">
              <Grid className="tabTopGrid_Styling">
                <Tabs
                  value={value}
                  onChange={handleChange}
                  className="navpillStylingItem"
                >
                  <Tab
                    label="Info"
                    {...allyProps(0)}
                    sx={{ textTransform: "none", color: "#777E90" }}
                  />
                  <Tab
                    label="Owners"
                    {...allyProps(1)}
                    sx={{ textTransform: "none", color: "#777E90" }}
                  />
                  <Tab
                    label="History"
                    {...allyProps(2)}
                    sx={{ textTransform: "none", color: "#777E90" }}
                  />
                  <Tab
                    label="Bids"
                    {...allyProps(3)}
                    sx={{ textTransform: "none", color: "#777E90" }}
                  />
                </Tabs>
                <TabPanel value={value} index={0}>
                  {Info.map((item) => (
                    <ItemNavPill itemsDetails={item} key={item.id} />
                  ))}
                </TabPanel>
                <TabPanel value={value} index={1}>
                  {Owners.map((item) => (
                    <ItemNavPill itemsDetails={item} key={item.id} />
                  ))}
                </TabPanel>
                <TabPanel value={value} index={2}>
                  {History.map((item) => (
                    <ItemNavPill itemsDetails={item} key={item.id} />
                  ))}
                </TabPanel>
                <TabPanel value={value} index={3}>
                  {Bids.map((item) => (
                    <ItemNavPill itemsDetails={item} key={item.id} />
                  ))}
                </TabPanel>
              </Grid>
            </Grid>
          </Box>

          {/* CARD */}
          <Box>
            <Card
              className="itemCard"
              sx={{
                background: "#FCFCFD 0% 0% no-repeat padding-box",
                boxShadow: "0px 64px 64px #1F2F461F",
                borderRadius: "16px",
                border: "1px solid #E6E8EC",
                padding: "20px 0px",
              }}
            >
              <CardContent>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-evenly",
                    alignItems: "center",
                  }}
                >
                  <Box>
                    <img
                      src={creatorProfile}
                      alt=""
                      style={{ width: "50px" }}
                    />
                  </Box>
                  <Box>
                    <Typography
                      variant="subtitle2"
                      className="HighestBid"
                      component="span"
                    >
                      Highest bid by
                    </Typography>
                    <Typography
                      variant="subtitle2"
                      className="BidderName"
                      component="span"
                    >
                      Kohaku Tora
                    </Typography>
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                      }}
                    >
                      <Typography
                        variant="subtitle2"
                        className="ETH"
                        component="span"
                      >
                        1.46 ETH
                      </Typography>
                      <Typography
                        variant="subtitle2"
                        className="cardDollar"
                        component="span"
                      >
                        $2,764.89
                      </Typography>
                    </Box>
                  </Box>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                    margin: "10px",
                  }}
                >
                  {/* <ButtonComponent
                    classNames="itemBlueBtn"
                    btnColor={"#3772FF"}
                  >
                    Purchase now
                  </ButtonComponent> */}
                  <DilogueBox />
                  {/* <ButtonComponent
                    styleType="outline"
                    classNames="ItemWhiteBtn"
                  >
                    Place a bid
                  </ButtonComponent> */}
                  <PlaceaBidModals />
                </Box>
                <Box
                  // sx={{
                  //   disply: "flex",
                  //   flexDirection: "row",
                  //   alignItems: "center",
                  //   justifyContent: "space-Between",
                  //   padding: "10px",
                  // }}
                  className="bottomCard"
                >
                  <Typography
                    variant="body2"
                    component="span"
                    className="serviceFee"
                  >
                    Service fee
                  </Typography>

                  <Typography
                    variant="body2"
                    component="span"
                    className="percent"
                  >
                    1.5%
                  </Typography>

                  <Typography
                    variant="body2"
                    component="span"
                    className="cardBottom"
                  >
                    2.563 ETH
                  </Typography>

                  <Typography
                    variant="body2"
                    component="span"
                    className="cardBottom"
                  >
                    $4,540.62
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Item;
