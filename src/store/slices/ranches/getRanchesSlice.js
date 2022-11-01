import { createSlice } from '@reduxjs/toolkit';

export const getRanchesSlice = createSlice({
    name: 'getRanches',
    initialState: {
        isLoading: false,
        ranches: [],
        rerender: false,
    },
    reducers: {
        startLoadingRanches: (state, /* action */ ) => {
            state.isLoading = true
        },
        setRerenderState: ( state ) => {
            state.rerender = true
        },
        setRanches: ( state, action ) => {
            state.isLoading = false
            state.ranches = action.payload.ranch
            state.rerender = false
        }
    }
});

// Action creators are generated for each case reducer function
export const { startLoadingRanches, setRanches, setRerenderState } = getRanchesSlice.actions;