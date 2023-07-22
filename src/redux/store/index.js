import {configureStore} from "@reduxjs/toolkit";
import userReducer from '../slices/usersSlice'
import productsReducer from '../slices/productsSlice'
import preloaderReducer from "../slices/preloaderSlice"
import errorReducer from "../slices/errorSlice"
import faqsReducer from "../slices/faqsSlice"
import categoriesReducer from "../slices/categoriesSlice"


export const store = configureStore({
    reducer: {
        userReducer,
        productsReducer,
        preloaderReducer,
        errorReducer,
        faqsReducer,
        categoriesReducer
    }
})