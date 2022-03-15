import React, { useState } from "react";
import { Box, Button, Typography, Modal } from "@mui/material";
import ButtonComponent from "../../../Common/ButtonComponent/ButtonComponent";
import "./Remove.css";
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
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Box onClick={handleOpen}>
        <Typography variant="subtitle2" gutterBottom component="div">
          Remove from sale
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
            Remove from sale
          </Typography>
          <Typography
            variant="p"
            id="modal-modal-description"
            className="fontRemove"
          >
            Do you really want to remove your item from sale? You can put it on
            sale anytime
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              margin: "20px 0px",
            }}
          >
            <ButtonComponent btnColor={"#3772FF"} classNames="changeMar">
              Remove now
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
