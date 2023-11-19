import { configureStore } from '@reduxjs/toolkit'
import usersReducer from './features/users/usersSlice';
import usersDataSlice from './features/users/userDataSlice.jsx';


const store = configureStore({
  reducer: {
    users: usersReducer,
    usersData: usersDataSlice,
  },
});

export default store;