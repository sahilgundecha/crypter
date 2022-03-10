import React from "react";
import "./navpill.css";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
interface navPill {
  itemsDetails: any;
}
const ItemNavPill: React.FC<navPill> = ({ itemsDetails }) => {
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
            <img src={itemsDetails.profile} alt="profile" width={45} />
          </Box>
          {itemsDetails.badge ? (
            <img src={itemsDetails.badge} alt="badge" className="badge" />
          ) : null}

          <Box>
            {itemsDetails.Designation ? (
              <Typography
                variant="subtitle2"
                component="div"
                sx={{ color: "#777E90", fontSize: "14px" }}
              >
                {itemsDetails.Designation}
              </Typography>
            ) : itemsDetails.highestBidETH ? (
              <Typography
                variant="subtitle2"
                component="div"
                sx={{ color: "#777E90", fontSize: "14px" }}
              >
                Highest bid:{" "}
                <span
                  style={{
                    fontSize: "14px",
                    color: "#23262F",
                    fontWeight: "600",
                  }}
                >
                  {itemsDetails.highestBidETH} ETH
                </span>
              </Typography>
            ) : itemsDetails.Name ? (
              <Typography
                variant="subtitle2"
                component="div"
                sx={{ color: "#23262F", fontSize: "14px", fontWeight: "600" }}
              >
                {itemsDetails.Name}
              </Typography>
            ) : null}

            {itemsDetails.artName ? (
              <Typography
                variant="subtitle2"
                gutterBottom
                component="div"
                sx={{ fontSize: "13px", color: "#777E90" }}
              >
                Put{" "}
                <span style={{ color: "#23262F", fontWeight: "600" }}>
                  {itemsDetails.artName}
                </span>{" "}
                on sale
              </Typography>
            ) : itemsDetails.acceptedBidName ? (
              <Typography
                variant="subtitle2"
                gutterBottom
                component="div"
                sx={{ fontSize: "12px", color: "#777E90" }}
              >
                Accepted{" "}
                <span style={{ color: "#23262F", fontWeight: "600" }}>
                  {itemsDetails.acceptedBidName}{" "}
                </span>
                's bid
              </Typography>
            ) : itemsDetails.PlaceBid_ETH ? (
              <Typography
                variant="subtitle2"
                gutterBottom
                component="div"
                sx={{ fontSize: "14px", color: "#777E90" }}
              >
                Place a bid:{" "}
                <span style={{ color: "#45B26B", fontWeight: "600" }}>
                  {itemsDetails.PlaceBid_ETH} ETH
                </span>
              </Typography>
            ) : itemsDetails.Name ? (
              <Typography
                variant="subtitle2"
                gutterBottom
                component="div"
                sx={{
                  fontSize: "14px",
                  color: "#23262F",
                  fontWeight: "600",
                }}
              >
                {itemsDetails.Name}
              </Typography>
            ) : null}
          </Box>
        </Box>
        <Box>
          {itemsDetails.DateTime ? (
            <Typography
              variant="subtitle2"
              gutterBottom
              component="div"
              sx={{ fontSize: "11px", color: "#777E90" }}
            >
              Jun 14 - 4:12 PM
            </Typography>
          ) : null}
        </Box>
      </Box>
      <Divider light sx={{ margin: "5px 0px" }} />
    </Box>
  );
};

export default ItemNavPill;
