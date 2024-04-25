import React from "react";
import GridOfImages from "../../../Components/Grid/Grid";
import { itemData } from "./data";
const Estate = () => {
  const headingStyle = {
    textAlign: "center",
    color: "black",
    fontSize: "30px", 
    fontFamily:"fantasy"
  };
  return (
    <div>
      <h1 style={headingStyle}>REAL ESTATE GALLERY</h1>
      <GridOfImages itemData={itemData} />
    </div>
  );
};
export default Estate;
