import { useState } from "react";
import {
  Box,
  OutlinedInput,
  InputAdornment,
  Typography,
  Modal,
} from "@mui/material";
import ButtonComponent from "../../../Common/ButtonComponent/ButtonComponent";
import "./ChangePrice.css";

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
  const [Value, setValue] = useState("14.4");
  const handleValue = (e: any) => {
    setValue(e.target.value);
  };

  return (
    <div>
      <Box onClick={handleOpen}>
        <Typography variant="subtitle2" gutterBottom component="div">
          Change Price
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
          <Typography
            sx={{ fontSize: "25px", margin: "15px 0px", fontWeight: "bolder" }}
            component="div"
          >
            Change price
          </Typography>
          <Box>
            <Typography className="newStyle">NEW PRICE</Typography>
            <Box>
              <OutlinedInput
                id="outlined-adornment-weight"
                value={Value}
                onChange={handleValue}
                endAdornment={
                  <InputAdornment position="end">ETH</InputAdornment>
                }
                aria-describedby="outlined-weight-helper-text"
              />
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              margin: "20px 0px",
            }}
          >
            <ButtonComponent btnColor={"#3772FF"} classNames="changeMar">
              Change Price
            </ButtonComponent>
            <ButtonComponent
              handleClick={handleClose}
              styleType={"outline"}
              btnColor={"#23262F"}
              classNames="changeMar"
            >
              Cancel
            </ButtonComponent>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}
