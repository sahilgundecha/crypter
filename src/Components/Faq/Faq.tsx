import { Container } from "@mui/material";
import "./faq.css";
import React, { useState } from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import Button from "@mui/material/Button";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import PhoneIcon from "@mui/icons-material/Phone";
import HomeIcon from "@mui/icons-material/Home";
import BoltIcon from "@mui/icons-material/Bolt";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import { Grid } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

// import { Icon } from "@material-ui/core";
import blackimg1 from "../../Assets/images/blackimg1.svg";
import home from "../../Assets/images/home.svg";
import hosting from "../../Assets/images/hosting.svg";
import blackimg2 from "../../Assets/images/blackimg2.svg";
// import ButtonComponent from "../ButtonComponent/ButtonComponent";
declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    p: true;
  }
}
export interface PaperPropsVariantOverrides {}
const styles = {
  borderRadius: "25px",
  color: "black",
  border: "1px solid #777E90",
};
const styles1 = {
  color: "#ffffff",
  backgroundColor: "#3772FF",
  borderRadius: "25px",
};
interface faqProps {
  // children?: string | number;
  value?: number;
  index?: number;
  others?: string | number;
  children?: JSX.Element | JSX.Element[] | string | number;
}
function TabPanel(props: faqProps) {
  const { children, value, index, ...other } = props;
  const [rows, setRowsOption] = useState(null);
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
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

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index: any) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

