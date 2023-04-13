import {configureStore} from "@reduxjs/toolkit";
import counterReducer from './slices/counterSlice'
import sortReducer from './slices/sortSlice'

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        sort: sortReducer,
    },
})

