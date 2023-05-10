import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    category: 0,
    sorting: 0,
    popUpStatus: false,
    //categoryProperty: 0,
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
        setFilters: (state, action) =>{
            state.category = Number(action.payload.activeCategories)
            state.sorting = action.payload.activeSort

        }
    }
})

export const {setCategory, setSorting, changePopUpStatus, setFilters} = sortSlice.actions
export default sortSlice.reducer