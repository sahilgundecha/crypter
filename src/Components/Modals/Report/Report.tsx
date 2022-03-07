import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import cross from "../../../Assets/images/cross.svg";
import Modal from '@mui/material/Modal';
import ButtonComponent from '../../ButtonComponent/ButtonComponent';
import './Report.css'
import TextareaAutosize from "@material-ui/core/TextareaAutosize";


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
const displayDowm={
    display:'flex',
    flexDirection:'column',
    margin:'20px 0px'
} 


export default function BasicModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [text, setText] = React.useState('');

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(event.target.value);
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
          <Typography id="modal-modal-title" variant="h5" >
          Report
          </Typography>
          <Typography variant='p' id="modal-modal-description" className="fontRemove">
          Describe why you think this item should be removed from marketplace
          </Typography>
         
          <Box sx={displayDowm}>
          <Typography variant='p' className="changeMess">
                 MESSAGE
              </Typography>
          <TextareaAutosize
                         placeholder='Tell us about details'
                        rows={4}
                        value={text}
                        onChange={handleChange}
                    />
         </Box>
          <Box sx={{display:'flex',flexDirection:'column',margin:'2px 0px'}}>
          <ButtonComponent  btnColor={"#3772FF"} classNames='changeMar'>Send now</ButtonComponent>
          <ButtonComponent handleClick={handleClose} styleType={"outline"}  btnColor={"#23262F"} classNames='changeMar'>cancel</ButtonComponent>
          </Box>
        </Box>
        
      </Modal>
    </div>
  );
}
