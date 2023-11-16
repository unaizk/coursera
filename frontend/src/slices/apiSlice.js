import { createApi , fetchBaseQuery} from '@reduxjs/toolkit/query/react';

const baseQuery = fetchBaseQuery({baseUrl : ''}) // idont want to set base url because i have already set proxy

export const apiSlice = createApi({
    baseQuery,
    tagTypes : ['User'],
    endpoints : (builder) => ({})
})