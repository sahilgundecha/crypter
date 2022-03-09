import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import avatar from "../../Assets/images/avatar-2.jpg";
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
          <Box sx={{ marginRight: "4px" }}>
            <img src={avatar} alt="" />
          </Box>
          <Box>
            {itemsDetails.isDesignation ? (
              <Typography
                variant="subtitle2"
                component="div"
                sx={{ color: "#777E90", fontSize: "14px" }}
              >
                Owner
              </Typography>
            ) : itemsDetails.highBid ? (
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
                    fontWeight: "400",
                  }}
                >
                  {itemsDetails.highestBidETH} ETH
                </span>
              </Typography>
            ) : (
              <Typography
                variant="subtitle2"
                component="div"
                sx={{ color: "#23262F", fontSize: "14px", fontWeight: "bold" }}
              >
                Cole Fahey
              </Typography>
            )}

            {/* second Line */}

            {itemsDetails.PutOnsale ? (
              <Typography
                variant="subtitle2"
                gutterBottom
                component="div"
                sx={{ fontSize: "14px", color: "#777E90" }}
              >
                Put {itemsDetails.artName} on sale
              </Typography>
            ) : itemsDetails.acceptedBid ? (
              <Typography
                variant="subtitle2"
                gutterBottom
                component="div"
                sx={{ fontSize: "12px", color: "#777E90" }}
              >
                Accepted {itemsDetails.bidFromName}'s bid
              </Typography>
            ) : itemsDetails.placedBid ? (
              <Typography
                variant="subtitle2"
                gutterBottom
                component="div"
                sx={{ fontSize: "12px", color: "#23262F" }}
              >
                Place a bid: {itemsDetails.ETH} ETH
              </Typography>
            ) : (
              <Typography
                variant="subtitle2"
                gutterBottom
                component="div"
                sx={{ fontSize: "12px", color: "#23262F", fontWeight: "bold" }}
              >
                Cole Fahey
              </Typography>
            )}
          </Box>
        </Box>
        <Box>
          {itemsDetails.isDate ? (
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
