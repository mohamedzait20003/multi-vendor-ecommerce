// Libraries
import { createSlice } from '@reduxjs/toolkit';

// Slice
const AuthUser = createSlice({
    name: 'AuthUser',
    initialState: {
        user: null,
        token: null,
    },
    reducers: {
        setCredentials: (state, action) => {
            const { user, token } = action.payload;
            state.user = user;
            state.token = token;
            localStorage.setItem('token', token);
        },
        logOut: (state) => {
            state.user = null;
            state.token = null;
        },
    }
});

// Export Reducers
export const { setCredentials, logOut } = AuthUser.actions;

// Export Slice
export default AuthUser.reducer;

// Export Selectors
export const selectUser = state => state.AuthUser.user;
export const selectToken = state => state.AuthUser.token;
