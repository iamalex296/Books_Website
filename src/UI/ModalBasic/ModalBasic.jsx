import * as React from "react";
import Box from "@mui/material/Box";
import Button from "../Button/Button";
import Modal from "@mui/material/Modal";

import styled from "styled-components";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  height: 450,
  bgcolor: "transparent",
  padding: "0px",
  margin: "0px",
  borderRadius: "10px",
  outline: "none",
  // boxShadow: 24,
  p: 0,
};

const StyledModalBox = styled(Box)`
  overflow-y: auto;

  ::-webkit-scrollbar {
    display: none;
  }

  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none;
`;

const ModalBasic = ({
  modalButtonName,
  children,
  color,
  size,
  variant,
  buttonStyle,
  buttonNameColor,
}) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button
        onClick={handleOpen}
        buttonStyle={buttonStyle}
        color={color}
        size={size}
        variant={variant}
      >
        <span style={{ color: `${buttonNameColor || null}` }}>
          {modalButtonName}
        </span>
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <StyledModalBox sx={style}>{children}</StyledModalBox>
      </Modal>
    </div>
  );
};

export default ModalBasic;
