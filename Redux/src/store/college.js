import { createSlice } from "@reduxjs/toolkit";

const collegeSlice = createSlice({
  name: "college",
  initialState: [],
  reducers: {
    addCollege: (state, action) => {
      state.push({
        name: action.payload.name,
        location: action.payload.location,
      });
    },
  },
});

export const { addCollege } = collegeSlice.actions;
export default collegeSlice.reducer;
