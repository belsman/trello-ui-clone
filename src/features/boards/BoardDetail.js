import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import BoardNav from "../../BoardNav";
import styles from "./boardDetail.module.css";
import Header from "../../Header";
import Column from "./Column";
import AddListButton from "./AddListButton";
import ListComposer from "./ListComposer";
import { reOrderCardThunk } from './boardsSlice';

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
        index={index}
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
    

    dispatch(reOrderCardThunk({ boardId: board.id, result}));
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
            <Droppable droppableId="all-columns" direction="horizontal" type="column">
            {
              provided => (
                <div
                  className={styles.lists}
                  {...provided.droppableProps}
                  ref={provided.innerRef}
                >
                  {renderedColumns}
                  {provided.placeholder}
                </div>
              )
            }
            </Droppable>
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
