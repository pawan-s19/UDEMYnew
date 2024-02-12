import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const initialState = {
  createdCourse: null,
  collectedData: null,
  courses: null,
  error: null,
  loading: false,
  canNavigate: false,
};

export const userSlice = createSlice({
  name: "courseSlice",
  initialState,
  reducers: {
    collectData: (state, action) => {
      state.collectedData = { ...state.collectedData, ...action.payload };
      console.log(state.collectedData);
    },
    createCourse: (state, action) => {
      state.createdCourse = action.payload;
      console.log(state.createdCourse);
    },
    allCourse: (state, action) => {
      state.courses = action.payload;
    },
    error: (state, action) => {
      state.error = action.payload;
    },
    clearError: (state) => {
      state.error = null;
    },
    loading: (state, action) => {
      state.loading = action.payload;
    },
    canNavigate: (state, action) => {
      state.canNavigate = action.payload;
    },
  },
});
export const {
  collectData,
  createCourse,
  allCourse,
  error,
  clearError,
  loading,
  canNavigate,
} = userSlice.actions;

export default userSlice.reducer;

export const createCourseAsync = (courseInputData) => async (dispatch) => {
  try {
    dispatch(loading(true));
    let { data } = await axios.post("/create/course", courseInputData);
    dispatch(createCourse(data));
    dispatch(loading(false));
    dispatch(canNavigate(true));
  } catch (err) {
    dispatch(loading(false));
    dispatch(error(err.response.data.message));
  }
};

export const allCourses = () => async (dispatch) => {
  let { data } = await axios.get("/all/course");

  dispatch(allCourse(data));
};
