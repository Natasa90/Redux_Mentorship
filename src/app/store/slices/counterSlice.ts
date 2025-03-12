import { createSlice } from "@reduxjs/toolkit";  //function for creating reducers and actions

const counterSlice = createSlice({   // a slice - piece of overall application state
  name: "counter",    // in redux store, this slice will be stored under state.counter
  initialState: { value: 0 },
  reducers: {     //this key contains functions that update the state
    increment: (state) => {
      state.value += 1;   //directly modyfing state.value 
    },
    decrement: (state) => {
      state.value -= 1;
    },
  },
});

export const { increment, decrement } = counterSlice.actions; 
export default counterSlice.reducer; 
