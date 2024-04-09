import { createSlice } from "@reduxjs/toolkit";

interface DropDownState {
  dropDownValue: string;
}

const initialState: DropDownState = {
  dropDownValue: "movie",
};

export const dropDownSlice = createSlice({
  name: "dropDown",
  initialState,
  reducers: {
    setDropDownValue: (state, action) => {
      state.dropDownValue = action.payload === "movie" ? "movie" : "tv";
    },
  },
});

export const { setDropDownValue } = dropDownSlice.actions;
export const selectDropDownValue = (state: DropDownState) =>
  state.dropDownValue;

export default dropDownSlice.reducer;
