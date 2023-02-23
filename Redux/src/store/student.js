import { createSlice } from "@reduxjs/toolkit";
let id = 0;

const studentSlice = createSlice({
  name: "students",
  initialState: [],
  reducers: {
    addStudent: (state, action) => {
      state.push({ id: ++id, name: action.payload.name });
    },

    removeStudent: (state, action) => {
      const index = state.findIndex((stu) => stu.id === action.payload.id);
      state.splice(index, 1);
    },
  },
});

export const { addStudent, removeStudent } = studentSlice.actions;
export default studentSlice.reducer;
