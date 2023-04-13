import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    category: 0,
    sorting: 0,
}

export const sortSlice = createSlice({
    name: 'sort',
    initialState: initialState,
    reducers:{
        setCategory: (state, action)=>{
            state.category = action.payload;
        }
    }
})

export const {setCategory} = sortSlice.actions
export default sortSlice.reducer