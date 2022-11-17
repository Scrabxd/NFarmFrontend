import { createSlice } from '@reduxjs/toolkit';

export const openSidebarSlice = createSlice({
    name: 'sidebar',
    initialState: {
        isOpenSidebar: true
    },
    reducers: {
        expandSidebar: (state, /* action */ ) => {
            state.isOpenSidebar = !state.isOpenSidebar
        },
    }
});

// Action creators are generated for each case reducer function
export const { expandSidebar } = openSidebarSlice.actions;