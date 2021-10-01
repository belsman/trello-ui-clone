import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from "axios";

const initialState = {};

const baseUrl = "http://localhost:8000";
const storeName = "brello";

export const fetchUser = createAsyncThunk(
  'auth/fetchUser',
  async () => {
    const response = await axios.get(`${baseUrl}/auth-user/`);
    const data = await response.data;
    return data;
  }
);

export const login = createAsyncThunk(
  'auth/logIn',
  async (credentials) => {
    const response = await axios.post(`${baseUrl}/login/`, credentials);
    const data = await response.data;
    localStorage.setItem(storeName, data.token);
    return data;
  }
);

export const register = createAsyncThunk(
  'auth/Register',
  async (credentials) => {
    const response = await axios.post(`${baseUrl}/register/`, credentials);
    const data = await response.data;
    localStorage.setItem(storeName, data.token);
    return data;
  }
);

export const logout = createAsyncThunk(
  `${baseUrl}/logout`,
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
