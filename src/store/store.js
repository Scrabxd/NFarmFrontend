import { configureStore } from "@reduxjs/toolkit";

import { loginSlice } from "./slices/login/loginSlice";
import { openSidebarSlice } from "./slices/sidebar";
import { signupSlice } from "./slices/signup";


export const store = configureStore({

    reducer: {
        register: signupSlice.reducer,
        login: loginSlice.reducer,
        openSidebar: openSidebarSlice.reducer,
    }

})