import { configureStore } from '@reduxjs/toolkit'
import usersReducer from './features/users/usersSlice';


const store = configureStore({
  reducer: {
    // Add the generated reducer as a specific top-level slice
    users: usersReducer
  },
});

export default store;