import { createSlice } from "@reduxjs/toolkit";

export const modalSlice = createSlice({
    name: 'modal',
    initialState:{
        isModal:false   
    },
    // The `reducers` field lets us define reducers and generate associated actions
    reducers: {
            OpenModal : (state) =>
            {
                state.isModal=true;
            },
            closeModal : (state) =>
            {
                state.isModal=false;
            }
  
      
    },
  });
  
  
  export const modalActions  = modalSlice.actions;
  
  
  
  export default modalSlice;
  