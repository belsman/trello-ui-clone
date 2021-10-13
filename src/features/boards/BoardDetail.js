import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { DragDropContext } from "react-beautiful-dnd";
import BoardNav from "../../BoardNav";
import styles from "./boardDetail.module.css";
import Header from "../../Header";
import Column from "./Column";
import AddListButton from "./AddListButton";
import ListComposer from "./ListComposer";
import { reOrderList } from './boardsSlice';

function BoardDetail({ match }) {
  const dispatch = useDispatch();
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

  const { name: boardName, lists_order: listsOrder, lists } = board;

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

  const onDragEndHandler = result => {
    const { draggableId, source, destination, type } = result;

    if (!destination) {
      return;
    }

    if (source.droppableId === destination.droppableId &&
        source.index === destination.index) {
          return;
        }
    
    const sourceColumn = board.lists.find( list => list.id === Number(source.droppableId));

    const destinationColumn = board.lists.find(
      list => list.id === Number(destination.droppableId));

    if (sourceColumn === destinationColumn) {
      const newCardsOrder = Array.from(sourceColumn.cards_order);
      newCardsOrder.splice(source.index, 1);
      newCardsOrder.splice(destination.index, 0, Number(draggableId));

      dispatch(reOrderList({
        boardId: board.id,
        listId: sourceColumn.id,
        newCardsOrder
      }));
      /*
        reOrderCardOnServer({
          boardId,
          source: { cardIndex: 0, columnId},
          destination: { cardIndex: 0, columnId }
        })
      */
      return;
    }
  };

  return (
    <div className={styles.rootDetail} onClick={handleOuterClick}>
      <Header />
      <BoardNav boardName={boardName} />
      <main className={styles.board}>
        <div className={styles.boardLists}>
          <DragDropContext
            onDragEnd={onDragEndHandler}
          >
            {renderedColumns}
          </DragDropContext>
          <div className={styles.createBoard}>
            { 
              showAddListComposer ? 
              <ListComposer
                boardId={boardId}
                onCancel={() => setShowAddListComposer(false)}
              />
              :
              <AddListButton onClick={() => setShowAddListComposer(true)} />
            }
          </div>
        </div>
      </main>
    </div>
  );
}

export default BoardDetail;
