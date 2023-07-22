import {$host} from "./index"
import {createAsyncThunk} from "@reduxjs/toolkit";
import {preloaderOff, preloaderOn} from "../../redux/slices/preloaderSlice";
import {setError} from "../../redux/slices/errorSlice";
import {getProduct, getProducts} from "../../redux/slices/productsSlice";

export const fetchProductsApi = createAsyncThunk (
    'fetchProductsApi',
    async function (info, {dispatch}) {
        dispatch(preloaderOn())
        try {
            const {data} = await $host.get('products/')
            dispatch(getProducts(data.results))
        } catch (e) {
            dispatch(setError(e.message))
        } finally {
            dispatch(preloaderOff())
        }
    }
)

export const fetchOneProductApi = createAsyncThunk (
    'fetchOneProductApi',
    async function (info, {dispatch}) {
        dispatch(preloaderOn())
        try {
            const {data} = await $host.get(`products/${info}/`)
            dispatch(getProduct(data))
        } catch (e) {
            dispatch(setError(e.message))
        } finally {
            dispatch(preloaderOff())
        }
    }
)

// export const fetchProductsApi = async () => {
//     const {data} = await $host.get('products/')
//     return data
// }

// export const fetchOneProductApi = async (product_slug) => {
//     const {data} = await $host.get(`products/${product_slug}/`)
//     return data
// }

