import { createSlice } from '@reduxjs/toolkit';

export const ranchesModalSlice = createSlice({
    name: 'ranchesModal',
    initialState: {
        isOpenRanchesModal: false
    },
    reducers: {
        openModalRanches: ( state ) => {
            state.isOpenRanchesModal = true
        },
        closeModalRanches: ( state ) => {
            state.isOpenRanchesModal = false
        },
    }
});

// Action creators are generated for each case reducer function
export const { openModalRanches, closeModalRanches } = ranchesModalSlice.actions;