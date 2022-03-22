import {
  Container,
  Box,
  Typography,
  Grid,
  Divider,
  Button,
  Card,
  CardContent,
  CardActionArea,
} from "@mui/material";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import card1 from "../../Assets/images/upload1.png";
import card2 from "../../Assets/images/upload2.png";
import "./Upload.css";
import { Link } from "react-router-dom";
import ButtonComponent from "../../Common/ButtonComponent/ButtonComponent";
declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    p: true;
  }
}

const uploadFlex = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  marginTop: "60px",
};
const ImageFlex = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  marginTop: "80px",
};

const cardStyle = {
  maxWidth: 345,
  marginRight: "20px",
  padding: "15px",
  borderRadius: "8px",
};
const ButtonStyle = {
  textTransform: "none",
  borderRadius: "24px",
  color: "#23262F",
  border: "2px solid #E6E8EC",
  padding: "5px 20px",
  fontSize: "14px",
};
const textStyle = {
  textDecoration: "none",
  marginRight: "10px",
  fontWeight: "bold",
  cursor: "pointer",
  fontSize: "14px",
};
export default function () {
  return (
    <>
      <Box className="boxStyle">
        <Box>
          <Link to="/Crypter" className="linkUnderline">
            <Button sx={ButtonStyle}>
              <span style={{ marginRight: "8px", marginTop: "3px" }}>
                <KeyboardBackspaceIcon fontSize="small" />
              </span>
              Back to profile
            </Button>
          </Link>
        </Box>
        <Box className="lineStyle">
          <Link to="/Crypter" className="linkUnderline">
            <Typography component="a" sx={textStyle} className="homeStyle">
              Home &gt;
            </Typography>
          </Link>
          <Typography component="p" sx={textStyle}>
            Update Items
          </Typography>
        </Box>
      </Box>
      <Divider />
      <Container>
        <Box sx={uploadFlex}>
          <Typography variant="p" className="updatFont">
            Upload Item
          </Typography>
          <Typography component="p" className="changeColor">
            Choose “Single” if you want your collectible to be one of a kind or
            “Multiple” if you want to sell one collectible multiple times
          </Typography>
        </Box>

        <Grid container sx={ImageFlex}>
          <Card sx={cardStyle} className="cardStyle cardHover">
            <CardActionArea>
              <img className="imgFuild" src={card1} />
              <CardContent className="textCenter">
                <Link to="/single-collectible" className="linkUnderline">
                  <ButtonComponent
                    btnColor={"#23262F"}
                    styleType={"outline"}
                    classNames="buttonStyle1"
                  >
                    Create Single
                  </ButtonComponent>
                </Link>
              </CardContent>
            </CardActionArea>
          </Card>
          <Card sx={cardStyle} className="cardHover">
            <CardActionArea>
              <img className="imgFuild" src={card2} />
              <CardContent>
                <Link to="/multiple-collectible" className="linkUnderline">
                  <ButtonComponent
                    btnColor={"#23262F"}
                    styleType={"outline"}
                    classNames="buttonStyle1"
                  >
                    Create Mutiple
                  </ButtonComponent>
                </Link>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>

        <Box sx={uploadFlex}>
          <Typography variant="p" className="changeColor">
            We do not own your private keys and cannot access your funds without
            your confirmation.
          </Typography>
        </Box>
      </Container>
    </>
  );
}
