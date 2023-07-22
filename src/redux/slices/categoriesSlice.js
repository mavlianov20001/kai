import {createSlice} from "@reduxjs/toolkit";

const categoriesSlice = createSlice({
    name: 'categoriesSlice',
    initialState: {
        category: {},
        categories: []
    },
    reducers: {
        getCategories: (state, action) => {
            state.categories = action.payload
            state.error = ''
        }
    }
})

export const {getCategories} = categoriesSlice.actions

export default categoriesSlice.reducer