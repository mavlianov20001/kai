import {$host} from "./index"
import {createAsyncThunk} from "@reduxjs/toolkit";
import {preloaderOff, preloaderOn} from "../../redux/slices/preloaderSlice";
import {setError} from "../../redux/slices/errorSlice";
import {getCategories} from "../../redux/slices/categoriesSlice";
//
// export const fetchCategoriesApi = async () => {
//     const {data} = await $host.get('categories/')
//     return data
// }

export const fetchCategoriesApi = createAsyncThunk (
    'fetchCategoriesApi',
    async function (info, {dispatch}) {
        dispatch(preloaderOn())
        try {
            const {data} = await $host.get('categories/')
            dispatch(getCategories(data.results))
        } catch (e) {
            dispatch(setError(e.message))
        } finally {
            dispatch(preloaderOff())
        }
    }
)