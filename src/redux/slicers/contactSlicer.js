// import { createSlice } from '@reduxjs/toolkit';
// import { fetchContacts, addContact, deleteContact } from '../operations';

// const contactsSlice = createSlice({
//   name: 'contacts',

//   initialState: {
//     contacts: [],
//     isLoading: false,
//     error: null,
//   },

//   extraReducers: {
//     [fetchContacts.pending](state) {
//       state.isLoading = true;
//     },

//     [fetchContacts.fulfilled](state, action) {
//       state.isLoading = false;
//       state.error = null;
//       state.contacts = action.payload;
//     },

//     [fetchContacts.rejected](state, action) {
//       state.isLoading = false;
//       state.error = action.payload;
//     },

//     [addContact.fulfilled](state, action) {
//       state.contacts.push(action.payload);
//     },

//     [deleteContact.fulfilled](state, action) {
//       const contactId = action.payload;
//       state.contacts = state.contacts.filter(
//         contact => contact.id !== contactId.id
//       );
//     },
//   },
// });

// export const contactReducer = contactsSlice.reducer;


import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact } from '../operations';

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: builder =>
    builder
      .addCase(fetchContacts.pending, (state, action) => handlePending(state))
      .addCase(addContact.pending, (state, action) => handlePending(state))
      .addCase(deleteContact.pending, (state, action) => handlePending(state))
      .addCase(fetchContacts.rejected, (state, action) =>
        handleRejected(state, action)
      )
      .addCase(addContact.rejected, (state, action) =>
        handleRejected(state, action)
      )
      .addCase(deleteContact.rejected, (state, action) =>
        handleRejected(state, action)
      )
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = action.payload;
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.items.push(action.payload);
        state.isLoading = false;
        state.error = null;
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = state.items.filter(
          contact => contact.id !== action.payload.id
        );
      }),
});

 export const contactReducer = contactsSlice.reducer;