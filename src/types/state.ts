import { TContacts } from './contacts';

export interface IState {
  contacts: {
    error: string;
    items: TContacts;
    isLoading: boolean;
  };
  filter: {
    filter: string;
  };
}
