import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from "axios";

const initialState = {
  user: {},
  status: 'idle',
  error: null
};

// const baseUrl = "https://murmuring-brushlands-24573.herokuapp.com"; 
const baseUrl = "http://localhost:8000";// use local server based on the process.env
const storeName = "brello";

export const fetchUser = createAsyncThunk(
  'auth/fetchUser',
  async () => {
    const { data } = await axios
    .get(`${baseUrl}/auth-user/`, {
      headers: {
        'Authorization': `token ${localStorage.getItem(storeName)}`
      }
    });
    return data;
  }
);

export const login = createAsyncThunk(
  'auth/logIn',
  async (credentials) => {
    const { data } = await axios.post(`${baseUrl}/login/`, credentials);
    localStorage.setItem(storeName, data.token);
    return data;
  }
);

export const register = createAsyncThunk(
  'auth/Register',
  async (credentials) => {
    const { data } = await axios.post(`${baseUrl}/register/`, credentials);
    localStorage.setItem(storeName, data.token);
    return data;
  }
);

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    clearOnLogout: state => {
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUser.pending, (state, action) => {
        state.status = 'loading';
      })
      .addCase(fetchUser.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.user = action.payload;
      })
      .addCase(fetchUser.rejected, (state, action) => {
        state.status = 'failure';
        state.error = action.error.message;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.user = action.payload;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.user = action.payload;
      })
  },
});


export const { clearOnLogout } = authSlice.actions;

export default authSlice.reducer;
