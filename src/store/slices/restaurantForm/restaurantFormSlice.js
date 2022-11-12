import { createSlice } from '@reduxjs/toolkit';

export const restaurantFormSlice = createSlice({
    name: 'restaurantForm',
    initialState: {
        isLoading: false,
        status: ''
    },
    reducers: {
        startLoadingUploadBranch: ( state ) => {
            state.isLoading = true
        },
        setUploadRestaurantBranchStatus: (state, action ) => {
            state.status = action.payload.status
            state.isLoading = false
        },
    }
});

// Action creators are generated for each case reducer function
export const { setUploadRestaurantBranchStatus, startLoadingUploadBranch } = restaurantFormSlice.actions;