import Input from "../components/UI/input/Input"
import {useState, useEffect} from 'react'

const MainPage = () => {
    const [search, setSearch] = useState<string>('')
    
    useEffect(() => {
        
    }, [search])

    return (
        <div className="w-[600px] mx-auto flex justify-center mt-[15px] flex-wrap">
            <Input
            value={search}
            placeholder="Search Users"
            onChange={e => setSearch(e.target.value)}
            />
            <ul className="bg-[rgb(66,66,66);] max-h-[200px] mt-[5px] w-screen">
                <li>dasdasds</li>
            </ul>
        </div>
    )
}

export default MainPage