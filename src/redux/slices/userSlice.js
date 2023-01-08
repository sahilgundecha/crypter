import { createSlice } from "@reduxjs/toolkit";

const initialData = {
  isLoggedIn: false,
};

const userSlice = createSlice({
  name: "user-authentication",
  initialState: initialData,
  reducers: {
    logIn: (state) => {
      return {
        ...state,
        isLoggedIn: true,
      };
    },
    logOut (state)  {
      return {
        ...state,
        isLoggedIn: false,
      };
    },
  },
});

export const { logIn, logOut } = userSlice.actions;
export default userSlice.reducer;
