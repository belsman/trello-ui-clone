import React, { useState } from "react";
import TextareaAutosize from 'react-textarea-autosize';
import styles from "./EntityComposerForm.module.css"

function CardComposer({ onCancel }) {
  return (
    <div className={styles.addEntityFormContainer} onClick={e => e.stopPropagation()}>
      <TextareaAutosize
        placeholder="Enter a title for this card..."
        minRows={3}
        maxRows={7}
        autoFocus
      />
      <div className={styles.addEntityFormActions}>
        <div className={styles.buttonsGroup}>
          <button className={styles.saveEntity}>Add Card</button>
          <button
            className={styles.cancelEntity}
            onClick={onCancel}
          ></button>
        </div>
      </div>
    </div>
  );
};

export default CardComposer;
