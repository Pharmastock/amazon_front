// store.js
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './slice'; // Import your root reducer

const store = configureStore({
  reducer: rootReducer,
  // Other options can also be passed here
});

export default store;