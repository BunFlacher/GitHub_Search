import {useActions}  from "../../hooks/actions"
import { useAppSelector } from "../../hooks/redux"
import { useState, MouseEvent, useEffect } from 'react'
import Button from "../UI/button/Button"
import List from "../UI/list/List"
import { IRepo } from "../../models/GitHub.models"

const RepoCard = ({repo}: {repo: IRepo}) => {
    const {favourites} = useAppSelector(state => state.github)
    const {addFavourites, removeFavourites} = useActions()

    const [visible, setVisible] = useState(favourites.includes(repo))

    const local = localStorage.getItem('rfk') as string
    const localJSON = JSON.parse(local)
    useEffect(()=>{
        for (let i = 0; i < localJSON.length; i++) {
            if(localJSON[i].id === repo.id){
                setVisible(true)
            }
        }
    },[])

    const addToFavourite = (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        addFavourites(repo)
        setVisible(true)
    }
    const removeFavourite = (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        removeFavourites(repo)
        setVisible(false)
    }

    return(
        <List>
            <a href={repo.html_url} target="_blank">
                <div className="flex justify-between items-center">
                    <div>
                        <h2 className="text-xl">{repo.name}</h2>
                        <p className="">{repo.description}</p>
                    </div>
                    <div className="mt-[5px]">
                        { !visible && <Button onClick={addToFavourite}>
                            Add
                        </Button>}
                        { visible && <Button 
                            onClick={removeFavourite} 
                            className="border-[2px] border-black hover:bg-black hover:text-white "
                            >
                            Remove
                        </Button>}
                    </div>
                </div>
            </a>
        </List>
    )
}


export default RepoCard