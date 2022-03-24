import {
  Container,
  Grid,
  Typography,
  Box,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Divider,
} from "@mui/material";
import { Link } from "react-router-dom";

import AppIcon from "../../Assets/images/App_Icon.png";
import { makeStyles } from "@mui/styles";
import Searchbar from "../Searchbar/Searchbar";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

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
    fontSize: "16px",
    lineHeight: 1.14286,
    fontWeight: 700,
  },
  accordianLink: {
    color: "#777E90",
    textDecoration: "none",
    fontSize: "20px !important",
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
        display: { xs: "flex", md: "flex", sm: "flex" },

        p: 3,
        py: 5,
        my: 4,
        borderTop: 1,
        borderColor: "#E6E8EC",
      }}
    >
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12} md={3}>
            <Box>
              <Link to="/crypter">
                <img src={AppIcon} alt="logo" className={`${classes.logo}`} />
              </Link>
            </Box>
            <Box>
              <Typography variant="h5" display="block" component="div" mt={4}>
                The New Creative Economy
              </Typography>
            </Box>
          </Grid>
          <Grid
            item
            xs={12}
            md={3}
            sm={6}
            sx={{ display: { md: "block", xs: "none", sm: "block" } }}
          >
            <Box sx={{ mb: 3 }}>
              <Typography variant="h6" component="h6">
                Crypter
              </Typography>
            </Box>
            <Box sx={{ mb: 2 }}>
              <Link to={"/search-filter"} className={`${classes.link}`}>
                Discover
              </Link>
            </Box>
            <Box sx={{ mb: 2 }}>
              <Link to={"/connect-wallet"} className={`${classes.link}`}>
                Connect wallet
              </Link>
            </Box>
            {/* <Box sx={{ mb: 2 }}>
              <Link to={"/Upload"} className={`${classes.link}`}>
                Create item
              </Link>
            </Box> */}
          </Grid>

          {/* Accordian in small screen device */}
          <Grid
            sx={{
              display: { md: "none", xs: "flex", sm: "none" },
              flexDirection: "column",
              alignItems: "center",
              width: "100%",
              marginTop: "15px",
            }}
          >
            <Accordion
              sx={{
                width: "100%",
                boxShadow: "none",
                border: "none",
                borderTop: "2px solid #E6E8EC",
                minHeight: "70px",
              }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography variant="h6" component="h6">
                  CRYPTER
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Box sx={{ mb: 2 }}>
                  <Link
                    to={"/search-filter"}
                    className={`${classes.accordianLink}`}
                  >
                    Discover
                  </Link>
                </Box>
                <Box>
                  <Link
                    to={"/connect-wallet"}
                    className={`${classes.accordianLink}`}
                  >
                    Connect wallet
                  </Link>
                </Box>
              </AccordionDetails>
            </Accordion>
            <Accordion
              sx={{
                width: "100%",
                boxShadow: "none",
                border: "none",
                borderBottom: "2px solid #E6E8EC",
                borderTop: "2px solid #E6E8EC",
                minHeight: "70px",
              }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2a-content"
                id="panel2a-header"
              >
                <Typography variant="h6" component="h6">
                  INFO
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Box sx={{ mb: 2 }}>
                  <Link to={"/faq"} className={`${classes.accordianLink}`}>
                    FAQ
                  </Link>
                </Box>
                <Box>
                  <Link to={"/Upload"} className={`${classes.accordianLink}`}>
                    Create item
                  </Link>
                </Box>
              </AccordionDetails>
            </Accordion>
          </Grid>
          <Grid
            item
            xs={12}
            md={2}
            sm={6}
            sx={{ display: { md: "block", xs: "none", sm: "block" } }}
          >
            <Box sx={{ mb: 3 }}>
              <Typography variant="h6" component="h6">
                Info
              </Typography>
            </Box>
            <Box sx={{ mb: 2 }}>
              <Link to={"/faq"} className={`${classes.link}`}>
                FAQ
              </Link>
            </Box>
            <Box sx={{ mb: 2 }}>
              <Link to={"/Upload"} className={`${classes.link}`}>
                Create item
              </Link>
            </Box>
            {/* <Box sx={{ mb: 2 }}>
              <Link to={"/"} className={`${classes.link}`}>
                Support
              </Link>
            </Box> */}
          </Grid>
          <Grid item xs={12} md={4} sm={12}>
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
