import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./feauters/auth/authSlice";
import { baseApi } from "./api/baseApi";
import {persistReducer, persistStore,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,} from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
    key: 'auth',
    storage
}

const persisReducer = persistReducer(persistConfig, authSlice)
const store = configureStore({
    reducer: {
        [baseApi.reducerPath]: baseApi.reducer,
        auth: persisReducer,
    },

    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
              },
        }).concat(baseApi.middleware),
})



export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store

export const persiStore = persistStore(store)