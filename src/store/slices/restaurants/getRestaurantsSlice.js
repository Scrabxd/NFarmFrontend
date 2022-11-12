import { createSlice } from '@reduxjs/toolkit';

export const getRestaurantsSlice = createSlice({
    name: 'getRestaurantes',
    initialState: {
        isLoading: false,
        restaurants: [],
        rerender: false
    },
    reducers: {
        startLoadingRestaurants: ( state ) => {
            state.isLoading = true
        },
        setRerenderState: ( state ) => {
            state.rerender = true
        },
        setRestaurants: (state, actions ) => {
            state.isLoading = false
            // .reverse() to show the most recently added restaurants first
            state.restaurants = actions.payload.findRestaurant.reverse()
            state.rerender = false
        },
    }
});

// Action creators are generated for each case reducer function
export const { startLoadingRestaurants, setRerenderState, setRestaurants } = getRestaurantsSlice.actions;