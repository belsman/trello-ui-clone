import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from "axios";

const initialState = {};

const baseUrl = "https://murmuring-brushlands-24573.herokuapp.com";
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

export const logout = createAsyncThunk(
  `auth/logout`,
  async () => localStorage.removeItem(storeName)
);

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchUser.fulfilled, (state, action) => {
        return action.payload;
      })
      .addCase(login.fulfilled, (state, action) => {
        return action.payload;
      })
      .addCase(register.fulfilled, (state, action) => {
        return action.payload;
      })
      .addCase(logout.fulfilled, (state, action) => {
        return {}
      })
  },
});

export default authSlice.reducer;
