import { TContacts } from './contacts';

export interface IError {
  error: { message: string };
}
export interface IAuth {
  user: string;
  token: string;
  isLoggedIn: boolean;
  isRefreshing: boolean;
}

export interface IItem {
  error: IError;
  items: TContacts;
  isLoading: boolean;
}
export interface IState {
  contacts: IItem;
  auth: IAuth;
  filter: {
    filter: string;
  };
}
