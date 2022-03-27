import {configureStore} from '@reduxjs/toolkit';
import reducer from './reducer';
import {citiesApi} from "../services/citiesService";

export const store = configureStore({
    reducer, middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(citiesApi.middleware),
});
export type IStore = ReturnType<typeof store.getState>;