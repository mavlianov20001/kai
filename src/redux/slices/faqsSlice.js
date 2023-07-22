import {createSlice} from "@reduxjs/toolkit";

const faqsSlice = createSlice({
    name: 'faqsSlice',
    initialState: {
        faq: {},
        faqs: [],
    },
    reducers: {
        getFaq: (state, action) => {
            state.faq = action.payload
            state.error = ''
        },
        getFaqs: (state, action) => {
            state.faqs = action.payload
            state.error = ''
        },
    }
})

export const {getFaq, getFaqs} = faqsSlice.actions

export default faqsSlice.reducer