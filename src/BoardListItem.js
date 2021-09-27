import React, { useState } from "react";
import Card from "./Card";
import AddCardButton from "./AddCardButton";
import styles from "./boardListItem.module.css";
import CardComposer from "./CardComposer";


function BoardListItem({ list, selectedCardComposerId, setSelectedCardComposerId }) {
  const { name, cards, id: listId } = list;

  const renderedCards = cards.map(card => 
    <Card card={card} setSelectedCardComposerId={setSelectedCardComposerId} />);

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
          { (selectedCardComposerId === listId) ?
            <CardComposer onCancel={() => setSelectedCardComposerId('')} /> :
            <AddCardButton onClick={() => setSelectedCardComposerId(listId)} />
          }
        </div>
      </footer>
    </section>
  );
}

export default BoardListItem;
