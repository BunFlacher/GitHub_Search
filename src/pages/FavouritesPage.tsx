import { useAppSelector } from "../hooks/redux"
import RepoCard from "../components/RepoCard/RepoCard"

const FavouritePage = () => {
    const {favourites} = useAppSelector(state => state.github)
    console.log(favourites)
    if (favourites.length !== 0) {
        return (
            <div className="w-[800px] mx-auto flex justify-center mt-[15px] flex-wrap">  
                
            </div>
        )
    } else {return (<p className="text-center ">No one item</p>)}
}

export default FavouritePage