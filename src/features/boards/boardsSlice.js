import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from "axios";

const initialState = {
  data: [],
  status: 'idle',
  error: null
};

export const fetchBoards = createAsyncThunk("boards/fetchBoard", async () => {
    const { data } = await axios
      .get("http://localhost:8000/boards/", {
        headers: {
          'Authorization': `token ${localStorage.getItem("brello")}`
        }
      });
    return data;
});

export const addNewBoard = createAsyncThunk(
  "boards/addNewBoard",
  async initialPost => {
    const { data } = await axios
      .post("http://localhost:8000/boards/", initialPost, {
        headers: {
          'Authorization': `token ${localStorage.getItem("brello")}`
        }
      });
    return data;
  }
);

export const addNewList = createAsyncThunk(
  "boards/addNewList",
  async initialPost => {
    const { data } = await axios
      .post("http://localhost:8000/lists/", initialPost, {
        headers: {
          'Authorization': `token ${localStorage.getItem("brello")}`
        }
      });
    return data;
  }
);

export const addNewCard = createAsyncThunk(
  "boards/addNewCard",
  async initialPost => {
    const { data } = await axios
      .post("http://localhost:8000/cards/", initialPost, {
        headers: {
          'Authorization': `token ${localStorage.getItem("brello")}`
        }
      });
    return data;
  }
);


export const editCard = createAsyncThunk(
  "boards/editCard",
  async initialPost => {
    const { cardId } = initialPost;
    const { data } = await axios
      .patch(`http://localhost:8000/cards/${cardId}/`, initialPost, {
        headers: {
          'Authorization': `token ${localStorage.getItem("brello")}`
        }
      });
    return data;
  }
);

export const deleteCard = createAsyncThunk(
  "boards/deleteCard",
  async initialPost => {
    await axios
      .delete(`http://localhost:8000/cards/${initialPost.id}/`, {
        headers: {
          'Authorization': `token ${localStorage.getItem("brello")}`
        }
      });
    return initialPost;
  }
);


const boardsSlice = createSlice({
  name: 'boards',
  initialState,
  reducers: {
    reOrderList: (state, action) => {
      const { payload } = action;
      const { boardId, listId, newCardsOrder } = payload;
      const board = state.data.find(board => board.id === boardId);
      const list = board.lists.find(list => list.id === listId);
      list.cards_order = newCardsOrder;
    },
  },
  extraReducers: {
    [fetchBoards.pending]: (state) => {
      state.status = 'loading';
    },
    [fetchBoards.fulfilled]: (state, action) => {
      state.status = 'succeeded';
      state.data = state.data.concat(action.payload);
    },
    [fetchBoards.rejected]: (state, action) => {
      state.status = 'failure';
      state.error = action.error.message;
    },

    [addNewBoard.fulfilled]: (state, action) => {
      state.data.push(action.payload);
    },

    [addNewList.fulfilled]: (state, action) => {
      const { payload } = action;
      const board = state.data.find(board => board.id === payload.board);
      board.lists.push(payload);
      board.lists_order.push(payload.id);
    },

    [addNewCard.fulfilled]: (state, action) => {
      const { payload } = action;
      const board = state.data.find(board => board.id === payload.board);
      const list = board.lists.find(list => list.id === payload.list);
      list.cards.push(payload);
      list.cards_order.push(payload.id);
    },
    [editCard.fulfilled]: (state, action) => {
      const { payload } = action;
      const board = state.data.find(board => board.id === payload.board);
      const list = board.lists.find(list => list.id === payload.list);
      const cardIndex = list.cards.findIndex(card => card.id === payload.id);
      list.cards[cardIndex] = payload;
    },
    [deleteCard.fulfilled]: (state, action) => {
      const { payload } = action;
      const board = state.data.find(board => board.id === payload.board);
      const list = board.lists.find(list => list.id === payload.list);
      const cardIndex = list.cards.findIndex(card => card.id === payload.id);
      list.cards_order.splice(cardIndex, 1);
      list.cards.splice(cardIndex, 1);
    },
  }
});

export const selectBoardById = (state, boardId) => state.boards.data.find(board => board.id === boardId);

export const reOrderCardThunk = payload => (dispatch, getState) => {
  const { boardId, result } = payload;
  const { draggableId, source, destination, type } = result;

  const board = selectBoardById(getState(), boardId);

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
  } else {
    const { cards_order: sourceCardsOrder } = sourceColumn;
    const { cards_order: destinationCardsOrder } = destinationColumn;

    const newSourceCards = Array.from(sourceColumn.cards);
    const newSourceCardsOrder = Array.from(sourceCardsOrder);
    newSourceCardsOrder.splice(source.index, 1);
    const card = sourceColumn.cards[source.index];
    const cardCopy = { ...card }
    // remove the card from the list.car
    // dispatch newCardsOrder on lists
    // dispatch newCards OnList

    const newDestinationCards = Array.from(destinationColumn.cards);
    const newDestinationCardsOrder = Array.from(destinationCardsOrder);
    newDestinationCardsOrder.splice(destination.index, 0, draggableId);
    newDestinationCards.push(cardCopy);

    // dispatch newCardsOrder on lists
    // dispatch newCards OnList
    
  }

  // const currentValue = selectCount(getState());
  // if (currentValue % 2 === 1) {
  //   dispatch(incrementByAmount(amount));
  // }
};


export const { reOrderList } = boardsSlice.actions;

export default boardsSlice.reducer;

export const selectAllBoard = state => state.boards.data;


// export const selectPostById = (state, postId) => state.posts.posts.find(post => post.id === postId);
    