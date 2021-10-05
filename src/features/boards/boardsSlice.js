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

const boardsSlice = createSlice({
  name: 'boards',
  initialState,
  reducers: {},
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
      state.boards.push(action.payload);
    }

  }
});

// export const { postAdded, postUpdated, reactionAdded } = postsSlice.actions;

export default boardsSlice.reducer;

export const selectAllBoard = state => state.boards.data;

// export const selectPostById = (state, postId) => state.posts.posts.find(post => post.id === postId);
    