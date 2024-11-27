import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { id: 0, name: "Tony Stark" },
  { id: 1, name: "Bruce Banner" },
  { id: 2, name: "Tom Hanks" },
];

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
});

export const getAllUsers = (state) => state.users;

export default usersSlice.reducer;
