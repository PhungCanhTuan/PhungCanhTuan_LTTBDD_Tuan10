// redux/slices/userSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Thunk để fetch users từ API
export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
  const response = await axios.get('https://67055f04031fd46a830fb4fb.mockapi.io/users');
  return response.data;
});

// Thunk để thêm user
export const addUser = createAsyncThunk('users/addUser', async (user) => {
  const response = await axios.post('https://67055f04031fd46a830fb4fb.mockapi.io/users', { content: user });
  return response.data;
});

// Thunk để xóa user
export const deleteUser = createAsyncThunk('users/deleteUser', async (id) => {
  await axios.delete(`https://67055f04031fd46a830fb4fb.mockapi.io/users/${id}`);
  return id; // Trả về id để xóa khỏi state
});

// Tạo slice
const userSlice = createSlice({
  name: 'users',
  initialState: {
    users: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.users = action.payload;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(addUser.fulfilled, (state, action) => {
        state.users.push(action.payload);
      })
      .addCase(deleteUser.fulfilled, (state, action) => {
        state.users = state.users.filter(user => user.id !== action.payload);
      });
  },
});

// Xuất reducer
export default userSlice.reducer;
