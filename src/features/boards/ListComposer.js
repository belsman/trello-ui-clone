import React, { useState } from "react";
import { unwrapResult } from '@reduxjs/toolkit';
import { useDispatch } from "react-redux";
import { addNewList } from "./boardsSlice";
import styles from "./EntityComposerForm.module.css";

function ListComposer({ boardId, onCancel }) {

  const [ listName, setListName ] = useState('');
  const [ addRequestStatus, setAddRequestStatus ] = useState('idle');

  const dispatch = useDispatch();

  const onSubmitListHandler = e => {
    e.preventDefault();
    try {
      setAddRequestStatus('pending');
      const resultAction = dispatch(addNewList(
        { name: listName, board: boardId }
      ));
      unwrapResult(resultAction);
      setListName('');
    } catch (err) {
      console.error(err);
    } finally {
      setAddRequestStatus('idle');
    }
  };

  return (
    <div
      className={`${styles.addEntityFormContainer} ${styles.addListForm}`}
      onClick={e => e.stopPropagation()}
    >
      <form onSubmit={onSubmitListHandler}>
        <input
          type="text"
          name="listName"
          id="create-list"
          value={listName}
          onChange={e => setListName(e.target.value)}
          autoFocus
        />
        <div className={styles.addEntityFormActions}>
          <div className={styles.buttonsGroup}>
            <button
              className={styles.saveEntity}
              type="submit"
            >Add list</button>
            <button
              className={styles.cancelEntity}
              onClick={onCancel}
            ></button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default ListComposer;
