import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import ButtonComponent from '../../ButtonComponent/ButtonComponent';
import './Style.css';
import cross from "../../../Assets/images/cross.svg";

import pencil from "../../../Assets/images/pencil.svg";
import upload from "../../../Assets/images/upload.svg";
import purple_icon from "../../../Assets/images/purple_icon.svg";
import bag from "../../../Assets/images/bag.svg";
import greentick from "../../../Assets/images/greentick.svg";
import { Divider } from '@mui/material';
const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 300,
  bgcolor: 'background.paper',
  border: '1px solid #1F2F461F',
  borderRadius:'10px',
  boxShadow: 24,
  p: 5,
};
const spaceBet = {
    display:'flex',
    justifyContent:'space-between',
    margin:'10px 0px'
}
interface buttonProps {
    handleClose? : void
}
export const AcceptBid:React.FC<buttonProps> = () => {
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
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  margin: "20px 0px",
                 
                }}
              >
              {active1 ? (
                <img src={upload} alt="img" />
              ) : (
                <img src={greentick} alt="img" />
              )}
                <Typography
                  component="div"
                  className="textStyles"
                >
                 You are about to accept a bid for C O I N Z from UI8 
                </Typography>
              </Box>
              <Box>
                  <Typography component='div' className="boldText">
                      1.46 ETH for 1 edition
                  </Typography>
                  <Divider />
                  <Box>
                      <Box sx={spaceBet}>
                          <Typography className="colorDiff">Service Charge</Typography>
                          <Typography>0{" "}ETH</Typography>
                      </Box>
                      <Box sx={spaceBet}>
                          <Typography className="colorDiff">Total bid amount</Typography>
                          <Typography>1.46{" "}ETH</Typography>
                      </Box>
                  </Box>
              </Box>

           
          <Box sx={{margin:'20px 0px'}}>
          <ButtonComponent  btnColor={"#3772FF"} classNames='changeMar'>Accept Bid</ButtonComponent>
          <ButtonComponent  handleClick={handleClose} styleType={"outline"}  btnColor={"#23262F"} classNames='changeMar'>cancel</ButtonComponent>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}
