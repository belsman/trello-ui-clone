import React, { useState } from "react";
import Card from "./Card";
import AddCardButton from "./AddCardButton";
import styles from "./boardListItem.module.css";


function BoardListItem({ list }) {
  const { name, cards } = list;

  const renderedCards = cards.map(card => <Card card={card} />);

  return (
    <section className={styles.list}>
      <header className={styles.listHeader}>
        <h4>{name}</h4>
        <span className={styles.listHeaderMenu}>...</span>
      </header>
      <div className="cards">
        {renderedCards}
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
