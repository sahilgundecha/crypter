import { FC, useEffect, useState } from "react";
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  Card,
  Container,
  Paper,
  Grid,
  Drawer,
} from "@mui/material";
import DragHandleIcon from "@mui/icons-material/DragHandle";
import { makeStyles } from "@mui/styles";
import Searchbar from "../Searchbar/Searchbar";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import ButtonComponent from "../ButtonComponent/ButtonComponent";
import AppIcon from "../../Assets/StaticImages/App_Icon.png";
import NotificationsActive from "../../Assets/StaticImages/NotificationsActive.svg";
import { Link } from "react-router-dom";
import "./StyleNH.css";
import ProfileCard from "../../Components/ProfileCard/ProfileCard";

import WalletCard from "../../Components/WalletCard/WalletCard";
import { NotificationD } from "../../Components/Notification/NotificationD";
import { useSelector } from "react-redux";

const useStyles = makeStyles({
  logo: {
    width: "128px",
    maxWidth: 160,
    flexGrow: 1,
  },
  navlinks: {
    marginLeft: "10px",
    display: "flex",
  },
  link: {
    textDecoration: "none",
    lineHeight: "40px",
    color: "#777E90",
    transition: "color .2s",
    fontWeight: "bolder",
    "&:hover": {
      color: "#3772ff",
      borderBottom: "1px solid white",
      textDecoration: "none",
    },
  },
  linkMargin: {
    marginLeft: "32px",
  },
});
interface state {
  user: {
    isLoggedIn: Boolean;
  };
}
const NavbarComponent = () => {
  const userInfo = useSelector((state: state) => state.user);
  
  useEffect(() => {
    console.warn(userInfo);
  }, [userInfo]);

  const classes = useStyles();

  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleOpenNavMenu = (event: any) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const showNotificationsMenu = (event: any) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const [anchorElWallet, setAnchorElWallet] = useState(null);
  const openConnectWallet = Boolean(anchorElWallet);
  const showConnectWalletMenu = (event: any) => {
    setAnchorElWallet(event.currentTarget);
  };
  const handleCloseWalletMenu = () => {
    setAnchorElWallet(null);
  };

  return (
    <AppBar position="static" sx={{ bgcolor: "white" }}>
      <Container>
        <Toolbar disableGutters>
          <Link to="/Crypter">
            <img src={AppIcon} alt="logo" className={`${classes.logo}`} />
          </Link>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            <Typography
              variant="h6"
              component="div"
              sx={{ my: 2, color: "white", display: "block" }}
            >
              <Link
                to="/search-filter"
                className={`${classes.link} ${classes.linkMargin}`}
              >
                Discover
              </Link>
              <Link
                to="/FAQ"
                className={`${classes.link} ${classes.linkMargin}`}
              >
                How it works
              </Link>
            </Typography>
          </Box>
          <Box
            sx={{
              flexGrow: 0,
              display: { xs: "none", sm: "flex", md: "flex" },
            }}
            className="tabSection"
          >
            <Box
              component="span"
              sx={{
                display: { xs: "none", sm: "none", md: "block" },
                alignSelf: "center",
                mx: "6px",
              }}
            >
              <Searchbar />
            </Box>

            {userInfo?.isLoggedIn ? (
              <IconButton
                onClick={showNotificationsMenu}
                size="small"
                sx={{
                  mx: 2,
                  display: {
                    xs: "none",
                    sm: "block",
                    md: "block",
                    lg: "block",
                    xl: "block",
                  },
                }}
                aria-controls={open ? "notifications-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
              >
                <img src={NotificationsActive} alt="Notifications-icon"></img>
              </IconButton>
            ) : null}
            {userInfo?.isLoggedIn ? (
              <IconButton
                onClick={showNotificationsMenu}
                size="small"
                sx={{
                  mx: 2,
                  display: {
                    xs: "block",
                    sm: "none",
                    md: "none",
                    lg: "none",
                    xl: "none",
                  },
                }}
                aria-controls={open ? "notifications-menu-xs" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
              >
                <img src={NotificationsActive} alt="Notifications-icon"></img>
              </IconButton>
            ) : null}

            <Menu
              anchorEl={anchorEl}
              id="notifications-menu"
              open={open}
              onClose={handleClose}
              onClick={handleClose}
              PaperProps={{
                elevation: 0,
                sx: {
                  display: {
                    xs: "none",
                    sm: "block",
                    md: "block",
                    lg: "block",
                    xl: "block",
                  },
                  overflow: "visible",
                  filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                  mt: 1.5,
                  // display:{xs:"none"},
                  "& .MuiAvatar-root": {
                    width: 30,
                    height: 30,
                    ml: -0.5,
                    mr: 1,
                  },
                  "&:before": {
                    content: '""',
                    display: "block",
                    position: "absolute",
                    top: 2,
                    left: "11.6rem",
                    width: 25,
                    height: 25,
                    bgcolor: "background.paper",
                    transform: "translateY(-50%) rotate(45deg)",
                    zIndex: 0,
                    borderRadius: "6px",
                  },
                  ml: 14,
                  borderRadius: 5,
                },
              }}
              transformOrigin={{ horizontal: "right", vertical: "top" }}
              anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
            >
              <Box>
                <NotificationD />
              </Box>
            </Menu>
            <Menu
              anchorEl={anchorEl}
              id="notifications-menu-xs"
              open={open}
              onClose={handleClose}
              onClick={handleClose}
              PaperProps={{
                elevation: 0,
                sx: {
                  display: {
                    xs: "flex",
                    sm: "none",
                    md: "none",
                    lg: "none",
                    xl: "none",
                  },
                  overflow: "visible",
                  filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                  mt: 7,
                  "& .MuiAvatar-root": {
                    width: 30,
                    height: 30,
                  },
                  "&:before": {
                    display: "block",
                    position: "absolute",
                    top: 2,
                    left: "11.6rem",
                    width: 25,
                    height: 25,
                    bgcolor: "background.paper",
                    transform: "translateY(-50%) rotate(45deg)",
                    zIndex: 0,
                    borderRadius: "6px",
                  },

                  borderRadius: 5,
                },
              }}
              transformOrigin={{ horizontal: "right", vertical: "top" }}
              anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
            >
              <Box>
                <NotificationD />
              </Box>
            </Menu>
            <Box
              component="span"
              sx={{ display: "block", alignSelf: "center", m: 0, p: 0 }}
            >
              <Link to="/upload" className="linkUnderline">
                <ButtonComponent btnColor={"#3772FF"} classNames="styleUp">
                  Upload
                </ButtonComponent>
              </Link>
            </Box>

            {userInfo?.isLoggedIn ? (
              <Box
                sx={{ display: "block", alignSelf: "center", m: 0, p: 0 }}
                onClick={showConnectWalletMenu}
                aria-controls={
                  openConnectWallet ? "connect-wallet-menu" : undefined
                }
                aria-haspopup="true"
                aria-expanded={openConnectWallet ? "true" : undefined}
              >
                <ProfileCard price="7.7565 ETH" />
              </Box>
            ) : (
              <Box
                component="span"
                sx={{ display: "block", alignSelf: "center", m: 0, p: 0 }}
              >
                <Link to="connect-wallet" className="linkUnderline">
                  <ButtonComponent
                    btnColor={"#23262F"}
                    styleType={"outline"}
                    classNames="styleCw"
                  >
                    Connect Wallet
                  </ButtonComponent>
                </Link>
              </Box>
            )}

            <Menu
              anchorEl={anchorElWallet}
              id="connect-wallet-menu"
              open={openConnectWallet}
              onClose={handleCloseWalletMenu}
              onClick={handleCloseWalletMenu}
              PaperProps={{
                elevation: 0,
                sx: {
                  overflow: "visible",
                  filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                  mt: 7,
                  "&:before": {
                    display: "block",
                    position: "absolute",
                    top: 10,
                    left: "11.6rem",
                    width: 25,
                    height: 25,
                    bgcolor: "background.paper",
                    transform: "translateY(-50%) rotate(45deg)",
                    zIndex: 0,
                    borderRadius: "6px",
                  },

                  borderRadius: 5,
                },
              }}
              transformOrigin={{ horizontal: "right", vertical: "top" }}
              anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
            >
              <Box>
                <WalletCard />
              </Box>
            </Menu>
          </Box>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "flex", sm: "none", md: "none" },
            }}
          >
            {userInfo?.isLoggedIn ? (
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",

                  width: "100%",
                  justifyContent: "flex-end",
                }}
              >
                <IconButton
                  onClick={showNotificationsMenu}
                  size="small"
                  aria-controls={open ? "notifications-menu" : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? "true" : undefined}
                >
                  <img src={NotificationsActive} alt="Notifications-icon"></img>
                </IconButton>
                <Box
                  sx={{
                    display: "block",
                    alignSelf: "center",
                  }}
                  onClick={showConnectWalletMenu}
                  aria-controls={
                    openConnectWallet ? "connect-wallet-menu" : undefined
                  }
                  aria-haspopup="true"
                  aria-expanded={openConnectWallet ? "true" : undefined}
                >
                  <Box>
                    <ProfileCard />
                  </Box>
                </Box>
              </Box>
            ) : null}
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
              sx={{ marginLeft: "auto" }}
            >
              <DragHandleIcon sx={{ color: "black" }} />
            </IconButton>
            <Drawer
              id="menu-appbar"
              anchor="top"
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
                padding: "5px",
                mt: 7,
              }}
            >
              <Paper elevation={0} sx={{ padding: 2 }}>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <Link to="/Crypter">
                    <img
                      src={AppIcon}
                      alt="logo"
                      className={`${classes.logo}`}
                    />
                  </Link>

                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                    }}
                  >
                    {userInfo?.isLoggedIn ? (
                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "row",

                          width: "100%",
                          justifyContent: "flex-end",
                        }}
                      >
                        <IconButton
                          onClick={showNotificationsMenu}
                          size="small"
                          aria-controls={
                            open ? "notifications-menu" : undefined
                          }
                          aria-haspopup="true"
                          aria-expanded={open ? "true" : undefined}
                        >
                          <img
                            src={NotificationsActive}
                            alt="Notifications-icon"
                          ></img>
                        </IconButton>
                        <Box
                          sx={{
                            display: "block",
                            alignSelf: "center",
                          }}
                          onClick={showConnectWalletMenu}
                          aria-controls={
                            openConnectWallet
                              ? "connect-wallet-menu"
                              : undefined
                          }
                          aria-haspopup="true"
                          aria-expanded={openConnectWallet ? "true" : undefined}
                        >
                          <Box>
                            <ProfileCard />
                          </Box>
                        </Box>
                      </Box>
                    ) : null}
                    <IconButton
                      size="large"
                      onClick={handleCloseNavMenu}
                      color="inherit"
                      sx={{ marginLeft: "auto" }}
                    >
                      <CloseOutlinedIcon sx={{ color: "black" }} />
                    </IconButton>
                  </Box>
                </Box>

                <Box>
                  {userInfo?.isLoggedIn ? (
                    <Box>
                      <Box
                        sx={{
                          flexGrow: 1,
                          display: { xs: "flex", md: "none" },
                        }}
                      >
                        <Link
                          to="/search-filter"
                          className={classes.link}
                          onClick={handleCloseNavMenu}
                        >
                          Discover
                        </Link>
                      </Box>
                      <Box
                        sx={{
                          flexGrow: 1,
                          display: { xs: "flex", md: "none" },
                        }}
                      >
                        <Link
                          to="/faq"
                          className={classes.link}
                          onClick={handleCloseNavMenu}
                        >
                          How it works
                        </Link>
                      </Box>
                      <Box
                        sx={{
                          flexGrow: 1,
                          display: { xs: "flex", md: "none" },
                        }}
                      >
                        <Link
                          to="/Upload"
                          className={classes.link}
                          onClick={handleCloseNavMenu}
                        >
                          Create item
                        </Link>
                      </Box>
                      <Box
                        sx={{
                          flexGrow: 1,
                          display: { xs: "flex", md: "none" },
                        }}
                      >
                        <Link
                          to="/profile-page"
                          className={classes.link}
                          onClick={handleCloseNavMenu}
                        >
                          Profile
                        </Link>
                      </Box>
                    </Box>
                  ) : (
                    <Box>
                      <Box
                        sx={{
                          flexGrow: 1,
                          display: { xs: "flex", md: "none" },
                        }}
                      >
                        <Link
                          to="/search-filter"
                          className={classes.link}
                          onClick={handleCloseNavMenu}
                        >
                          Discover
                        </Link>
                      </Box>
                      <Box
                        sx={{
                          flexGrow: 1,
                          display: { xs: "flex", md: "none" },
                        }}
                      >
                        <Link
                          to="/faq"
                          className={classes.link}
                          onClick={handleCloseNavMenu}
                        >
                          How it works
                        </Link>
                      </Box>
                    </Box>
                  )}
                </Box>
                <Box
                  component="span"
                  sx={{ display: "block", alignSelf: "center", my: "4px" }}
                >
                  <Searchbar />
                </Box>

                <Box
                  component="span"
                  sx={{ display: "block", alignSelf: "center", mt: "12px" }}
                >
                  <Box>
                    <Link to="/upload" className="linkUnderline">
                      <ButtonComponent
                        btnColor={"#3772FF"}
                        classNames="uploadRight"
                      >
                        Upload
                      </ButtonComponent>
                    </Link>

                    {userInfo?.isLoggedIn ? (
                      <Box></Box>
                    ) : (
                      <Box
                        sx={{
                          display: "block",
                          alignSelf: "center",
                          m: 0,
                          p: 0,
                        }}
                      >
                        <Link to="/connect-wallet" className="linkUnderline">
                          <ButtonComponent
                            btnColor={"#23262F"}
                            styleType={"outline"}
                            classNames="ConnectStyle"
                          >
                            Connect Wallet
                          </ButtonComponent>
                        </Link>
                      </Box>
                    )}
                  </Box>
                </Box>
              </Paper>
            </Drawer>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default NavbarComponent;
