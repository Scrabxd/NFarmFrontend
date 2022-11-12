import { createSlice } from '@reduxjs/toolkit';

export const cowFormSlice = createSlice({
    name: 'cowForm',
    initialState: {
        status: '' //check the status of the operation, 200 if it is an ok
    },
    reducers: {
        setUploadCowStatus: (state, action ) => {
            state.status = action.payload.status
        },
    }
});

// Action creators are generated for each case reducer function
export const { setUploadCowStatus } = cowFormSlice.actions;