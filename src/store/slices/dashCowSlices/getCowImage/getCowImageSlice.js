import { createSlice } from '@reduxjs/toolkit';

export const getCowImageSlice = createSlice({
    name: 'getCowImage',
    initialState: {
        isLoading: false,
        img: '',
    },
    reducers: {
        startLoadingImageCow: ( state ) => {
            state.isLoading = true
        },
        setImg: ( state, actions ) => {
            state.img = actions.payload.file
        }
    }
});

// Action creators are generated for each case reducer function
export const { startLoadingImageCow, setImg } = getCowImageSlice.actions;