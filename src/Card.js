import React, { useState } from "react";
import Modal from "react-modal";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencilAlt } from '@fortawesome/free-solid-svg-icons';

import styles from "./Card.module.css";
import CardDetail from "./CardDetail";

Modal.setAppElement('#root');

function Card() {
  const [ modalIsOpen, setModalIsOpen ] = useState(false);

  const customStyles = {
    overlay: {
      backgroundColor: 'rgba(0, 0, 0, 0.8)'
    },
    content: {
      width: '60%',
      padding: '0',
      top: '30%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -30%)',
      borderRadius: '5px',
    },
  };

  return (
    <>
      <div
        className={styles.card}
        onClick={() => setModalIsOpen(true)}
      >
        <span className={styles.cardTitle}>This is my first card.</span>
        <button type="button" className={styles.editTitle}>
          <FontAwesomeIcon icon={faPencilAlt} />
        </button>
      </div>
      <Modal
        isOpen={modalIsOpen}
        style={customStyles}
        onRequestClose={() => setModalIsOpen(false)}
        shouldCloseOnOverlayClick={true}
      >
        <CardDetail closeFn={() => setModalIsOpen(false)} />
      </Modal>
    </>
  )
}

export default Card;
