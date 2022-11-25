import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: { token: null, username: null },
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    signIn: (state, action) => {
      state.value = {token:action.payload.token,username:action.payload.username}
      
    },
    signOut: (state) => {
      state.value = { token: null, username: null }
      
    },
  },
});

export const { signIn,signOut} = userSlice.actions;
export default userSlice.reducer;