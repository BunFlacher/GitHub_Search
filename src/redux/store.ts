
import {configureStore} from '@reduxjs/toolkit'
import { githubApi } from '../services/github.api'
import { setupListeners } from '@reduxjs/toolkit/dist/query'
import { githubReducer } from './slices/slicer'

export const store = configureStore({
    reducer: {
        [githubApi.reducerPath]: githubApi.reducer,
        github: githubReducer,
    },
    middleware: (getDefaultMiddleware) => 
        getDefaultMiddleware().concat(githubApi.middleware)
})

setupListeners(store.dispatch)

export type RootState = ReturnType<typeof store.getState>