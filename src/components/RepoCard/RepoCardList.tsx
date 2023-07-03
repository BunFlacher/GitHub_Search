import { FC, useState } from "react"
import RepoCard from "./RepoCard"
import { RepoCardProps } from "../../models/Component.models"
import Input from "../UI/input/Input"
import {TiArrowBack} from 'react-icons/ti'

const RepoCardList:FC<RepoCardProps> = ({
    repos, 
    search, 
    loading, 
    error, 
    visible,
    clickBack,
    dropDown
}) => {
    const [inputRepos, setInputRepos] = useState('')
    const [filteredRepos, setFilteredRepos] = useState(repos)

    const filterRepos = (inputRepos: string) => {
        setInputRepos(inputRepos)
        setFilteredRepos(
            repos.filter(repo => 
                repo.name.toLowerCase().includes(inputRepos.toLowerCase()
                )
            )
        )
    }

    if (search.length === 0) {
        return(
            <div className="w-screen relative">
                {!visible && <div>
                    <Input
                        value={inputRepos}
                        onChange={e => 
                            filterRepos(e.target.value)
                        }
                        placeholder="Find Repository"
                    />
                    <div 
                        className="absolute top-0 right-0 border-l-[1px] border-[rgba(255,255,255,0.10)] cursor-pointer"
                        onClick={clickBack}
                        >
                        <TiArrowBack size={50} color="rgba(255,255,255,0.4)"/>
                    </div>
                </div>}
                {loading && <p className="text-[rgb(147,147,147)] text-center text-xl mb-[5px]">
                    Reposetories are Loading...
                </p>}
                {error && <p className="text-[red] text-center text-xl mb-[5px]">
                    Something went wrong
                </p>}
                {dropDown && <ul className="max-h-[500px] mt-[5px] flex flex-wrap overflow-y-scroll">
                    {filteredRepos.map(repo => 
                        <RepoCard repo={repo} key={repo.id}/>
                    )}
                </ul>}
            </div>
        )
    } else return null
}

export default RepoCardList