import { createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import { DropDownInitialState, DropDownState, RootStateDropDown } from "../../types/interface";


const initialState: DropDownInitialState = {
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
  state?.dropDown?.dropDownValue;

// export const selectDropDownValue = useSelector(
//   (state: RootStateDropDown) => state?.dropDown.dropDownValue
// );

export default dropDownSlice.reducer;
