import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { unwrapResult } from '@reduxjs/toolkit';
// import { addNewBoard } from "./boardsSlice";
import styles from "./CreateBoard.module.css";

const deleteCard = () => {};

function ConfirmDeleteForm({ closeFn }) {
  const [ newBoardTitle, setNewBoardTitle ] = useState('');
  const [ addRequestStatus, setAddRequestStatus] = useState('');
  const dispatch = useDispatch();
  
  const cardDeleteHandler = e => {
    e.preventDefault();
    try {
      setAddRequestStatus('pending');
      const resultAction = dispatch(deleteCard({ name: newBoardTitle }));
      unwrapResult(resultAction);
      setNewBoardTitle('');
    } catch (err) {
      console.error(err);
    } finally {
      setAddRequestStatus('idle');
    }
    closeFn();
  };

  return (
    <div className={styles.root}>
      <form onSubmit={cardDeleteHandler}>
        <p className={styles.prompt}>Are you sure you want to delete?</p>
        <div className={styles.actionButton}>
          <button className={styles.submit} type="submit">Yes, Delete</button>
          <button
            className={styles.cancel}
            type="button"
            onClick={() => closeFn()}
          >
          </button>
        </div>
      </form>
    </div>
  );
};

export default ConfirmDeleteForm;
