import {configureStore} from "@reduxjs/toolkit";
import counterReducer from './slices/counterSlice'
import sortReducer from './slices/sortSlice'
import searchReducer from './slices/searchSlice'

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        sort: sortReducer,
        search: searchReducer,
    },
})

