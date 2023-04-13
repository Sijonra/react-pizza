import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    category: 0,
    sorting: 0,
    popUpStatus: false,
}

export const sortSlice = createSlice({
    name: 'sort',
    initialState: initialState,
    reducers:{
        setCategory: (state, action) => {
            state.category = action.payload;
        },
        setSorting: (state, action) => {
            state.sorting = action.payload;
        },
        changePopUpStatus: (state) => {
          state.popUpStatus = !state.popUpStatus;
        },
    }
})

export const {setCategory, setSorting, changePopUpStatus} = sortSlice.actions
export default sortSlice.reducer