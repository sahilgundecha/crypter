import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import ButtonComponent from '../../ButtonComponent/ButtonComponent';
import './Remove.css';

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
  p: 4,
};

export default function BasicModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

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
          <Typography id="modal-modal-title" variant="h5" >
          Remove from sale
          </Typography>
          <Typography variant='p' id="modal-modal-description" className="fontRemove">
          Do you really want to remove your item from sale? You can put it on sale anytime
          </Typography>
          <Box sx={{display:'flex',flexDirection:'column',margin:'20px 0px'}}>
          <ButtonComponent  btnColor={"#3772FF"} classNames='changeMar'>Remove now</ButtonComponent>
          <ButtonComponent styleType={"outline"}  btnColor={"#23262F"} classNames='changeMar'>cancel</ButtonComponent>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}
