import React, { useState } from "react";
import styles from "./AddEntityButton.module.css"

function AddListButton() {
  const [ showAddListForm, setShowAddListForm ] = useState(false);

  const AddListForm = (
    <div className={styles.addListFormContainer}>
      <input type="text" name="listName" id="create-list" />
      <div className={styles.addListFormActions}>
        <div className={styles.buttonsGroup}>
          <button className={styles.saveCard}>Add list</button>
          <button
           className={styles.cancelCard}
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
    <button className={''} type="button"
      onClick={() => setShowAddListForm(true)}
    >
      Add a card
   </button>
 );
}

export default AddListButton;
