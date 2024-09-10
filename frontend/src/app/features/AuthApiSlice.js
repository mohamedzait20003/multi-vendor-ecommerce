// Components
import { apiSlice } from "../api/apiSlice"; 

// endpoints injection
export const AuthApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        login: builder.mutation({
            query: (credentials) => ({
                url: 'login',
                method: 'POST',
                body: {...credentials}
            }),
        }),
    }),
});

// Export hooks
export const { useLoginMutation } = AuthApiSlice;
