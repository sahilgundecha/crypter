import { Container, Typography, Grid, Divider, Box } from "@mui/material";
import card from "../../Assets/images/CrypterEnd.png";
import "./CrypterEnd.css";
import ButtonComponent from "../ButtonComponent/ButtonComponent";

const alignBox1 = {
  display: "flex",
  justifyContent: "center",
};
const CrypterEnd = () => {
  return (
    <>
      <Divider />
      <Container>
        <Grid container sx={{ margin: "50px 0px" }}>
          <Grid item md={6} sm={6}>
            <Box>
              <Box className="alignBox">
                <Typography className="fontE1">
                  SAVE YOUR TIME WITH STACKS
                </Typography>
                <Typography className="fontE2">
                  Earn free crypto with Crypter
                </Typography>
                <Typography className="fontE3">
                  A creative agency that lead and inspire
                </Typography>
                <Box sx={{ margin: "10px 0px" }}>
                  <ButtonComponent
                    btnColor={"#3772FF"}
                    classNames="btnStyle1 mR"
                    handleClick={() => {
                      window.location.href = "./Upload";
                    }}
                  >
                    Create item
                  </ButtonComponent>
                  <ButtonComponent
                    btnColor={"#23262F"}
                    styleType={"outline"}
                    classNames="btnStyle1"
                    handleClick={() => {
                      window.location.href = "./Discover";
                    }}
                  >
                    Discover
                  </ButtonComponent>
                </Box>
              </Box>
            </Box>
          </Grid>
          <Grid item md={6} sm={6}>
            <Box sx={alignBox1}>
              <img className="endWidth" src={card} />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};
export default CrypterEnd;
