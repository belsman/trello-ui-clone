import React, { useState } from "react";
import styles from "./AddEntityButton.module.css"

function AddListButton() {
  const [ showAddListForm, setShowAddListForm ] = useState(false);

  const AddListForm = (
    <div className={styles.addEntityFormContainer}>
      <input type="text" name="listName" id="create-list" />
      <div className={styles.addEntityFormActions}>
        <div className={styles.buttonsGroup}>
          <button className={styles.saveEntity}>Add list</button>
          <button
           className={styles.cancelEntity}
           onClick={() => setShowAddListForm(false)}
          ></button>
        </div>
      </div>
    </div>
  );

  if (showAddListForm) {
    return AddListForm;
  }

  return (
    <button className={styles.composeButton} type="button"
      onClick={() => setShowAddListForm(true)}
    >
      Add a card
   </button>
 );
}

export default AddListButton;
