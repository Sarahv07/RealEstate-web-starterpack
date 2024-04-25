import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import "./modal.css"

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "70%",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4, 
  display: "flex"
};

export default function BasicModal({open,handleClose,selectedItem}) {
  
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <img
            src={selectedItem.img}
            className="image-styles"
            alt="product"
          />
          <div className="textstyles">
            <Typography id="modal-modal-title" variant="h6" component="h2" className="title-text">
              {selectedItem.title}
            </Typography>
            <Typography
              id="modal-modal-description"
              sx={{ mt: 2 }}
              style={{backgroundColor:"white",color:"black"}}
              className="description"
            >
              {selectedItem.description}
            </Typography>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
