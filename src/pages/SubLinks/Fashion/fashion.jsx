import GridOfImages from "../../../Components/Grid/Grid";
import { itemData } from "./data";
const Fashion = () => {
  const headingStyle = {
    textAlign: "center",
    color: "black",
    fontSize: "30px", 
    fontFamily:"fantasy"
  };
  return (
    <div>
      <h1 style={headingStyle}>FASHION GALLERY</h1>
      <GridOfImages itemData={itemData} />
    </div>
  );
};
export default Fashion;
