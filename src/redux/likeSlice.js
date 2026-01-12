import { createSlice } from "@reduxjs/toolkit";

const likeSlice = createSlice({
  name: "like",
  initialState: {
    likedItems: [],
  },
  reducers: {
    toggleLike(state, action) {
      const exists = state.likedItems.find(i => i.id === action.payload.id);
      if (exists) {
        state.likedItems = state.likedItems.filter(i => i.id !== action.payload.id);
      } else {
        state.likedItems.push(action.payload);
      }
    },
  },
});

export const { toggleLike } = likeSlice.actions;
export default likeSlice.reducer;
