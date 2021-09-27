import React, { useState } from "react";
import TextareaAutosize from 'react-textarea-autosize';
import styles from "./EntityComposerForm.module.css"

function CardComposer() {
  return (
    <div className={styles.addEntityFormContainer}>
      <TextareaAutosize
        placeholder="Enter a title for this card..."
        minRows={3}
        maxRows={7}
      />
      <div className={styles.addEntityFormActions}>
        <div className={styles.buttonsGroup}>
          <button className={styles.saveEntity}>Add Card</button>
          <button
            className={styles.cancelEntity}
            onClick={() => setShowAddCardForm(false)}
          ></button>
        </div>
      </div>
    </div>
  );
};

export default CardComposer;
