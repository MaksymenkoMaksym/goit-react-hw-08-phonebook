import { createAsyncThunk } from '@reduxjs/toolkit';
// import axiosAuth from 'axiosAuth';
import { axiosAuth } from './authOperation';

// axiosAuth.defaults.baseURL = 'https://633bc7a4f11701a65f682164.mockapi.io/contacts';

export const fetchTasks = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await axiosAuth.get('/contacts');
      // При успешном запросе возвращаем промис с данными
      return response.data;
    } catch (e) {
      // При ошибке запроса возвращаем промис
      // который будет отклонен с текстом ошибки
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

export const findByName = createAsyncThunk(
  'contacts/findByName',
  async (name, thunkAPI) => {
    try {
      if (!name) {
        return '';
      }
      const response = await axiosAuth.get(`/contacts?name=${name}`);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
