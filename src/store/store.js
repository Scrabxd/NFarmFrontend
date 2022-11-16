import { configureStore } from "@reduxjs/toolkit";
import { cowFormSlice } from "./slices/cowForm/cowFormSlice";
import { restaurantModalSlice } from "./slices/dashRestaurantSlices/restaurnatModalSlice";

import { loginSlice } from "./slices/login/loginSlice";
import { getRanchesSlice } from "./slices/ranches/getRanchesSlice";
import { ranchFormSlice } from "./slices/ranchForm/ranchFormSlice";
import { restaurantFormSlice } from "./slices/restaurantForm/restaurantFormSlice";
import { getRestaurantsSlice } from "./slices/restaurants/getRestaurantsSlice";
import { openSidebarSlice } from "./slices/sidebar";
import { signupSlice } from "./slices/signup";


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