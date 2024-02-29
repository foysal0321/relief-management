import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../store";

interface TUser {
    user: null | string
    token: null | string
}

const initialState:TUser = {
    user: null,
    token: null
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setUser: (state, action) => {
            const {user, token} = action.payload
            state.user = user
            state.token = token
        },

        logout: (state) => {
            state.user = null
            state.token = null
        }
    }
})

export const {setUser, logout} = authSlice.actions
export default authSlice.reducer


export const currentToken = (state: RootState) => state.auth.token
export const selectCurrentUser = (state: RootState) => state.auth.user