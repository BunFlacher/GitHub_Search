import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { IRepo } from "../../models/GitHub.models"

const LS_FAV_KEY = 'rfk'
interface githubState {
    favourites: IRepo[]
}

const initialState: githubState = {
    favourites: JSON.parse(localStorage.getItem(LS_FAV_KEY) ?? '[]')
}

export const githubSlice = createSlice({
    name: 'github',
    initialState,
    reducers: {
        addFavourites(state, action: PayloadAction<IRepo>) {
            state.favourites.push(action.payload)
            localStorage.setItem(LS_FAV_KEY, JSON.stringify(state.favourites))
        },
        removeFavourites(state, action: PayloadAction<IRepo>) {
            state.favourites = state.favourites.filter(favourit => favourit.id !== action.payload.id)
            localStorage.setItem(LS_FAV_KEY, JSON.stringify(state.favourites))
        }
    }
})

export const githubActions = githubSlice.actions
export const githubReducer = githubSlice.reducer