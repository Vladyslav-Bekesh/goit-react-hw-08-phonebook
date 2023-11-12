import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { TContact } from '../types/contacts';
axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';

type TGetQuerries = () => void;
type TAddContact = (contact:TContact) => void;
type TDeleteContact = (id: string) => void;

export const fetchContacts: TGetQuerries = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/contacts');
      return response.data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addContact: TAddContact = createAsyncThunk(
  'contacts/addContacts',
  async (contact, thunkAPI) => {
    try {
      const response = await axios.post('/contacts', contact);
      return response.data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteContact: TDeleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (contactId, thunkAPI) => {
    try {
      const response = await axios.delete(`/contacts/${contactId}`);
      return response.data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
