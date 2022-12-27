import { configureStore } from '@reduxjs/toolkit';
import { contactsApi } from './services/contactsApi';
import { setupListeners } from '@reduxjs/toolkit/query';
import { filterReducer } from './filterSlice';

export const store = configureStore({
  reducer: {
    filter: filterReducer,
    [contactsApi.reducerPath]: contactsApi.reducer,
  },

  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(contactsApi.middleware),
});

setupListeners(store.dispatch);
