import React, { useState } from "react";
import styles from "./AddEntityButton.module.css"

function AddListButton() {
  const [ showAddListForm, setShowAddListForm ] = useState(false);

  const AddListForm = (
    <div className={`${styles.addEntityFormContainer} ${styles.addListForm}`}>
      <input type="text" name="listName" id="create-list" autoFocus />
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
    <button className={`${styles.composeButton} ${styles.addListComposerBtn}`} type="button"
      onClick={() => setShowAddListForm(true)}
    >
      Add another list
   </button>
 );
}

export default AddListButton;
