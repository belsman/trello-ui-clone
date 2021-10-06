import React, { useEffect, useState } from "react";
import { useSelector } from 'react-redux';
import { DragDropContext } from "react-beautiful-dnd";
import BoardNav from "../../BoardNav";
import styles from "./boardDetail.module.css";
import Header from "../../Header";
import Column from "./Column";
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

  const { lists_order: listsOrder, lists } = board;

  const renderedColumns = listsOrder.map((listId, index) => {
    const list = lists.find(item => item.id === listId);
    return (
      <Column
        key={list.id}
        list={list}
        selectedCardComposerId={selectedCardComposerId}
        setSelectedCardComposerId={setSelectedCardComposerId}
      />
    );
  });

  const onDragEndHandler = result => { /* TODO:Reorder our items  */};

  return (
    <div className={styles.rootDetail} onClick={handleOuterClick}>
      <Header />
      <BoardNav />
      <main className={styles.board}>
        <div className={styles.boardLists}>
          <DragDropContext
            onDragEnd={onDragEndHandler}
          >
            {renderedColumns}
          </DragDropContext>
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
