import React, { useState } from "react";

import TextareaAutosize from 'react-textarea-autosize';

import styles from "./boardListItem.module.css";

function BoardListItem() {

  const [ showAddCardForm, setShowAddCardForm ] = useState(false);

  const ComposeCardButton = () => (
    <button className={styles.composeTask} type="button"
     onClick={() => setShowAddCardForm(true)}>
      Add a card
    </button>
  );

  const AddCardForm = () => {
    return (
      <div className={styles.addCardFormContainer}>
        <TextareaAutosize 
          placeholder="Enter a title for this card..."
          minRows={3}
          maxRows={7}
        />
        <div className={styles.addCardFormActions}>
          <div className={styles.buttonsGroup}>
            <button className={styles.saveCard}>Add Card</button>
            <button
             className={styles.cancelCard}
             onClick={() => setShowAddCardForm(false)}
            ></button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section className={styles.list}>
      <header className={styles.listHeader}>
        <h4>To Do</h4>
        <span className={styles.listHeaderMenu}>...</span>
      </header>
      <div className="cards"></div>
      <footer className={styles.listFooter}>
        <div className={styles.addCardAction}>
          {showAddCardForm ? <AddCardForm /> : <ComposeCardButton />}
        </div>
      </footer>
    </section>
  );
}

export default BoardListItem;
