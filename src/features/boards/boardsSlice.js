import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from "axios";

const initialState = {
  data: [],
  status: 'idle',
  error: null
};

//const baseUrl = 'https://murmuring-brushlands-24573.herokuapp.com';
const baseUrl = 'http://localhost:8000';
const storeName = "brello";

export const fetchBoards = createAsyncThunk("boards/fetchBoard", async () => {
    const { data } = await axios
      .get(`${baseUrl}/boards/`, {
        headers: {
          'Authorization': `token ${localStorage.getItem(storeName)}`
        }
      });
    return data;
});

export const addNewBoard = createAsyncThunk(
  "boards/addNewBoard",
  async initialPost => {
    const { data } = await axios
      .post(`${baseUrl}/boards/`, initialPost, {
        headers: {
          'Authorization': `token ${localStorage.getItem(storeName)}`
        }
      });
    return data;
  }
);

export const addNewList = createAsyncThunk(
  "boards/addNewList",
  async initialPost => {
    const { data } = await axios
      .post(`${baseUrl}/lists/`, initialPost, {
        headers: {
          'Authorization': `token ${localStorage.getItem(storeName)}`
        }
      });
    return data;
  }
);

export const addNewCard = createAsyncThunk(
  "boards/addNewCard",
  async initialPost => {
    const { data } = await axios
      .post(`${baseUrl}/cards/`, initialPost, {
        headers: {
          'Authorization': `token ${localStorage.getItem(storeName)}`
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
      .patch(`${baseUrl}/cards/${cardId}/`, initialPost, {
        headers: {
          'Authorization': `token ${localStorage.getItem(storeName)}`
        }
      });
    return data;
  }
);

export const deleteCard = createAsyncThunk(
  "boards/deleteCard",
  async initialPost => {
    await axios
      .delete(`${baseUrl}/cards/${initialPost.id}/`, {
        headers: {
          'Authorization': `token ${localStorage.getItem(storeName)}`
        }
      });
    return initialPost;
  }
);


const boardsSlice = createSlice({
  name: 'boards',
  initialState,
  reducers: {
    reOrderCardInList: (state, action) => {
      const { payload } = action;
      const { boardId, listId, newCardsOrder } = payload;
      const board = state.data.find(board => board.id === boardId);
      const list = board.lists.find(list => list.id === listId);
      list.cards_order = newCardsOrder;
    },
    reOrderCardBetweenLists: (state, action) => {
      const { payload } = action;
      const { boardId, source, destination } = payload;

      const board = state.data.find(board => board.id === boardId);

      const sourceList = board.lists.find(list => list.id === source.listId);
      sourceList.cards_order = source.cardsOrder;
      sourceList.cards = source.cards;

      const destinationList = board.lists.find(list => list.id === destination.listId);
      destinationList.cards_order = destination.cardsOrder;
      destinationList.cards = destination.cards;
    },
    reOrderList: (state, action) => {
      const { payload } = action;
      const { boardId, newListsOrder } = payload;
      const board = state.data.find(board => board.id === boardId);
      board.lists_order = newListsOrder;
    }
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

export const { reOrderCardInList, reOrderCardBetweenLists, reOrderList } = boardsSlice.actions;

export const selectBoardById = (state, boardId) => state.boards.data.find(board => board.id === boardId);

export const reOrderListThunk = payload => (dispatch, getState) => {
  const { boardId, result } = payload;
  const { draggableId, source, destination } = result;

  const board = selectBoardById(getState(), boardId);
  const newListsOrder = Array.from(board.lists_order);

  const list = board.lists.find(list => `column-${list.id}` === draggableId);

  newListsOrder.splice(source.index, 1);
  newListsOrder.splice(destination.index, 0, list.id);

  dispatch(reOrderList({
    boardId: board.id,
    newListsOrder
  }));

  // notify server!
};

export const reOrderCardThunk = payload => (dispatch, getState) => {
  const { boardId, result } = payload;
  const { draggableId, source, destination } = result;

  const board = selectBoardById(getState(), boardId);

  const sourceColumn = board.lists.find(list => `column-${list.id}` === source.droppableId);
  const destinationColumn = board.lists.find(
    list => `column-${list.id}` === destination.droppableId);

  const draggedCard = sourceColumn.cards.find(card => `card-${card.id}` === draggableId);

  if (sourceColumn === destinationColumn) {
    const newCardsOrder = Array.from(sourceColumn.cards_order);
    newCardsOrder.splice(source.index, 1);
    newCardsOrder.splice(destination.index, 0, draggedCard.id);

    dispatch(reOrderCardInList({
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

    const card = newSourceCards.find(card => `card-${card.id}` === draggableId);
    
    const cardIndex = newSourceCards.indexOf(card);
    newSourceCards.splice(cardIndex, 1);
    
    const newDestinationCards = Array.from(destinationColumn.cards);
    const newDestinationCardsOrder = Array.from(destinationCardsOrder);

    newDestinationCardsOrder.splice(destination.index, 0, card.id);
    newDestinationCards.push(card);

    const reOrderedPayload = {
      boardId: board.id,
      source: {
        listId: sourceColumn.id,
        cardsOrder: newSourceCardsOrder,
        cards: newSourceCards
      },
      destination: {
        listId: destinationColumn.id,
        cardsOrder: newDestinationCardsOrder,
        cards: newDestinationCards
      }
    }

    dispatch(reOrderCardBetweenLists(reOrderedPayload));
  }

  // notify server!
};

export default boardsSlice.reducer;

export const selectAllBoard = state => state.boards.data;
