import React, { useState } from "react";
import { Draggable, Droppable } from "react-beautiful-dnd";
import Card from "./Card";
import AddCardButton from "./AddCardButton";
import styles from "./Column.module.css";
import CardComposer from "./CardComposer";


function Column({ index, list, selectedCardComposerId, setSelectedCardComposerId }) {
  const { name, cards, cards_order: cardsOrder, id: listId, board: boardId } = list;

  const renderedCards = cardsOrder.map((cardId, index) => {
    // Replace with caching!
    const card = cards.find(item => item.id === cardId);
    return (
      <Card
        card={card}
        index={index}
        setSelectedCardComposerId={setSelectedCardComposerId}
        key={card.id}
      />
    )
  });

  return (
    <Draggable draggableId={`${listId}`} index={index}>
      {provided => (
        <section
          className={styles.list}
          {...provided.draggableProps}
          ref={provided.innerRef}
        >
          <header {...provided.dragHandleProps} className={styles.listHeader}>
            <h4>{name}</h4>
            <span className={styles.listHeaderMenu}>...</span>
          </header>
          <Droppable
            droppableId={`${listId}`}
            type="card"
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
                <CardComposer
                  listId={listId}
                  boardId={boardId}
                  onCancel={() => setSelectedCardComposerId('')}
                /> :
                <AddCardButton
                  onClick={() => setSelectedCardComposerId(listId)}
                />
              }
            </div>
          </footer>
        </section>
      )}
    </Draggable>
  );
}

export default Column;
