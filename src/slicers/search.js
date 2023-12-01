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
    selectedUser: []
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
      state.page = 1;
    },
    updateDomain: (state, action) => {
      state.domain = action.payload;
      state.page = 1;
    },
    updateGender: (state, action) => {
      state.gender = action.payload;
      state.page = 1;
    },
    updateAvailable: (state, action) => {
      state.available = action.payload;
      state.page = 1;
    },
    addTeamMember: (state, action) => {
      // Check if the user is already added
      const user = state.selectedUser.find(
        (user) => user.id === action.payload.id
      );
      if (user) return;
      state.selectedUser.push(action.payload);
    },
    removeTeamMember: (state, action) => {
      state.selectedUser = state.selectedUser.filter(
        (user) => user.id !== action.payload.id
      );
    },
    clearTeamMembers: (state) => {
      state.selectedUser = [];
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  increasePage,
  decreasePage,
  updateAvailable,
  updateDomain,
  updateGender,
  updateName,
  addTeamMember,
  removeTeamMember,
  clearTeamMembers
} = usersSlice.actions;

export default usersSlice.reducer;
