import React, { useState } from "react";
import Modal from "react-modal";
// import AddBoardForm from "./AddBoardForm";
import ConfirmDeleteForm from "./ConfirmDeleteForm";

function DeleteCardButton({ styles }) {
  const [ modalIsOpen, setModalIsOpen ] = useState(false);

  const customStyles = {
    overlay: {
      backgroundColor: 'rgba(0, 0, 0, 0.8)'
    },
    content: {
      width: '35%',
      height: '100px',
      padding: '0',
      margin: '0',
      top: '10%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      transform: 'translate(-50%, 0%)',
      borderRadius: '5px',
      overflow: 'hidden',
    },
  };

  return (
    <>
      <span
        onClick={() => setModalIsOpen(true)}
        className={styles.actionLabel}
      >
        Delete
      </span>
      <Modal
        isOpen={modalIsOpen}
        style={customStyles}
        onRequestClose={() => setModalIsOpen(false)}
        shouldCloseOnOverlayClick={true}
      >
        <ConfirmDeleteForm
          closeFn={() => setModalIsOpen(false)}
        />
      </Modal>
    </>
  );
}

export default DeleteCardButton;
