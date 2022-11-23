import { configureStore } from "@reduxjs/toolkit";

import { signupSlice } from "./slices/authSlices/signup";
import { loginSlice } from "./slices/authSlices/login";

import { openSidebarSlice } from "./slices/sidebar";

import { cowFormSlice } from "./slices/dashCowSlices/cowForm";

import { ranchFormSlice } from "./slices/dashRanchSlices/rancheForm";
import { restaurantFormSlice } from "./slices/dashRestaurantSlices/restaurantForm";

import { getRanchesSlice } from "./slices/dashRanchSlices/getRanches";
import { getRestaurantsSlice } from "./slices/dashRestaurantSlices/getRestaurants";
import { getCowsSlice } from "./slices/dashCowSlices/getCows/getCowsSlice";
import { getSingleCowSlice } from "./slices/dashCowSlices/getSingelCow/getSingleCowSlice";

import { ranchDropdownSlice } from "./slices/dashCattleSlices/ranchesDropdown/ranchDropdownSlice";
import { qrCodesSlice } from "./slices/dashCattleSlices/qrCodes/qrCodesSlices";
import { dashModalSlice } from "./slices/dashModals/dashModalSlice";
import { cowFormImageSlice } from "./slices/dashCowSlices/cowFormImage/cowFormImageSlice";
import { getCowImageSlice } from "./slices/dashCowSlices/getCowImage";


export const store = configureStore({

    reducer: {
        register:               signupSlice.reducer,
        login:                  loginSlice.reducer,

        openSidebar:            openSidebarSlice.reducer,

        uploadRanch:            ranchFormSlice.reducer,
        uploadRestaurantBranch: restaurantFormSlice.reducer,
        uploadCow:              cowFormSlice.reducer,
        uploadCowImage:         cowFormImageSlice.reducer,
        
        restaurants:            getRestaurantsSlice.reducer,
        ranches:                getRanchesSlice.reducer,
        cows:                   getCowsSlice.reducer,
        cow:                    getSingleCowSlice.reducer,
        imageCow:               getCowImageSlice.reducer,
        
        dashModal:              dashModalSlice.reducer,

        ranchDropdown:          ranchDropdownSlice.reducer,

        qrCodes:                qrCodesSlice.reducer,
    }

})