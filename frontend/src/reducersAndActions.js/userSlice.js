import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const initialState = {
  user: "",
  isAuthenticated: false,
  error: null,
  loading: false,
};

export const userSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {
    register: (state, action) => {
      state.user = action.payload.user;
      state.isAuthenticated = true;
      state.error = null;
    },
    login: (state, action) => {
      state.user = action.payload.user;
      state.isAuthenticated = true;
      state.error = null;
    },
    loadUser: (state, action) => {
      if (action.payload) {
        state.user = action.payload;
        state.isAuthenticated = true;
        state.error = null;
      }
    },
    logOut: (state, action) => {
      state.user = null;
      state.isAuthenticated = false;
    },
    clearErrors: (state, action) => {
      state.error = null;
    },
    errors: (state, action) => {
      state.user = null;
      state.isAuthenticated = false;
      state.error = action.payload;
      console.log(action.payload);
    },
    loading: (state, action) => {
      state.loading = action.payload;
    },
  },
});
export const {
  register,
  login,
  loadUser,
  logOut,
  clearErrors,
  errors,
  loading,
} = userSlice.actions;

export default userSlice.reducer;

export const signupAsync = (formData) => async (dispatch, getState) => {
  try {
    dispatch(loading(true));
    let userData = await axios.post("/registeruser", formData);

    dispatch(register(userData.data));
    dispatch(loading(false));
  } catch (err) {
    dispatch(loading(false));
    if (err.response.data.code) {
      dispatch(errors("User already exists"));
    } else {
      dispatch(errors(err.response.data.message));
    }
  }
};
export const loginAsync = (formData) => async (dispatch, getState) => {
  try {
    dispatch(loading(true));
    let userData = await axios.post("/login", formData);

    dispatch(login(userData.data));
    dispatch(loading(false));
  } catch (err) {
    dispatch(loading(false));
    console.log(err.response);
    if (err.response.data.code) {
      dispatch(errors("User already exists"));
    } else {
      dispatch(errors(err.response.data.message));
    }
  }
};
export const loadUserAsync = () => async (dispatch) => {
  try {
    let userData = await axios.get("/getuser");
    dispatch(loadUser(userData.data.user));
  } catch (err) {
    dispatch(loadUser(""));
  }
};

export const logOutAsync = () => async (dispatch) => {
  try {
    await axios.get("/logout");
    dispatch(logOut());
  } catch (err) {}
};
