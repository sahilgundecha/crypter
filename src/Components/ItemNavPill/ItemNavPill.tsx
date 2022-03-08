import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import avatar from "../../Assets/images/avatar-2.jpg";
import Divider from "@mui/material/Divider";

const ItemNavPill = () => {
  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          marginTop: "10px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Box sx={{ marginRight: "10px" }}>
            <img src={avatar} alt="" />
          </Box>
          <Box>
            <Typography
              variant="subtitle2"
              component="div"
              sx={{ color: "#777E90", fontSize: "14px" }}
            >
              Owner
            </Typography>
            <Typography
              variant="subtitle2"
              gutterBottom
              component="div"
              sx={{ fontSize: "14px", color: "#23262F", fontWeight: "400" }}
            >
              Owner owner
            </Typography>
          </Box>
        </Box>
        <Box>
          <Typography
            variant="subtitle2"
            gutterBottom
            component="div"
            sx={{ fontSize: "12px", color: "#777E90" }}
          >
            Jun 14 - 4:12 PM
          </Typography>
        </Box>
      </Box>
      <Divider light sx={{ margin: "5px 0px" }} />
    </Box>
  );
};

export default ItemNavPill;
