import { IState } from '../../types/state';

export const selectIsLoggedIn = (state:IState) => state.auth.isLoggedIn;

export const selectUser = (state:IState) => state.auth.user;

export const selectIsRefreshing = (state:IState) => state.auth.isRefreshing;
