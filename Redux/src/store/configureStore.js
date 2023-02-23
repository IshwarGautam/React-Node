import { configureStore } from "@reduxjs/toolkit";
import studentReducer from "./student";
import collegeReducer from "./college";

const store = configureStore({
  reducer: {
    students: studentReducer,
    college: collegeReducer,
  },
});

export default store;
