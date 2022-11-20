import { createSlice } from '@reduxjs/toolkit';

export const restaurantModalSlice = createSlice({
    name: 'restaurantModal',
    initialState: {
        isOpenRestaurantModal: false
    },
    reducers: {
        openModalRestaurant: ( state ) => {
            state.isOpenRestaurantModal = true
        },
        closeModalRestaurant: ( state ) => {
            state.isOpenRestaurantModal = false
        }
    }
});

// Action creators are generated for each case reducer function
export const { openModalRestaurant, closeModalRestaurant } = restaurantModalSlice.actions;