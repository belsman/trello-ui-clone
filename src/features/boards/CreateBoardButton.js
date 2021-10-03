import React, { useState } from "react";
import Modal from "react-modal";
import boardStyle from "./CreateBoard.module.css";

const NewBoardForm = ({ closeFn }) => {
  const [ newBoardTitle, setNewBoardTitle ] = useState('');

  return (
    <div className={boardStyle.root}>
      <form>
        <input
          type="text"
          name="newboard"
          placeholder="Add board title"
          value={newBoardTitle}
          onChange={e => setNewBoardTitle(e.target.value)}
          className={boardStyle.titleInput}
          required
        />
        <div className={boardStyle.actionButton}>
          <button className={boardStyle.submit} type="submit">Create</button>
          <button
           className={boardStyle.cancel}
           type="button"
           onClick={() => closeFn()}
          >
          </button>
        </div>
      </form>
    </div>
  );
};

function CreateBoardButton({ styles }) {
  const [ modalIsOpen, setModalIsOpen ] = useState(false);

  const customStyles = {
    overlay: {
      backgroundColor: 'rgba(0, 0, 0, 0.8)'
    },
    content: {
      width: '35%',
      height: '100px',
      padding: '0',
      margin: '0',
      top: '10%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      transform: 'translate(-50%, 0%)',
      borderRadius: '5px',
      overflow: 'hidden',
    },
  };

  return (
    <>
      <div
        id={styles.createBoard}
        className={styles.boardTile}
        onClick={() => setModalIsOpen(true)}
      >
        <span>Create new board</span>
      </div>
      <Modal
        isOpen={modalIsOpen}
        style={customStyles}
        onRequestClose={() => setModalIsOpen(false)}
        shouldCloseOnOverlayClick={true}
      >
        <NewBoardForm
          closeFn={() => setModalIsOpen(false)}
        />
      </Modal>
    </>
  );
}

export default CreateBoardButton;
