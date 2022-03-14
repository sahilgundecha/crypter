import * as React from "react";
import { Box ,Divider ,Button,Typography ,Modal}  from "@mui/material";
import ButtonComponent from "../../ButtonComponent/ButtonComponent";
import cross from "../../../Assets/images/cross.svg";
import upload from "../../../Assets/images/upload.svg";
import greentick from "../../../Assets/images/greentick.svg";
const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 300,
  bgcolor: "background.paper",
  border: "1px solid #1F2F461F",
  borderRadius: "10px",
  boxShadow: 24,
  p: 3,
};

export default function BasicModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const [active1, setActive1] = React.useState<boolean>(true);
  const handleClose = () => setOpen(false);
  const handleClick1 = () => {
    setActive1(false);
  };
  return (
    <div>
      <Button onClick={handleOpen}>Open modal</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Box className="crossimg">
            <img onClick={handleClose} width={27} src={cross} alt="img" />
          </Box>
          <Typography id="modal-modal-title" variant="h5">
            Follow Steps
          </Typography>
          <Box
            sx={{
              display: "flex",
              marginTop: "25px",
            }}
          >
            {active1 ? (
              <img src={upload} alt="img" />
            ) : (
              <img src={greentick} alt="img" />
            )}

            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                marginLeft: "30px",
              }}
            >
              <Typography component="div" variant="h6" className="subhead">
                Accept Bid
              </Typography>
              <Typography
                component="div"
                className="subtext"
                color="text.secondary"
              >
                Send Transaction with your wallet
              </Typography>
            </Box>
          </Box>
          <Box sx={{ margin: "20px 0px" }}>
            <ButtonComponent btnColor={"#3772FF"} classNames="changeMar">
              Start now
            </ButtonComponent>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}
