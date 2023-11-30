import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "./slicers/search";
export default configureStore({
  reducer: {
    users: usersReducer,
  },
});
