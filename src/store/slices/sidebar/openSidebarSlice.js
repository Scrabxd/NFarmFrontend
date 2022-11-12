import { createSlice } from '@reduxjs/toolkit';

export const openSidebarSlice = createSlice({
    name: 'sidebar',
    initialState: {
        isOpen: false
    },
    reducers: {
        expand: (state, /* action */ ) => {
            state.isOpen = !state.isOpen
        },
    }
});

// Action creators are generated for each case reducer function
export const { expand } = openSidebarSlice.actions;