import { useAppSelector } from "../hooks/redux"
import RepoCard from "../components/RepoCard/RepoCard"

const FavouritePage = () => {
    const {favourites} = useAppSelector(state => state.github)
    if (favourites.length !== 0) {
        return (
            <div className="w-[800px] mx-auto flex justify-center mt-[15px] flex-wrap">  
                {favourites.map(favourit => 
                <RepoCard repo={favourit} key={favourit.id}/>
                )}
            </div>
        )
    } else {return (<p className="text-center text-2xl font-bold text-[rgb(147,147,147)] mt-[15px]"
        >No one item
    </p>)
    }
}

export default FavouritePage