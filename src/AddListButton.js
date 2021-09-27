import React from "react";
import styles from "./AddListButton.module.css"

function AddListButton() {
  return (
    <button className={`${styles.composeButton} ${styles.addListComposerBtn}`} type="button"
      onClick={() => {}}
    >
      Add another list
   </button>
 );
}

export default AddListButton;
