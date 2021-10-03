import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from "axios";
// import dummy from "./dummy";

const initialState = {
  data: [],
  status: 'idle',
  error: null
};

export const fetchBoards = createAsyncThunk("boards/fetchBoard", async () => {
    const response = await axios.get("http://localhost:8000/boards/");
    const data = await response.data;
    return data;
});

// export const addNewPost = createAsyncThunk(
//   "posts/addNewPost",
//   async initialPost => {
//     const response = await client.post("/fakeApi/posts", { post: initialPost });
//     return response.post;
//   }
// );

const boardsSlice = createSlice({
  name: 'boards',
  initialState,
  reducers: {},
  extraReducers: {
    // [fetchBoards.pending]: (state) => {
    //   state.status = 'loading';
    // },
    // [fetchBoards.fulfilled]: (state, action) => {
    //   state.status = 'succeeded';
    //   state.data = state.data.concat(action.payload);
    // },
    // [fetchBoards.rejected]: (state, action) => {
    //   state.status = 'failed';
    //   state.error = action.error.message;
    // },

    // [addNewPost.fulfilled]: (state, action) => {
    //   state.posts.push(action.payload);
    // }

  }
});

// export const { postAdded, postUpdated, reactionAdded } = postsSlice.actions;

export default boardsSlice.reducer;

export const selectAllBoard = state => state.boards.data;

// export const selectPostById = (state, postId) => state.posts.posts.find(post => post.id === postId);
    