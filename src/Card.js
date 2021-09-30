import React, { useState } from "react";
import { Draggable } from "react-beautiful-dnd";
import Modal from "react-modal";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencilAlt } from '@fortawesome/free-solid-svg-icons';

import styles from "./Card.module.css";
import CardDetail from "./CardDetail";

Modal.setAppElement('#root');

function Card({ card, index, setSelectedCardComposerId }) {
  const { title, id: cardId } = card;
  const [ modalIsOpen, setModalIsOpen ] = useState(false);

  const customStyles = {
    overlay: {
      backgroundColor: 'rgba(0, 0, 0, 0.8)'
    },
    content: {
      width: '60%',
      padding: '0',
      top: '30%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -30%)',
      borderRadius: '5px',
    },
  };

  const cardExcerptOnClickListener = e => {
    e.stopPropagation();
    setModalIsOpen(true);
    setSelectedCardComposerId('');
  };

  return (
    <>
      <Draggable
        draggableId={`card-${cardId}`}
        index={index}
      >
        {
          (provided) => {
            return (
              <div
                className={styles.card}
                {...provided.draggableProps}
                {...provided.dragHandleProps}
                ref={provided.innerRef}
                onClick={cardExcerptOnClickListener}
              >
                <span className={styles.cardTitle}>{title}</span>
                <button type="button" className={styles.editTitle}>
                  <FontAwesomeIcon icon={faPencilAlt} />
                </button>
              </div>
            )
          }
        }
      </Draggable>
      <Modal
        isOpen={modalIsOpen}
        style={customStyles}
        onRequestClose={() => setModalIsOpen(false)}
        shouldCloseOnOverlayClick={true}
      >
        <CardDetail
          card={card}
          closeFn={(e) => {
            e.stopPropagation();
            setModalIsOpen(false);
          }} />
      </Modal>
    </>
  )
}

export default Card;
