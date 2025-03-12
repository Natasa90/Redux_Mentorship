import { configureStore } from "@reduxjs/toolkit";
import counterReducer from './slices/counterSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;  // sharing the state across the app!
export type AppDispatch = typeof store.dispatch; 

//this is how we setup the Redux store. 


