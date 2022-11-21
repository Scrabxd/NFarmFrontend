import { createSlice } from '@reduxjs/toolkit';

export const qrCodesSlice = createSlice({
    name: 'qrCodes',
    initialState: {
        qr: ''
    },
    reducers: {
        setQr:( state, actions ) => {
            state.qr = actions.payload.url
        }
    }
});

// Action creators are generated for each case reducer function
export const { setQr } = qrCodesSlice.actions;