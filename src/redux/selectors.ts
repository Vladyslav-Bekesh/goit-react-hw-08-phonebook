import { TContacts } from '../types/contacts';
import { IState } from '../types/state';

export const selectContacts = (state: IState): TContacts => {
  return state.contacts.items;
};

export const selectIsLoading = (state: IState): boolean => {
  return state.contacts.isLoading;
};

export const selectError = (state: IState) => {
  return state.contacts.error;
};

export const selectFilter = (state: IState): string => {
  return state.filter.filter;
};
