import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import ButtonComponent from "../../ButtonComponent/ButtonComponent";
import "./Transfer.css";
import TextField from "@mui/material/TextField";
import cross from "../../../Assets/images/cross.svg";

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
  p: 4,
};

export default function BasicModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Box onClick={handleOpen}>
        <Typography variant="subtitle2" gutterBottom component="div">
          Transfer token
        </Typography>
      </Box>
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
            Transfer token
          </Typography>
          <Typography
            variant="p"
            id="modal-modal-description"
            className="fontRemove"
          >
            You can transfer tokens from your address to another
          </Typography>
          <Typography
            id="modal-modal-title"
            variant="body1"
            className="changeAdd"
          >
            Reciever address
          </Typography>
          <TextField
            id="standard-basic"
            label="Paste address"
            variant="standard"
          />

          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              margin: "20px 0px",
            }}
          >
            <ButtonComponent btnColor={"#3772FF"} classNames="changeMar">
              Continue
            </ButtonComponent>
            <ButtonComponent
              handleClick={handleClose}
              styleType={"outline"}
              btnColor={"#23262F"}
              classNames="changeMar"
            >
              cancel
            </ButtonComponent>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}
