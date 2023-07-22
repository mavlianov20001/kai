import {$host} from "./index"
import jwtDecode from "jwt-decode";
import {getUser} from "../../redux/slices/usersSlice";


export const signIn = async (email, password) => {
    const {data} = await $host.post('auth/login/',{email, password})
    localStorage.setItem('tokens', data.tokens.access)
    localStorage.setItem('user', data.username)
    return jwtDecode(data.tokens.access)
}

export const signOut = async (ex) => {
    const {data} = await $host.post('auth/logout/',{ex})
    localStorage.setItem('tokens', data.tokens.access)
    return jwtDecode(data.tokens.access)
}

export const signUp = async (username, email, password, number) => {
    const {data} = await $host.post('auth/register/',{username, email, password, number})
    return data
}

export const register  = (data) => {
    return async (dispatch) => {
        try {
            const response = await $host.post('auth/register/',data)
            dispatch(getUser(response.data.username))
        }
        catch (e) {
            console.log('error', e.message)
        }
    }
}