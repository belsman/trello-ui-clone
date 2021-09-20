import React from "react";
import styles from "./BoardListItem.module.css";

function BoardListItem() {

  return (
    <section className={styles.list}>
      <header className={styles.listHeader}>
        <h4>To Do</h4>
        <span className={styles.listHeaderMenu}>...</span>
      </header>
      <div className="cards"></div>
      <footer className={styles.listFooter}>
        <div className={styles.addCardAction}>
          <button className={styles.composeTask} type="button">
            Add a card
          </button>
        </div>
      </footer>
    </section>
  );
}

export default BoardListItem;
