import { configureStore } from "@reduxjs/toolkit";

import { signupSlice } from "./slices/signup";
import { loginSlice } from "./slices/login";

import { openSidebarSlice } from "./slices/sidebar";

import { cowFormSlice } from "./slices/cowForm/";
import { ranchFormSlice } from "./slices/ranchForm/";
import { restaurantFormSlice } from "./slices/restaurantForm/";

import { getRanchesSlice } from "./slices/ranches/";
import { restaurantModalSlice } from "./slices/dashRestaurantSlices/";

import { getRestaurantsSlice } from "./slices/restaurants/";


export const store = configureStore({

    reducer: {
        register:               signupSlice.reducer,
        login:                  loginSlice.reducer,

        openSidebar:            openSidebarSlice.reducer,

        uploadCow:              cowFormSlice.reducer,
        uploadRanch:            ranchFormSlice.reducer,
        uploadRestaurantBranch: restaurantFormSlice.reducer,
        
        restaurants:            getRestaurantsSlice.reducer,
        restaurantModal:        restaurantModalSlice.reducer,
        
        ranches:                getRanchesSlice.reducer,
    }

})