import React from 'react'
import "../Pages/NoResultsPage/noresults.css"
import arrowIcon from "../Assets/images/arrowIcon.jpg";
import { Array_type } from '../Pages/NoResultsPage/NoResultsPage';
import { Grid } from '@mui/material';
import { height } from '@mui/system';

const BoxContainer = (props:Array_type) => {
  const contStyle = {
    display: "flex",
    justifyContent: "center",
    margin: "40px auto",
    width: "100%",
  };
  const boxStyling = {
    width: "16rem",
    borderColor: "#E6E8EC",
    padding: "0.5rem 0.8rem ",
    borderRadius: "32px",
    display: "flex",
    border: "1px solid #E6E8EC",
    margin: "10px",
    height: "70px",
  };
  const imgStyling = { width: "50px", height: "50px", marginRight: "20px" };
  const para = { color: "#777E90",margin:"5px" };
  const h5Style= { margin:"5px"};
  return (
    <Grid container spacing={4} style={contStyle}>
      {props.ArrProps.map((x) => {
        return (
          <Grid  style={boxStyling} key={x.id}>
            <img src={x.itemImg} style={imgStyling} />
            <div className='alignItm'>
              <h5 style={h5Style}>{x.name}</h5>
              <p style={para}>{x.itemCounts}</p>
            </div>
          </Grid>
        );
      })}
    </Grid>
  );
};
export default BoxContainer;
