import { createSlice } from '@reduxjs/toolkit';

export const getCowsSlice = createSlice({
    name: 'getCows',
    initialState: {
        isLoading: false,
        cows: [],
        // message: ''
    },
    reducers: {
        startLoadingCows: ( state ) => {
            state.isLoading = true
        },
        setCows: ( state, action ) => {
            // .reverse() to show the most recently added ranch first
            state.cows = action.payload.findCows.reverse()
            state.isLoading = false
        },
        addCow: ( state, action ) => {
            // add the restaurant at the beggining of the array
            // add to show it in the table avoiding make a request to the DB
            state.cows.unshift( action.payload.values )
        }
    }
});

// Action creators are generated for each case reducer function
export const { startLoadingCows, setCows, addCow } = getCowsSlice.actions;