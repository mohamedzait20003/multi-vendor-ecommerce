// Libraries
import { configureStore } from '@reduxjs/toolkit';

// Slices Import
import { apiSlice } from '../api/apiSlice';
import authUserReducer from '../features/AuthUser';

// Configure Store
export const store = configureStore({
    reducer: {
        [apiSlice.reducerPath]: apiSlice.reducer,
        AuthUser: authUserReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(apiSlice.middleware),
    devTools: true
});
