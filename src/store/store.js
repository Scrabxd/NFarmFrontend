import { configureStore } from "@reduxjs/toolkit";

import { signupSlice } from "./slices/authSlices/signup";
import { loginSlice } from "./slices/authSlices/login";

import { openSidebarSlice } from "./slices/sidebar";

import { cowFormSlice } from "./slices/cowForm/";
import { ranchFormSlice } from "./slices/dashRanchSlices/rancheForm";
import { restaurantFormSlice } from "./slices/dashRestaurantSlices/restaurantForm";

import { getRanchesSlice } from "./slices/dashRanchSlices/getRanches";
import { getRestaurantsSlice } from "./slices/dashRestaurantSlices/getRestaurants";

import { ranchDropdownSlice } from "./slices/dashCattleSlices/ranchesDropdown/ranchDropdownSlice";
import { qrCodesSlice } from "./slices/dashCattleSlices/qrCodes/qrCodesSlices";
import { dashModalSlice } from "./slices/dashModals/dashModalSlice";


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
        
        dashModal:              dashModalSlice.reducer,

        ranchDropdown:          ranchDropdownSlice.reducer,

        qrCodes:                qrCodesSlice.reducer,
    }

})