// Libraries
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// Reducers
import { setCredentials, logOut } from '../features/AuthUser'
// API Slice
const baseQuery = fetchBaseQuery({ 
    baseUrl: 'http://localhost:8000/api/', 
    credentials: 'include',
    prepareHeaders: (headers, { getState }) => {
        const token = getState().AuthUser.token;
        if (token) {
            headers.set('Authorization', `Bearer ${token}`);
        }
        return headers;
    }
});

const baseQueryWithReauth = async (args, api, extraOptions) => {
    let result = await baseQuery(args, api, extraOptions);
    if (result?.error?.status === 401) {
        // Try to get a new token
        const refreshResult = await baseQuery('/refresh', api, extraOptions);
        if (refreshResult?.data) {
            const { user, token } = refreshResult.data;
            api.dispatch(setCredentials({ user, token }));
            result = await baseQuery(args, api, extraOptions);
        } else {
            api.dispatch(logOut());
        }
    }
    return result;
};

export const apiSlice = createApi({
    baseQuery: baseQueryWithReauth,
    endpoints: (builder) => ({}),
});

