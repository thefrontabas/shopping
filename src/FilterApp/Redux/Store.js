import { configureStore } from "@reduxjs/toolkit";
import filterReducer from "./Filter";

const store = configureStore({
  reducer: {
    filter: filterReducer,
  },
});

export default store;
