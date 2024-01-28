import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const TASKS_API_URL = import.meta.env.VITE_TASKS_API_URL;

export const tasksApi = createApi({
    reducerPath: 'taskApi',
    baseQuery: fetchBaseQuery({ baseUrl: TASKS_API_URL }),
    tagTypes: ['routineActivities', 'studying', 'dailyTasksProjects', 'chingu'],
    endpoints: (builder) => ({
        getRoutineActivities: builder.query({
            query: () => `/0`,
            providesTags: ['routineActivities'],
        }),
        getStudying: builder.query({
            query: () => `/1`,
            providesTags: ['studying'],
        }),
        getDailyTasksProjects: builder.query({
            query: () => `/2`,
            providesTags: ['dailyTasksProjects'],
        }),
        getChingu: builder.query({
            query: () => `/3`,
            providesTags: ['chingu'],
        }),
    }),
});

export const {
    useGetRoutineActivitiesQuery,
    useGetStudyingQuery,
    useGetDailyTasksProjectsQuery,
    useGetChinguQuery,
} = tasksApi;
