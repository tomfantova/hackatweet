import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [],
};

export const tweetsSlice = createSlice({
  name: "tweets",
  initialState,
  reducers: {
    addTweet: (state, action) => {
      state.value.push(action.payload);
    },
    removeTweet: (state, action) => {
      state.value = state.value.filter(
        (tweet) => tweet.tweet !== action.payload.tweet
      );
    },
    removeAllTweets: (state) => {
      state.value = [];
    },
  },
});

export const { addTweet, removeTweet, removeAllTweets } = tweetsSlice.actions;
export default tweetsSlice.reducer;
