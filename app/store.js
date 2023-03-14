// src/redux/store.js
import { configureStore } from "@reduxjs/toolkit";
import user from "@/store/slices/user";
import product from "@/store/slices/product";
import storage from "redux-persist/lib/storage";
import { persistCombineReducers, persistStore } from "redux-persist";
import thunk from "redux-thunk";

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistCombineReducers(persistConfig, {
  user,
  product,
});

export const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== "production",
  middleware: [thunk],
});

export const persistor = persistStore(store);
