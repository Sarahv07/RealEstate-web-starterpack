import * as React from "react";
import Box from "@mui/material/Box";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import "./Grid.css"
import BasicModal from "../Modal/modal";

export default function Grid ({itemData}) {
  const [selectedItem,setSelecteditem]= React.useState(null);

  const handleOpenModal = (item)=>{
    setSelecteditem(item);
  }
  const handleCloseModal =(item) =>{
    setSelecteditem(null);
  }
  return (
    <Box className="stylingbox">
      <ImageList variant="masonry" cols={3} gap={8}>
        {itemData.map((item) => (
          <ImageListItem key={item.img}  onClick={()=>handleOpenModal(item)} className="keyBox">
            <img
              src={`${item.img}?w=248&fit=crop&auto=format`}
              srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
              alt={item.title}
              loading="lazy"
            />
            <ImageListItemBar position="below" title={item.title}
            style={{ color: "white", fontFamily:"fantasy", fontSize: "20px", fontStyle:"italic"}} />
          </ImageListItem>
        ))}
      </ImageList>
      {
        selectedItem && (
          <BasicModal
            open={true}
            handleClose={handleCloseModal}
            selectedItem={selectedItem}/>
        )
      }
    </Box>
  );
}


