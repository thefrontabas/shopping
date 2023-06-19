import { createSlice } from "@reduxjs/toolkit";

export const homeslice = createSlice({
  name: "filter",
  initialState: {
    value: {
      result: "",
      search: "",
      price: "",
      sneake: [],
      counter: 0,
      data: [],
      showmenu: false,
      showfilter: false,
    },
  },
  reducers: {
    mainfunc: (state, action) => {
      state.value.result = action.payload;
    },
    searchfunc: (state, action) => {
      state.value.search = action.payload;
    },
    pricefunc: (state, action) => {
      state.value.price = action.payload;
    },
    sneakfunc: (state, action) => {
      state.value.sneake.push(action.payload);
    },
    plusfunc: (state, action) => {
      state.value.counter = state.value.counter + 1;
    },
    datafunc: (state, action) => {
      state.value.data.push(action.payload);
    },
    menufunc: (state, action) => {
      state.value.showmenu = action.payload;
    },

    filterfunc: (state, action) => {
      state.value.showfilter = action.payload;
    },
  },
});

export const {
  mainfunc,
  searchfunc,
  sneakfunc,
  plusfunc,
  datafunc,
  pricefunc,
  menufunc,
  filterfunc,
} = homeslice.actions;

export default homeslice.reducer;
