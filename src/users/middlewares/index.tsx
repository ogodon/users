import { PayloadAction } from "@reduxjs/toolkit";
import { Middleware, MiddlewareAPI, Dispatch, Action } from "redux";
import { load } from '../slices/usersSlice';

const fetchUsers = async (store: any) => {
  const response = await fetch('https://randomuser.me/api/?results=20');
  const json = await response.json();
  store.dispatch(load(json.results));
};

const usersMiddleware:Middleware = (store: MiddlewareAPI) => (next: Dispatch) => (action: Action) => {
  console.log(action, store.getState());
  if(action.type === 'users/get') {
    fetchUsers(store);
  }
  if(action.type === 'users/update') {
    setTimeout(() => {
      store.dispatch({ type: 'users/check', payload: (action as PayloadAction).payload });
    }, 0);
  }
  return next(action);
};

export default usersMiddleware;