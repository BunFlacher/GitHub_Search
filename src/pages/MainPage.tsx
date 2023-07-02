import Input from "../components/UI/input/Input"
import {useState, useEffect} from 'react'
import { useSearchUsersQuery, useLazyGetUserReposQuery } from "../API/github.api"
import { useDebounce } from "../hooks/debounce"
import List from "../components/UI/List/List"

const MainPage = () => {
    const [search, setSearch] = useState<string>('')
    const [dropDown, setDropDown] = useState(false)
    const debounced = useDebounce(search)
    const {data, isLoading, isError} = useSearchUsersQuery(debounced, {
        skip: debounced.length < 3,
        refetchOnFocus: true
    })

    const [fetchRepos, {data: repos, isLoading: isLoadingRepos}] = useLazyGetUserReposQuery()

    useEffect(() => {
        setDropDown(debounced.length > 3 && data?.length! > 0)
    }, [debounced, data])

    const clickHandler = (username: string) => {
        fetchRepos(username)
        setDropDown(false)
    }

    return (
        <div className="w-[600px] mx-auto flex justify-center mt-[15px] flex-wrap">
            {isError && <p className="text-[red] text-xl mb-[5px]">
                Something went wrong...
            </p>}
            <Input
            value={search}
            placeholder="Search Users"
            onChange={e => setSearch(e.target.value)}
            />
            {dropDown && <ul className="bg-[rgb(66,66,66);] max-h-[200px] mt-[5px] w-screen overflow-y-scroll cursor-pointer">
                {isLoading && <p className="">Loading...</p>}
                {data?.map(user => (
                    <List
                        onClick={() => clickHandler(user.login)}
                        key={user.id}
                    >{user.login}
                    </List>
                ))}
            </ul>}
        </div>
    )
}

export default MainPage