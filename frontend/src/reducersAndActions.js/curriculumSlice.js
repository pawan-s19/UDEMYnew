import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { createCourse } from "./courseSlice";
const initialState = {};

export const curriculumSlice = createSlice({
  name: "curriculumSlice",
  initialState,
  reducers: {
    loading: (state, action) => {
      state.loading = action.payload;
    },
  },
});
export const { loading } = curriculumSlice.actions;

export default curriculumSlice.reducer;

export const createSection = (sectionData) => async (dispatch) => {
  let { data } = await axios.post("/create/section", sectionData);
  dispatch(createCourse(data));
  console.log(data);
};
