import React, { useState } from "react";
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
        <textarea placeholder="Enter a title for this card..."></textarea>
        <div id="add-card-form-actions">
          <div className="add-card-form-actions-button">
            <button>Add Card</button>
            <button>X</button>
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
