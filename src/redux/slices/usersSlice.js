import {createSlice} from "@reduxjs/toolkit";

const usersSlice = createSlice({
    name: 'userSlice',
    initialState: {
        isAuth: false,
        user:{},
        email:'',
        access:''
    },
    reducers: {
        setIsAuth: (state,action) => {
            state.isAuth = action.payload
        },
        getUser: (state,action) => {
            state.user = action.payload
        },
        login: (state,action) => {
            state.access = action.payload.access
            state.email = action.payload.email
            state.isAuth = Boolean(action.payload.access)
        }
    }
})

export const {setIsAuth, getUser} = usersSlice.actions

export default usersSlice.reducer

