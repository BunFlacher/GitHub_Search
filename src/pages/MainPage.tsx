import Input from "../components/UI/input/Input"
import {useState, useEffect} from 'react'

const MainPage = () => {
    const [search, setSearch] = useState<string>('')
    
    useEffect(() => {
        
    }, [search])

    return (
        <div className="w-[1000px] mx-auto flex justify-center mt-[15px]"> 
            <Input
            value={search}
            placeholder="Search Users"
            onChange={e => setSearch(e.target.value)}
            />
        </div>
    )
}

export default MainPage