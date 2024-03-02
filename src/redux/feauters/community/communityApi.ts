import { baseApi } from "../../api/baseApi";

const communityApi = baseApi.injectEndpoints({
    
    endpoints: (builder) => ({

        addCommunity: builder.mutation({
            query: (data) => ({
                url: '/community',
                method: 'POST',
                body: data
            }),
            invalidatesTags: ["community"]
        }),

        getCommunitys: builder.query({
            query: () => ({
                url: '/community',
                method: 'GET',
            }),
            providesTags: ["community"]
        })

    })
})


export const {
    useAddCommunityMutation,
    useGetCommunitysQuery

} = communityApi