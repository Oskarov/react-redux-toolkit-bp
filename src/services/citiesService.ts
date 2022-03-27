import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import {ICitiesImport} from "../interfaces/ICities";


export const citiesApi = createApi({
    reducerPath: 'citiesApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://6240bf0519f60987923fb81a.mockapi.io/' }),
    endpoints: (builder) => ({
        getAllCities: builder.query<ICitiesImport[], string>({
            query: () => `items`,
        }),
    }),
})

export const { useGetAllCitiesQuery } = citiesApi