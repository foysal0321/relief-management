import { baseApi } from "../../api/baseApi"

const authApi = baseApi.injectEndpoints({

    endpoints: (builder) => ({

        createUser: builder.mutation({
            query: (data) => ({
                url: '/register',
                method: 'POST',
                body: data
            })
        }),

        loginUser: builder.mutation({
            query: (data) => ({
                url: '/login',
                method: 'POST',
                body: data
            })
        })

    })
})


export const {
    useCreateUserMutation,
    useLoginUserMutation
} = authApi
