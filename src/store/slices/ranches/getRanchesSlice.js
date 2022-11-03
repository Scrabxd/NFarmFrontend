import { createSlice } from '@reduxjs/toolkit';

export const getRanchesSlice = createSlice({
    name: 'getRanches',
    initialState: {
        isLoading: false,
        ranches: [],
        rerender: false,
    },
    reducers: {
        startLoadingRanches: ( state ) => {
            state.isLoading = true
        },
        setRerenderState: ( state ) => {
            state.rerender = true
        },
        setRanches: ( state, action ) => {
            state.isLoading = false
            // .reverse() to show the most recently added ranch first
            state.ranches = action.payload.ranch.reverse()
            state.rerender = false
        }
    }
});

// Action creators are generated for each case reducer function
export const { startLoadingRanches, setRanches, setRerenderState } = getRanchesSlice.actions;