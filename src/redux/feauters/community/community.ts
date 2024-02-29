import { baseApi } from "../../api/baseApi";

const communityApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({

        addCommunity: builder.mutation({
            query: (data) => ({
                url: '/community',
                method: 'POST',
                body: data
            })
        }),

        getCommunitys: builder.query({
            query: () => ({
                url: '/community',
                method: 'GET',
            })
        })

    })
})


export const {
    useAddCommunityMutation,
    useGetCommunitysQuery

} = communityApi