import React, { useState } from "react";
import Card from "./Card";
import AddCardButton from "./AddCardButton";
import styles from "./boardListItem.module.css";


function BoardListItem() {
  return (
    <section className={styles.list}>
      <header className={styles.listHeader}>
        <h4>To Do</h4>
        <span className={styles.listHeaderMenu}>...</span>
      </header>
      <div className="cards">
        <Card />
        <Card />
      </div>
      <footer className={styles.listFooter}>
        <div className={styles.addCardAction}>
          <AddCardButton />
        </div>
      </footer>
    </section>
  );
}

export default BoardListItem;
