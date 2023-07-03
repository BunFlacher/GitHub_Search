import { IRepo } from "./GitHub.models"

export interface RepoCardProps {
    repos: IRepo[]
    search: string
    loading: boolean
    error: boolean
}