import React, { useState } from "react";
import { unwrapResult } from '@reduxjs/toolkit';
import TextareaAutosize from 'react-textarea-autosize';
import styles from "./EntityComposerForm.module.css"

function CardComposer({ onCancel }) {
  const [ cardTitle, setCardTitle ] = useState('');
  const [ addRequestStatus, setAddRequestStatus ] = useState('idle');

  const canSave = [cardTitle].every(Boolean) && addRequestStatus === 'idle';

  const onSubmitCardHandler = e => {
    if (e) {
      e.preventDefault();
    }
    alert(`Add card! ${cardTitle}`);
    // Assuming we dispatch! to add the card;
    setCardTitle('');
  };

  return (
    <div className={styles.addEntityFormContainer} onClick={e => e.stopPropagation()}>
      <form onSubmit={onSubmitCardHandler}>
        <TextareaAutosize
          placeholder="Enter a title for this card..."
          minRows={3}
          maxRows={7}
          value={cardTitle}
          autoFocus
          required
          onChange={e => setCardTitle(e.target.value)}
          onKeyPress={e => {
            if(e.key === 'Enter') {
              e.preventDefault();
              onSubmitCardHandler();
            }
          }}
        />
        <div className={styles.addEntityFormActions}>
          <div className={styles.buttonsGroup}>
            <button type="submit" className={styles.saveEntity}>Add Card</button>
            <button
              className={styles.cancelEntity}
              onClick={onCancel}
            ></button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CardComposer;
