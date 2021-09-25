import React, { useState } from "react";
import Modal from "react-modal";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencilAlt } from '@fortawesome/free-solid-svg-icons';

import styles from "./Card.module.css";
import CardDetail from "./CardDetail";

function Card() {
  const [ modalIsOpen, setModalIsOpen ] = useState(false);

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
      >
        <CardDetail closeFn={() => setModalIsOpen(false)} />
      </Modal>
    </>
  )
}

export default Card;
