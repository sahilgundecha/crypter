import { Container, Grid, Typography, Box } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import AppIcon from "../../Assets/images/App_Icon.png";
import { makeStyles } from "@mui/styles";
import Searchbar from "../Searchbar/Searchbar";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";

declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    p: true;
  }
}

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
    color: "#777E90",
    textDecoration: "none",
    fontSize: "14px",
    lineHeight: 1.14286,
    fontWeight: 700,
  },
});

const FooterComponent = () => {
  const classes = useStyles();

  return (
    <Box
      sx={{
        flexGrow: 0,
        display: { xs: "flex", md: "flex" },
        py: 4,
        my: 4,
        borderTop: 1,
        borderColor: "#E6E8EC",
      }}
    >
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={4} md={4}>
            <Box>
              <Link to="#">
                <img src={AppIcon} alt="logo" className={`${classes.logo}`} />
              </Link>
            </Box>
            <Box>
              <Typography variant="h3" display="block" component="div" mt={4}>
                The New Creative<br></br>Economy
              </Typography>{" "}
            </Box>
          </Grid>
          <Grid item xs>
            <Box sx={{ mb: 3 }}>
              <Typography variant="h6" component="h6">
                Crypter
              </Typography>
            </Box>
            <Box sx={{ mb: 2 }}>
              <Link to={"/"} className={`${classes.link}`}>
                Discover
              </Link>
            </Box>
            <Box sx={{ mb: 2 }}>
              <Link to={"/"} className={`${classes.link}`}>
                Connect wallet
              </Link>
            </Box>
            <Box sx={{ mb: 2 }}>
              <Link to={"/"} className={`${classes.link}`}>
                Create item
              </Link>
            </Box>
          </Grid>
          <Grid item xs>
            <Box sx={{ mb: 3 }}>
              <Typography variant="h6" component="h6">
                Info
              </Typography>
            </Box>
            <Box sx={{ mb: 2 }}>
              <Link to={"/"} className={`${classes.link}`}>
                Download
              </Link>
            </Box>
            <Box sx={{ mb: 2 }}>
              <Link to={"/"} className={`${classes.link}`}>
                Demos
              </Link>
            </Box>
            <Box sx={{ mb: 2 }}>
              <Link to={"/"} className={`${classes.link}`}>
                Support
              </Link>
            </Box>
          </Grid>
          <Grid item xs={12} sm={4} md={4}>
            <Box sx={{ mb: 3 }}>
              <Typography variant="h6" component="h6">
                Join Newsletter
              </Typography>
            </Box>
            <Box>
              <Typography variant="p" sx={{ color: "#777E90" }}>
                Subscribe our newsletter to get more free design <br></br>
                course and resource
              </Typography>
            </Box>
            <Box sx={{ mt: 2 }}>
              <Searchbar
                icon={
                  <ArrowCircleRightIcon
                    style={{ color: "#3772FF", width: "32px", height: "32px" }}
                  />
                }
                borderRadius={"50px"}
                placeholder={"Enter your email"}
              />
            </Box>
          </Grid>
        </Grid>
        <hr></hr>

        <Grid
          sx={{
            display: { xs: "flex", md: "flex" },
            justifyContent: "space-between",
          }}
        >
          <Typography variant="p" sx={{ color: "#777E90" }}>
            Copyright © 2022 UI8 LLC. All rights reserved
          </Typography>

          <Typography variant="p">
            We use cookies for better service.{" "}
            <Link
              to={"/"}
              style={{ marginLeft: "16px", textDecoration: "none" }}
            >
              Accept
            </Link>{" "}
          </Typography>
        </Grid>
      </Container>
    </Box>
  );
};

export default FooterComponent;
