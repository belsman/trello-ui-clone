import React from "react";
import styles from "./EntityComposerForm.module.css";

function ListComposer({ onCancel }) {
  return (
    <div
      className={`${styles.addEntityFormContainer} ${styles.addListForm}`}
      onClick={e => e.stopPropagation()}
    >
      <input type="text" name="listName" id="create-list" autoFocus />
      <div className={styles.addEntityFormActions}>
        <div className={styles.buttonsGroup}>
          <button className={styles.saveEntity}>Add list</button>
          <button
           className={styles.cancelEntity}
           onClick={onCancel}
          ></button>
        </div>
      </div>
    </div>
  );
}

export default ListComposer;
