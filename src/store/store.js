import { configureStore } from "@reduxjs/toolkit";
import { cowFormSlice } from "./slices/cowForm/cowFormSlice";

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
        uploadCow:              cowFormSlice.reducer,
        uploadRanch:            ranchFormSlice.reducer,
        uploadRestaurantBranch: restaurantFormSlice.reducer,
        openSidebar:            openSidebarSlice.reducer,
        ranches:                getRanchesSlice.reducer,
        restaurants:            getRestaurantsSlice.reducer,
    }

})