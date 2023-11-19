import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    usersData: [],
    currentPage: 1,
    totalPages: 1,
    totalUsersData: 0,
};


const usersDataSlice = createSlice({
    name: 'usersData',
    initialState,
    reducers: {
        setUsersData: (state, action) => {
            state.usersData = action.payload;
        },
        setCurrentPage: (state, action) => {
            state.currentPage = action.payload;
        },
        setTotalPages: (state, action) => {
            state.totalPages = action.payload;
        },
        setTotalUsersData: (state, action) => {
            state.totalUsersData = action.payload;
        },
    },
});

export const { setUsersData, setCurrentPage, setTotalPages, setTotalUsersData } = usersDataSlice.actions;

export default usersDataSlice.reducer;