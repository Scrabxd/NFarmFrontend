import { configureStore } from "@reduxjs/toolkit";

import { signupSlice } from "./slices/signup";
import { loginSlice } from "./slices/login";

import { openSidebarSlice } from "./slices/sidebar";

import { cowFormSlice } from "./slices/cowForm/";
import { ranchFormSlice } from "./slices/dashRanchSlices/rancheForm";
import { restaurantFormSlice } from "./slices/dashRestaurantSlices/restaurantForm";

import { getRanchesSlice } from "./slices/dashRanchSlices/getRanches";
import { getRestaurantsSlice } from "./slices/dashRestaurantSlices/getRestaurants";

import { restaurantModalSlice } from "./slices/dashRestaurantSlices/restaurantModal";
import { ranchesModalSlice } from "./slices/dashRanchSlices/ranchesModal/racnhesModalSlice";


export const store = configureStore({

    reducer: {
        register:               signupSlice.reducer,
        login:                  loginSlice.reducer,

        openSidebar:            openSidebarSlice.reducer,

        uploadCow:              cowFormSlice.reducer,
        uploadRanch:            ranchFormSlice.reducer,
        uploadRestaurantBranch: restaurantFormSlice.reducer,
        
        restaurants:            getRestaurantsSlice.reducer,
        ranches:                getRanchesSlice.reducer,
        
        restaurantModal:        restaurantModalSlice.reducer,
        ranchesModal:           ranchesModalSlice.reducer,
    }

})