import { createSlice } from '@reduxjs/toolkit';

export const getRanchesSlice = createSlice({
    name: 'getRanches',
    initialState: {
        isLoading: false,
        ranches: [],
    },
    reducers: {
        startLoadingRanches: (state, /* action */ ) => {
            state.isLoading = true
        },
        setRanches: ( state, action ) => {
            state.isLoading = false
            state.ranches = action.payload.ranch
        }
    }
});

// Action creators are generated for each case reducer function
export const { startLoadingRanches, setRanches, setRerender } = getRanchesSlice.actions;