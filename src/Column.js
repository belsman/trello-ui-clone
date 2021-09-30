import React, { useState } from "react";
import { Droppable } from "react-beautiful-dnd";
import Card from "./Card";
import AddCardButton from "./AddCardButton";
import styles from "./Column.module.css";
import CardComposer from "./CardComposer";


function Column({ list, selectedCardComposerId, setSelectedCardComposerId }) {
  const { name, cards, cardsOrder, id: listId } = list;

  const renderedCards = cardsOrder.map((cardId, index) => {
    const card = cards.find(item => item.id === cardId);
    return (
      <Card 
        card={card}
        index={index}
        setSelectedCardComposerId={setSelectedCardComposerId}
      />
    )
  });

  return (
    <section className={styles.list}>
      <header className={styles.listHeader}>
        <h4>{name}</h4>
        <span className={styles.listHeaderMenu}>...</span>
      </header>
      <Droppable
        droppableId={`column-${listId}`}
      >
        {
          (provided) => {
            return (
              <div 
                className={styles.cards}
                {...provided.droppableProps}
                ref={provided.innerRef}
              >
                {renderedCards}
                {provided.placeholder}
              </div>
            );
          }
        }
      </Droppable>
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

export default Column;
