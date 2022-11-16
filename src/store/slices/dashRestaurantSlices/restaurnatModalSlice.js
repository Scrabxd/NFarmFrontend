import { createSlice } from '@reduxjs/toolkit';

export const restaurantModalSlice = createSlice({
    name: 'restaurantModal',
    initialState: {
        isOpen: false
    },
    reducers: {
        openModal: ( state ) => {
            state.isOpen = true
        },
        closeModal: ( state ) => {
            state.isOpen = false
        }
    }
});

// Action creators are generated for each case reducer function
export const { openModal, closeModal } = restaurantModalSlice.actions;