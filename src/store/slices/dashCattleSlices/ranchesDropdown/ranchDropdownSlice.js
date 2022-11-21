import { createSlice } from '@reduxjs/toolkit';

export const ranchDropdownSlice = createSlice({
    name: 'ranchDropdown',
    initialState: {
        dropdownValue: 'Select a ranch'
    },
    reducers: {
        setSelectedDropdownRanchValue: ( state, actions ) => {
            state.dropdownValue = actions.payload.value
        }
    }
});

// Action creators are generated for each case reducer function
export const { setSelectedDropdownRanchValue } = ranchDropdownSlice.actions;