import React, { useState } from "react";
import Modal from "react-modal";
import ConfirmDeleteForm from "./ConfirmDeleteForm";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function DeleteCardButton({ styles, icon, card }) {
  const [ deleteModalIsOpen, setDeleteModalIsOpen ] = useState(false);

  const customStyles = {
    overlay: {
      backgroundColor: 'rgba(0, 0, 0, 0)'
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
      <div onClick={() => setDeleteModalIsOpen(true)}>
        <span className="actionIcon">
          <FontAwesomeIcon icon={icon} />
        </span>
        <span className={styles.actionLabel}>
          Delete
        </span>
      </div>
      <Modal
        isOpen={deleteModalIsOpen}
        style={customStyles}
        onRequestClose={() => setDeleteModalIsOpen(false)}
        shouldCloseOnOverlayClick={true}
      >
        <ConfirmDeleteForm
          card={card}
          closeFn={() => setDeleteModalIsOpen(false)}
        />
      </Modal>
    </>
  );
}

export default DeleteCardButton;
