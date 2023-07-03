import Input from "../components/UI/input/Input"
import {useState, useEffect} from 'react'
import { useSearchUsersQuery, useLazyGetUserReposQuery } from "../services/github.api"
import { useDebounce } from "../hooks/debounce"
import List from "../components/UI/list/List"
import RepoCardList from "../components/RepoCard/RepoCardList"

const MainPage = () => {
    const [search, setSearch] = useState<string>('')
    const [dropDown, setDropDown] = useState(false)
    const [dropDownRepos, setDropDownRepos] = useState(false)
    const [inputVisible, setInputVisible] = useState(true)
    const debounced = useDebounce(search)
    const {data, isLoading, isError} = useSearchUsersQuery(debounced, {
        skip: debounced.length < 1,
        refetchOnFocus: true
    })

    const [fetchRepos, {data: repos, isLoading: areLoadingRepos, isError: areErrorRepos }] = useLazyGetUserReposQuery()

    useEffect(() => {
        setDropDown(debounced.length > 1 && data?.length! > 0)
    }, [debounced, data])

    const clickHandler = (username: string) => {
        fetchRepos(username)
        setDropDown(false)
        setInputVisible(false)
        setSearch('')
        setDropDownRepos(true)
    }

    const clickBack = () => {
        setInputVisible(true)
        setSearch('')
        setDropDownRepos(false)
    }

    return (
        <div className="w-[800px] mx-auto flex justify-center mt-[15px] flex-wrap">
            {isError && <p className="text-[red] text-xl mb-[5px]">
                Something went wrong...
            </p>}
            {inputVisible && <Input
                value={search}
                placeholder="Search Users"
                onChange={e => setSearch(e.target.value)}
            />}
            {dropDown && <ul className="max-h-[500px] mt-[5px] w-screen overflow-y-scroll cursor-pointer flex flex-wrap">
                {isLoading && <p className="">Loading...</p>}
                {data?.map(user => (
                    <List
                        onClick={() => clickHandler(user.login)}
                        key={user.id}
                    >{user.login}
                    </List>
                ))}
            </ul>}
            {repos && <RepoCardList 
                repos={repos} 
                search={search} 
                loading={areLoadingRepos} 
                error={areErrorRepos}
                visible={inputVisible}
                clickBack={clickBack}
                dropDown={dropDownRepos}
            />}
        </div>
    )
}

export default MainPage