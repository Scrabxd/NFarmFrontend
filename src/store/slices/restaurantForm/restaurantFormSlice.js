import { createSlice } from '@reduxjs/toolkit';

export const restaurantFormSlice = createSlice({
    name: 'restaurantForm',
    initialState: {
        status: ''
    },
    reducers: {
        setUploadRestaurantBranchStatus: (state, action ) => {
            state.status = action.payload.status
        },
    }
});

// Action creators are generated for each case reducer function
export const { setUploadRestaurantBranchStatus } = restaurantFormSlice.actions;