export default function VerticalTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: any, newValue: React.SetStateAction<number>) => {
    setValue(newValue);
  };
  const [rows, setRowsOption] = useState(null);
  return (
    <>
      <Container>
        <Box sx={{ padding: "30px" }}>
          <Typography className="heading1" color="textsecondary">
            LEARN HOW TO GET STARTED
          </Typography>
          <Typography className="heading2" color="textsecondary">
            Frequently asked questions
          </Typography>
          <Typography className="heading3" color="textsecondary">
            Join Stacks community now to get free updates and also alot of
            freebies are waiting for you or
            <span className="blueText"> Contact Support</span>
          </Typography>
        </Box>

        <Box
          sx={{
            flexGrow: 1,
            bgcolor: "background.paper",
            display: "flex",
          }}
        >
          <Grid container spacing={2}>
            <Grid xs={12} md={2}>
              <Tabs
                orientation="vertical"
                value={value}
                onChange={handleChange}
                aria-label="Vertical tabs example"
              >
                <Tab
                  sx={{ textTransform: "none" }}
                  icon={<HomeIcon />}
                  // icon={
                  //   <img
                  //     src={home}
                  //     height={15}
                  //     width={15}
                  //     className="blackimg"
                  //   />
                  // }
                  iconPosition="start"
                  label="General"
                  {...a11yProps(0)}
                />
                <Tab
                  sx={{ textTransform: "none" }}
                  icon={
                    <img
                      src={blackimg1}
                      height={15}
                      width={15}
                      className="blackimg"
                    />
                  }
                  iconPosition="start"
                  label="Support"
                  {...a11yProps(1)}
                />
                <Tab
                  sx={{ textTransform: "none" }}
                  // icon={<BoltIcon />}
                  icon={
                    <img
                      src={hosting}
                      height={15}
                      width={15}
                      className="blackimg"
                    />
                  }
                  iconPosition="start"
                  label="Hosting"
                  {...a11yProps(2)}
                />
                <Tab
                  sx={{ textTransform: "none" }}
                  icon={
                    <img
                      src={blackimg2}
                      height={15}
                      width={15}
                      className="blackimg"
                    />
                  }
                  iconPosition="start"
                  label="Product"
                  {...a11yProps(3)}
                />
              </Tabs>
            </Grid>
            <Grid md={10}>
              <TabPanel value={value} index={0}>
                <Accordion className="hoverText1">
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <Typography className="hoverText">
                      How does it work
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography
                      variant="p"
                      component="div"
                      className="accordionText"
                    >
                      The Stacks series of products: Stacks: Landing Page Kit,
                      Stacks: Portfolio Kit, Stacks: eCommerce Kit. "Stacks is a
                      production-ready library of stackable content blocks built
                      in React Native. Mix-and-match dozens of responsive
                      elements to quickly configure your favorite landing page
                      layouts or hit the ground running with 10 pre-built
                      templates, all in light or dark mode."
                    </Typography>

                    {/* <ButtonComponent
                      btnColor={"#23262F"}
                      styleType={"outline"}
                      classNames={"px-4 rounded-pill learnmore"}
                    >
                      Learn more
                    </ButtonComponent> */}
                  </AccordionDetails>
                </Accordion>
                <Accordion className="hoverText1">
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                  >
                    <Typography className="hoverText">
                      How to start with Stacks
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails className="accordionText">
                    <Typography variant="p" component="div">
                      The Stacks series of products: Stacks: Landing Page Kit,
                      Stacks: Portfolio Kit, Stacks: eCommerce Kit. "Stacks is a
                      production-ready library of stackable content blocks built
                      in React Native. Mix-and-match dozens of responsive
                      elements to quickly configure your favorite landing page
                      layouts or hit the ground running with 10 pre-built
                      templates, all in light or dark mode."
                    </Typography>
                    {/* <ButtonComponent
                      btnColor={"#23262F"}
                      styleType={"outline"}
                      classNames={"px-4 rounded-pill learnmore"}
                    >
                      Learn more
                    </ButtonComponent> */}
                  </AccordionDetails>
                </Accordion>
                <Accordion className="hoverText1">
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel3a-content"
                    id="panel3a-header"
                  >
                    <Typography className="hoverText">
                      Dose it suppport Dark Mode
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography
                      variant="p"
                      component="div"
                      className="accordionText"
                    >
                      The Stacks series of products: Stacks: Landing Page Kit,
                      Stacks: Portfolio Kit, Stacks: eCommerce Kit. "Stacks is a
                      production-ready library of stackable content blocks built
                      in React Native. Mix-and-match dozens of responsive
                      elements to quickly configure your favorite landing page
                      layouts or hit the ground running with 10 pre-built
                      templates, all in light or dark mode."
                    </Typography>
                    {/* <ButtonComponent
                      btnColor={"#23262F"}
                      styleType={"outline"}
                      classNames={"px-4 rounded-pill learnmore"}
                    >
                      Learn more
                    </ButtonComponent> */}
                  </AccordionDetails>
                </Accordion>
                <Accordion className="hoverText1">
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel4a-content"
                    id="panel4a-header"
                  >
                    <Typography className="hoverText">
                      Does it support Auto-Layout
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography
                      variant="p"
                      component="div"
                      className="accordionText"
                    >
                      The Stacks series of products: Stacks: Landing Page Kit,
                      Stacks: Portfolio Kit, Stacks: eCommerce Kit. "Stacks is a
                      production-ready library of stackable content blocks built
                      in React Native. Mix-and-match dozens of responsive
                      elements to quickly configure your favorite landing page
                      layouts or hit the ground running with 10 pre-built
                      templates, all in light or dark mode."
                    </Typography>
                    {/* <ButtonComponent
                      btnColor={"#23262F"}
                      styleType={"outline"}
                      classNames={"px-4 rounded-pill learnmore"}
                    >
                      Learn more
                    </ButtonComponent> */}
                  </AccordionDetails>
                </Accordion>
                <Accordion className="hoverText1">
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel5a-content"
                    id="panel5a-header"
                  >
                    <Typography className="hoverText">
                      What is Stacks Design System
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography
                      variant="p"
                      component="div"
                      className="accordionText"
                    >
                      The Stacks series of products: Stacks: Landing Page Kit,
                      Stacks: Portfolio Kit, Stacks: eCommerce Kit. "Stacks is a
                      production-ready library of stackable content blocks built
                      in React Native. Mix-and-match dozens of responsive
                      elements to quickly configure your favorite landing page
                      layouts or hit the ground running with 10 pre-built
                      templates, all in light or dark mode."
                    </Typography>
                    {/* <ButtonComponent
                      btnColor={"#23262F"}
                      styleType={"outline"}
                      classNames={"px-4 rounded-pill learnmore"}
                    >
                      Learn more
                    </ButtonComponent> */}
                  </AccordionDetails>
                </Accordion>
              </TabPanel>
              <TabPanel value={value} index={1}>
                <Accordion className="hoverText1">
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <Typography className="hoverText">
                      How to start with Stacks
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography
                      variant="p"
                      component="div"
                      className="accordionText"
                    >
                      The Stacks series of products: Stacks: Landing Page Kit,
                      Stacks: Portfolio Kit, Stacks: eCommerce Kit. "Stacks is a
                      production-ready library of stackable content blocks built
                      in React Native. Mix-and-match dozens of responsive
                      elements to quickly configure your favorite landing page
                      layouts or hit the ground running with 10 pre-built
                      templates, all in light or dark mode."
                    </Typography>
                    {/* <ButtonComponent
                      btnColor={"#23262F"}
                      styleType={"outline"}
                      classNames={"px-4 rounded-pill learnmore"}
                    >
                      Learn more
                    </ButtonComponent> */}
                  </AccordionDetails>
                </Accordion>
                <Accordion className="hoverText1">
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                  >
                    <Typography>Dose it suppport Dark Mode</Typography>
                  </AccordionSummary>
                  <AccordionDetails className="accordionText">
                    <Typography
                      variant="p"
                      component="div"
                      className="accordionText"
                    >
                      The Stacks series of products: Stacks: Landing Page Kit,
                      Stacks: Portfolio Kit, Stacks: eCommerce Kit. "Stacks is a
                      production-ready library of stackable content blocks built
                      in React Native. Mix-and-match dozens of responsive
                      elements to quickly configure your favorite landing page
                      layouts or hit the ground running with 10 pre-built
                      templates, all in light or dark mode."
                    </Typography>
                    {/* <ButtonComponent
                      btnColor={"#23262F"}
                      styleType={"outline"}
                      classNames={"px-4 rounded-pill learnmore"}
                    >
                      Learn more
                    </ButtonComponent> */}
                  </AccordionDetails>
                </Accordion>
                <Accordion className="hoverText1">
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel3a-content"
                    id="panel3a-header"
                  >
                    <Typography className="hoverText">
                      Does it support Auto-Layout
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography
                      variant="p"
                      component="div"
                      className="accordionText"
                    >
                      The Stacks series of products: Stacks: Landing Page Kit,
                      Stacks: Portfolio Kit, Stacks: eCommerce Kit. "Stacks is a
                      production-ready library of stackable content blocks built
                      in React Native. Mix-and-match dozens of responsive
                      elements to quickly configure your favorite landing page
                      layouts or hit the ground running with 10 pre-built
                      templates, all in light or dark mode."
                    </Typography>
                    {/* <ButtonComponent
                      btnColor={"#23262F"}
                      styleType={"outline"}
                      classNames={"px-4 rounded-pill learnmore"}
                    >
                      Learn more
                    </ButtonComponent> */}
                  </AccordionDetails>
                </Accordion>
                <Accordion className="hoverText1">
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel4a-content"
                    id="panel4a-header"
                  >
                    <Typography className="hoverText">
                      What is Stacks Design System
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography
                      variant="p"
                      component="div"
                      className="accordionText"
                    >
                      The Stacks series of products: Stacks: Landing Page Kit,
                      Stacks: Portfolio Kit, Stacks: eCommerce Kit. "Stacks is a
                      production-ready library of stackable content blocks built
                      in React Native. Mix-and-match dozens of responsive
                      elements to quickly configure your favorite landing page
                      layouts or hit the ground running with 10 pre-built
                      templates, all in light or dark mode."
                    </Typography>
                    {/* <ButtonComponent
                      btnColor={"#23262F"}
                      styleType={"outline"}
                      classNames={"px-4 rounded-pill learnmore"}
                    >
                      Learn more
                    </ButtonComponent> */}
                  </AccordionDetails>
                </Accordion>
                <Accordion className="hoverText1">
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel5a-content"
                    id="panel5a-header"
                  >
                    <Typography className="hoverText">
                      How does it work
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography
                      variant="p"
                      component="div"
                      className="accordionText"
                    >
                      The Stacks series of products: Stacks: Landing Page Kit,
                      Stacks: Portfolio Kit, Stacks: eCommerce Kit. "Stacks is a
                      production-ready library of stackable content blocks built
                      in React Native. Mix-and-match dozens of responsive
                      elements to quickly configure your favorite landing page
                      layouts or hit the ground running with 10 pre-built
                      templates, all in light or dark mode."
                    </Typography>
                    {/* <ButtonComponent
                      btnColor={"#23262F"}
                      styleType={"outline"}
                      classNames={"px-4 rounded-pill learnmore"}
                    >
                      Learn more
                    </ButtonComponent> */}
                  </AccordionDetails>
                </Accordion>
                <Accordion className="hoverText1">
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel6a-content"
                    id="panel6a-header"
                  >
                    <Typography className="hoverText">
                      How to start with Stacks
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography
                      variant="p"
                      component="div"
                      className="accordionText"
                    >
                      The Stacks series of products: Stacks: Landing Page Kit,
                      Stacks: Portfolio Kit, Stacks: eCommerce Kit. "Stacks is a
                      production-ready library of stackable content blocks built
                      in React Native. Mix-and-match dozens of responsive
                      elements to quickly configure your favorite landing page
                      layouts or hit the ground running with 10 pre-built
                      templates, all in light or dark mode."
                    </Typography>
                    {/* <ButtonComponent
                      btnColor={"#23262F"}
                      styleType={"outline"}
                      classNames={"px-4 rounded-pill learnmore"}
                    >
                      Learn more
                    </ButtonComponent> */}
                  </AccordionDetails>
                </Accordion>
              </TabPanel>
              <TabPanel value={value} index={2}>
                <Accordion className="hoverText1">
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <Typography className="hoverText">
                      Does it support Auto-Layout
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography
                      variant="p"
                      component="div"
                      className="accordionText"
                    >
                      The Stacks series of products: Stacks: Landing Page Kit,
                      Stacks: Portfolio Kit, Stacks: eCommerce Kit. "Stacks is a
                      production-ready library of stackable content blocks built
                      in React Native. Mix-and-match dozens of responsive
                      elements to quickly configure your favorite landing page
                      layouts or hit the ground running with 10 pre-built
                      templates, all in light or dark mode."
                    </Typography>
                    {/* <ButtonComponent
                      btnColor={"#23262F"}
                      styleType={"outline"}
                      classNames={"px-4 rounded-pill learnmore"}
                    >
                      Learn more
                    </ButtonComponent> */}
                  </AccordionDetails>
                </Accordion>
                <Accordion className="hoverText1">
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                  >
                    <Typography className="hoverText">
                      What is Stacks Design System
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails className="accordionText">
                    <Typography
                      variant="p"
                      component="div"
                      className="accordionText"
                    >
                      The Stacks series of products: Stacks: Landing Page Kit,
                      Stacks: Portfolio Kit, Stacks: eCommerce Kit. "Stacks is a
                      production-ready library of stackable content blocks built
                      in React Native. Mix-and-match dozens of responsive
                      elements to quickly configure your favorite landing page
                      layouts or hit the ground running with 10 pre-built
                      templates, all in light or dark mode."
                    </Typography>
                    {/* <ButtonComponent
                      btnColor={"#23262F"}
                      styleType={"outline"}
                      classNames={"px-4 rounded-pill learnmore"}
                    >
                      Learn more
                    </ButtonComponent> */}
                  </AccordionDetails>
                </Accordion>
                <Accordion className="hoverText1">
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel3a-content"
                    id="panel3a-header"
                  >
                    <Typography className="hoverText">
                      How does it work
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography
                      variant="p"
                      component="div"
                      className="accordionText"
                    >
                      The Stacks series of products: Stacks: Landing Page Kit,
                      Stacks: Portfolio Kit, Stacks: eCommerce Kit. "Stacks is a
                      production-ready library of stackable content blocks built
                      in React Native. Mix-and-match dozens of responsive
                      elements to quickly configure your favorite landing page
                      layouts or hit the ground running with 10 pre-built
                      templates, all in light or dark mode."
                    </Typography>
                    {/* <ButtonComponent
                      btnColor={"#23262F"}
                      styleType={"outline"}
                      classNames={"px-4 rounded-pill learnmore"}
                    >
                      Learn more
                    </ButtonComponent> */}
                  </AccordionDetails>
                </Accordion>
                <Accordion className="hoverText1">
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel4a-content"
                    id="panel4a-header"
                  >
                    <Typography className="hoverText">
                      Dose it suppport Dark Mode
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography
                      variant="p"
                      component="div"
                      className="accordionText"
                    >
                      The Stacks series of products: Stacks: Landing Page Kit,
                      Stacks: Portfolio Kit, Stacks: eCommerce Kit. "Stacks is a
                      production-ready library of stackable content blocks built
                      in React Native. Mix-and-match dozens of responsive
                      elements to quickly configure your favorite landing page
                      layouts or hit the ground running with 10 pre-built
                      templates, all in light or dark mode."
                    </Typography>
                    {/* <ButtonComponent
                      btnColor={"#23262F"}
                      styleType={"outline"}
                      classNames={"px-4 rounded-pill learnmore"}
                    >
                      Learn more
                    </ButtonComponent> */}
                  </AccordionDetails>
                </Accordion>
              </TabPanel>
              <TabPanel value={value} index={3}>
                <Accordion className="hoverText1">
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <Typography className="hoverText">
                      How does it work
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography
                      variant="p"
                      component="div"
                      className="accordionText"
                    >
                      The Stacks series of products: Stacks: Landing Page Kit,
                      Stacks: Portfolio Kit, Stacks: eCommerce Kit. "Stacks is a
                      production-ready library of stackable content blocks built
                      in React Native. Mix-and-match dozens of responsive
                      elements to quickly configure your favorite landing page
                      layouts or hit the ground running with 10 pre-built
                      templates, all in light or dark mode."
                    </Typography>
                    {/* <ButtonComponent
                      btnColor={"#23262F"}
                      styleType={"outline"}
                      classNames={"px-4 rounded-pill learnmore"}
                    >
                      Learn more
                    </ButtonComponent> */}
                  </AccordionDetails>
                </Accordion>
                <Accordion className="hoverText1">
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                  >
                    <Typography className="hoverText">
                      How to start with Stacks
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails className="accordionText">
                    <Typography
                      variant="p"
                      component="div"
                      className="accordionText"
                    >
                      The Stacks series of products: Stacks: Landing Page Kit,
                      Stacks: Portfolio Kit, Stacks: eCommerce Kit. "Stacks is a
                      production-ready library of stackable content blocks built
                      in React Native. Mix-and-match dozens of responsive
                      elements to quickly configure your favorite landing page
                      layouts or hit the ground running with 10 pre-built
                      templates, all in light or dark mode."
                    </Typography>
                    {/* <ButtonComponent
                      btnColor={"#23262F"}
                      styleType={"outline"}
                      classNames={"px-4 rounded-pill learnmore"}
                    >
                      Learn more
                    </ButtonComponent> */}
                  </AccordionDetails>
                </Accordion>
                <Accordion className="hoverText1">
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel3a-content"
                    id="panel3a-header"
                  >
                    <Typography className="hoverText">
                      Dose it suppport Dark Mode
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography
                      variant="p"
                      component="div"
                      className="accordionText"
                    >
                      The Stacks series of products: Stacks: Landing Page Kit,
                      Stacks: Portfolio Kit, Stacks: eCommerce Kit. "Stacks is a
                      production-ready library of stackable content blocks built
                      in React Native. Mix-and-match dozens of responsive
                      elements to quickly configure your favorite landing page
                      layouts or hit the ground running with 10 pre-built
                      templates, all in light or dark mode."
                    </Typography>
                    {/* <ButtonComponent
                      btnColor={"#23262F"}
                      styleType={"outline"}
                      classNames={"px-4 rounded-pill learnmore"}
                    >
                      Learn more
                    </ButtonComponent> */}
                  </AccordionDetails>
                </Accordion>
                <Accordion className="hoverText1">
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel4a-content"
                    id="panel4a-header"
                  >
                    <Typography className="hoverText">
                      Does it support Auto-Layout
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography
                      variant="p"
                      component="div"
                      className="accordionText"
                    >
                      The Stacks series of products: Stacks: Landing Page Kit,
                      Stacks: Portfolio Kit, Stacks: eCommerce Kit. "Stacks is a
                      production-ready library of stackable content blocks built
                      in React Native. Mix-and-match dozens of responsive
                      elements to quickly configure your favorite landing page
                      layouts or hit the ground running with 10 pre-built
                      templates, all in light or dark mode."
                    </Typography>
                    {/* <ButtonComponent
                      btnColor={"#23262F"}
                      styleType={"outline"}
                      classNames={"px-4 rounded-pill learnmore"}
                    >
                      Learn more
                    </ButtonComponent> */}
                  </AccordionDetails>
                </Accordion>
                <Accordion className="hoverText1">
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel5a-content"
                    id="panel5a-header"
                  >
                    <Typography className="hoverText">
                      What is Stacks Design System
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography
                      variant="p"
                      component="div"
                      className="accordionText"
                    >
                      The Stacks series of products: Stacks: Landing Page Kit,
                      Stacks: Portfolio Kit, Stacks: eCommerce Kit. "Stacks is a
                      production-ready library of stackable content blocks built
                      in React Native. Mix-and-match dozens of responsive
                      elements to quickly configure your favorite landing page
                      layouts or hit the ground running with 10 pre-built
                      templates, all in light or dark mode."
                    </Typography>
                    {/* <ButtonComponent
                      btnColor={"#23262F"}
                      styleType={"outline"}
                      classNames={"px-4 rounded-pill learnmore"}
                    >
                      Learn more
                    </ButtonComponent> */}
                  </AccordionDetails>
                </Accordion>
              </TabPanel>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </>
  );
}
