import { FC } from "react"
import RepoCard from "./RepoCard"
import { RepoCardProps } from "../../models/Component.models"

const RepoCardList:FC<RepoCardProps> = ({repos, search, loading, error}) => {
    if (search.length === 0) {
        return(
            <div className="max-h-[500px] mt-[5px] w-screen overflow-y-scroll cursor-pointer">
                {loading && <p className="text-[red] text-xl mb-[5px]">
                    Reposetories are Loading...
                </p>}
                {error && <p className="text-[red] text-xl mb-[5px]">
                    Something went wrong
                </p>}
                {repos.map(repo => 
                    <RepoCard repo={repo} key={repo.id}/>
                )}
            </div>
        )
    } else return null
}

export default RepoCardList