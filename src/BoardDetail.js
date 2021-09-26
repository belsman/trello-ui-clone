import React, { useState } from "react";
import { useSelector } from 'react-redux';
import BoardNav from "./BoardNav";
import styles from "./boardDetail.module.css";
import Header from "./Header";
import BoardListItem from "./BoardListItem";
import AddListButton from "./AddListButton";

function BoardDetail({ match }) {
  const { boardId } = match.params;

  const board = useSelector(state => state.boards.data
    .find(board => board.id === Number(boardId)));

  if (!board) {
    return (
      <section>
        <h2>Board Not Found!</h2>
      </section>
    );
  }
  // TODO: GET THE MATCHING ID
  // USE THE ID TO GET THE BOARD FROM THE STORE BOARDLIST
    // Ideally, we should requests from server
    // and only use the list when there is a network connection error!
  // IF !NO BOARD; THEN YOU WILL HAVE TO SHOW NO BOARD FOUND

  const lists = board.lists;
  const renderedLists = lists.map(
    list => <BoardListItem key={list.id} list={list} />
  );

  return (
    <div className={styles.rootDetail}>
      <Header />
      <BoardNav />
      <main className={styles.board}>
        <div className={styles.boardLists}>
          {renderedLists}
        </div>
        <div className="create-list" className={styles.createBoard}>
          <AddListButton />
        </div>
      </main>
    </div>
  );
}

export default BoardDetail;
