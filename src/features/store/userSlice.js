import { createSlice } from '@reduxjs/toolkit';


export const userSlice = createSlice({
  name: 'user',
  initialState:{
      user:null
  },
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
            login : (state,action) =>
            {
              state.user=action.payload
            },
            logout : (state) =>
            {
              state.user = null
            }

    
  },
});


export const userActions  = userSlice.actions;



export default userSlice;
