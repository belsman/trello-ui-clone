import React, { useEffect, useState } from "react";
import { useSelector } from 'react-redux';
import BoardNav from "./BoardNav";
import styles from "./boardDetail.module.css";
import Header from "./Header";
import BoardListItem from "./BoardListItem";
import AddListButton from "./AddListButton";
import ListComposer from "./ListComposer";

function BoardDetail({ match }) {
  const { boardId } = match.params;

  const [ showAddListComposer, setShowAddListComposer ] = useState(false);
  const [ selectedCardComposerId, setSelectedCardComposerId ] = useState('');

  const handleOuterClick = () => {
    showAddListComposer && setShowAddListComposer(false);
    selectedCardComposerId && setSelectedCardComposerId('');
  }

  const board = useSelector(state => state.boards.data
    .find(board => board.id === Number(boardId)));

  if (!board) {
    return (
      <section>
        <h2>Board Not Found!</h2>
      </section>
    );
  }

  const lists = board.lists;
  const renderedLists = lists.map(
    list => <BoardListItem
      key={list.id}
      list={list}
      selectedCardComposerId={selectedCardComposerId}
      setSelectedCardComposerId={setSelectedCardComposerId}
    />
  );

  return (
    <div className={styles.rootDetail} onClick={handleOuterClick}>
      <Header />
      <BoardNav />
      <main className={styles.board}>
        <div className={styles.boardLists}>
          {renderedLists}
        </div>
        <div className={styles.createBoard}>
          { 
            showAddListComposer ? 
            <ListComposer onCancel={() => setShowAddListComposer(false)} />
            :
            <AddListButton onClick={() => setShowAddListComposer(true)} />
          }
        </div>
      </main>
    </div>
  );
}

export default BoardDetail;
