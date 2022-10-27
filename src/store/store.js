import { configureStore } from "@reduxjs/toolkit";
import { signupSlice } from "./slices/signup";


export const store = configureStore({

    reducer: {
        register: signupSlice.reducer,
    }

})