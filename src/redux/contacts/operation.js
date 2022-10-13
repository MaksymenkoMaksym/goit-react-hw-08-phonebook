import { createAsyncThunk } from '@reduxjs/toolkit';
import { axiosAuth } from '../auth/authOperation';

export const fetchTasks = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await axiosAuth.get('/contacts');

      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (contactID, thunkAPI) => {
    try {
      const response = await axiosAuth.delete(`/contacts/${contactID}`);

      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (contact, thunkAPI) => {
    try {
      const response = await axiosAuth.post(`/contacts`, contact);

      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
export const updateContact = createAsyncThunk(
  'contacts/updateContact',
  async ({ id, ...contact }, thunkAPI) => {
    try {
      const response = await axiosAuth.patch(`/contacts/${id}`, contact);

      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
export const findByName = () => {};
