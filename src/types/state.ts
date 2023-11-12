import { TContacts } from './contacts';

export interface IError {
  error: { message: string };
}
export interface IItem {
  error: IError;
  items: TContacts;
  isLoading: boolean;
}
export interface IState {
  contacts: IItem;
  filter: {
    filter: string;
  };
}
