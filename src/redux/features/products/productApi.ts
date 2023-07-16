import {api} from "@/redux/api/apiSlice.ts";

const productApi = api.injectEndpoints({
   endpoints: (builder) => ({
      getProducts: builder.query({
         query: () => '/products',
      }),
      singleProduct: builder.query({
         query: (id) => `/product/${id}`,
      }),
      postComment: builder.mutation({
         query: ({id, ...data}) => ({ // only one argument can be received
            url: `/comment/${id}`,
            method: 'POST',
            body: data
         }),
         invalidatesTags: ['comments']
      }),
      getComments: builder.query({
         query: (id) => `/comment/${id}`,
         providesTags: ['comments']
      }),
   }),
})

export const {
   useGetProductsQuery,
   useSingleProductQuery,
   usePostCommentMutation,
   useGetCommentsQuery
} = productApi