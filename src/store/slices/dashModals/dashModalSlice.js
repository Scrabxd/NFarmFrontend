import { createSlice } from '@reduxjs/toolkit';

export const dashModalSlice = createSlice({
    name: 'dashModal',
    initialState: {
        isModalOpen: false
    },
    reducers: {
        openModal: ( state ) => {
            state.isModalOpen = true
        },
        closeModal: ( state ) => {
            state.isModalOpen = false
        }
    }
});

// Action creators are generated for each case reducer function
export const { openModal, closeModal } = dashModalSlice.actions;