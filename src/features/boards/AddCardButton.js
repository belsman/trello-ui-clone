import React from "react";
import styles from "./AddCardButton.module.css";

function AddCardButton({ onClick }) {

  const onClickHandler = e => {
    e.stopPropagation();
    onClick();
  };

  return (
    <button className={styles.composeButton} type="button"
      onClick={onClickHandler}
    >
      Add a card
    </button>
  );
}

export default AddCardButton;
