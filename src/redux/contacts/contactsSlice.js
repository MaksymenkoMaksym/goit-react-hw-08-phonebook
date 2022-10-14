import { SatelliteAltOutlined } from '@mui/icons-material';
import { createSlice } from '@reduxjs/toolkit';
import {
  fetchTasks,
  deleteContact,
  addContact,
  updateContact,
} from './operation';

const pendingHandler = (state, action) => {
  state.contacts.isLoading = true;
  state.contacts.error = null;
};
const rejectedHandler = (state, action) => {
  state.contacts.isLoading = false;
  state.contacts.error = action.payload;
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    contacts: { items: [], isLoading: false, error: null },
    filter: '',
    editedContact: null,
  },
  reducers: {
    findByName(state, action) {
      state.filter = action.payload;
    },
    editContact(state, action) {
      console.log(action);
      state.editedContact = action.payload;
    },
  },
  extraReducers: {
    [fetchTasks.pending]: pendingHandler,
    [fetchTasks.rejected]: rejectedHandler,
    [deleteContact.pending]: pendingHandler,
    [deleteContact.rejected]: rejectedHandler,
    [addContact.pending]: pendingHandler,
    [addContact.rejected]: rejectedHandler,
    [updateContact.pending]: pendingHandler,
    [updateContact.rejected]: rejectedHandler,
    [updateContact.fulfilled](state, action) {
      state.contacts.isLoading = false;
      state.contacts.error = null;
      state.editedContact = null;
      state.contacts.items = state.contacts.items.map(el =>
        el.id === action.payload.id ? (el = action.payload) : el
      );
    },
    [addContact.fulfilled](state, action) {
      state.contacts.isLoading = false;
      state.contacts.error = null;
      state.contacts.items.push(action.payload);
    },
    [fetchTasks.fulfilled](state, action) {
      state.contacts.isLoading = false;
      state.contacts.error = null;
      state.contacts.items = action.payload;
    },
    [deleteContact.fulfilled](state, action) {
      state.contacts.isLoading = false;
      state.contacts.error = null;
      state.contacts.item = state.contacts.items.filter(
        el => el.id !== action.payload.id
      );
      // const i = state.contacts.items.findIndex(
      //   el => el.id === action.payload.id
      // );
      // state.contacts.items.splice(i, 1);
    },
  },
});
export const { findByName, editContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
