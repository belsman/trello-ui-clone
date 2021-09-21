import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencilAlt } from '@fortawesome/free-solid-svg-icons';

import styles from "./Card.module.css";

function Card() {
  return (
    <div className={styles.card}>
      <span className={styles.cardTitle}>This is my first card.</span>
      <button type="button" className={styles.editTitle}>
        <FontAwesomeIcon icon={faPencilAlt} />
      </button>
    </div>
  )
}

export default Card;
