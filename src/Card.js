import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencilAlt } from '@fortawesome/free-solid-svg-icons';

import styles from "./Card.module.css";

function Card() {
  return (
    <div className={styles.card}>
      <h4 className={styles.cardTitle}>This is my first card.</h4>
      <button type="button" className={styles.editTitle}>
        <FontAwesomeIcon icon={faPencilAlt} />
      </button>
    </div>
  )
}

export default Card;
