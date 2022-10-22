import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};

export const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    filterSearch: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { filterSearch } = filterSlice.actions;

export default filterSlice.reducer;
