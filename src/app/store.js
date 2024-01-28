import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { tasksApi } from '../redux/api.js';
// import todoReducer from '../features/todo/todoSlice';
import todoReducer from '../redux/features/todo/todoSlice';

const store = configureStore({
    reducer: {
        [tasksApi.reducerPath]: tasksApi.reducer,
        todos: todoReducer,
    },

    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(tasksApi.middleware),
});
setupListeners(store.dispatch);

export default store;
