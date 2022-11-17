import { createSlice } from '@reduxjs/toolkit';

export const openSidebarSlice = createSlice({
    name: 'sidebar',
    initialState: {
        isOpenSidebar: true
    },
    reducers: {
        expandSidebar: (state, /* action */ ) => {
            state.isOpenSidebar = true
        },
        closeSidebar: ( state ) => {
            state.isOpenSidebar = false
        }
    }
});

// Action creators are generated for each case reducer function
export const { expandSidebar, closeSidebar } = openSidebarSlice.actions;