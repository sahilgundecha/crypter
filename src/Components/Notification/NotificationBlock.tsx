import { Box, Typography } from "@mui/material";
import dot from "../../Assets/images/dot.png";

interface cardProps {
  mainImg: string;
  ethPrice: string;
  ethRecieved: string;
  days: number;
}

export default function NotificationBlock(props: cardProps) {
  return (
    <>
      <Box>
        <img className="change1" src={props.mainImg} />
        <Box sx={{ marginLeft: "20px" }}>
          <Typography>{props.ethPrice}</Typography>
          <Typography className="ChangeFont">{props.ethRecieved}</Typography>
          <Typography className="textDark">{props.days}</Typography>
        </Box>
        <Box>
          <img className="change" src={dot} />
        </Box>
      </Box>
    </>
  );
}
