import { IState } from '../types/state';

export const selectContacts = (state: IState) => {
  return state.contacts.items;
};

export const selectIsLoading = (state: IState) => {
  return state.contacts.isLoading;
};

export const selectError = (state: IState) => {
  return state.contacts.error;
};

export const selectFilter = (state: IState) => {
  return state.filter.filter;
};
