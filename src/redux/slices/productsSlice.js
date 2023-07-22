import {createSlice} from "@reduxjs/toolkit";

const productsSlice = createSlice({
    name: 'productSlice',
    initialState: {
        product: {},
        products: []
    },
    reducers: {
        getProduct: (state, action) => {
            state.product = action.payload
            state.error = ''
        },
        getProducts: (state, action) => {
            state.products = action.payload
            state.error = ''
        }
    }
})

export const {getProduct, getProducts} = productsSlice.actions

export default productsSlice.reducer