import { createSlice } from "@reduxjs/toolkit";

export const usersSlice = createSlice({
  name: "users",
  initialState: {
    domain: "",
    gender: "",
    available: "",
    name: "",
    limit: 20,
    page: 1,
  },
  reducers: {
    increasePage: (state) => {
      state.page += 1;
    },
    decreasePage: (state) => {
      state.page -= 1;
    },
    updateName: (state, action) => {
      state.name = action.payload;
    },
    updateDomain: (state, action) => {
      state.domain = action.payload;
    },
    updateGender: (state, action) => {
      state.gender = action.payload;
    },
    updateAvailable: (state, action) => {
      state.available = action.payload;
    },
    setUsers: (state, action) => {
      state.users = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  increasePage,
  decreasePage,
  setUsers,
  updateAvailable,
  updateDomain,
  updateGender,
  updateName,
} = usersSlice.actions;

export default usersSlice.reducer;
