import { createSlice } from '@reduxjs/toolkit';

export const qrCodesSlice = createSlice({
    name: 'qrCodes',
    initialState: {
        isLoading: false,
        qr: ''
    },
    reducers: {
        startLoadingQr: ( state ) => {
            state.isLoading = true
        },
        setQr:( state, actions ) => {
            state.qr = actions.payload.url
            state.isLoading = false
        }
    }
});

// Action creators are generated for each case reducer function
export const { startLoadingQr, setQr } = qrCodesSlice.actions;