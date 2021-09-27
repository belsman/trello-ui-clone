import React from "react";
import styles from "./AddListButton.module.css"

function AddListButton({ onClick }) {

  const onClickHandler = e => {
    e.stopPropagation();
    onClick();
  };

  return (
    <button className={`${styles.composeButton} ${styles.addListComposerBtn}`} type="button"
      onClick={onClickHandler}
    >
      Add another list
   </button>
 );
}

export default AddListButton;
