import { createSlice } from '@reduxjs/toolkit';

export const getSingleCowSlice = createSlice({
    name: 'getSingleCow',
    initialState: {
        isLoading: false,
        cow: [],
    },
    reducers: {
        startLoadingCow: ( state ) => {
            state.isLoading = true
        },
        setCow: ( state, action ) => {
            state.cow = action.payload.findCow
            state.isLoading = false
        }
    }
});

// Action creators are generated for each case reducer function
export const { startLoadingCow, setCow } = getSingleCowSlice.actions;