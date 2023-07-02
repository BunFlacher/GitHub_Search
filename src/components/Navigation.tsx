import { Link } from "react-router-dom"


const Navigation = () => {
    return(
        <div className="bg-[rgb(34,34,34)] border-b-[1px] border-[rgba(255,255,255,0.10)]">
            <nav className="flex justify-between items-center w-[1000px] mx-auto h-[60px]">
                <h1 className="font-bold text-2xl text-[rgb(147,147,147)]
                hover:text-white transition duration-300 ease-in-out">
                    <a href="http://localhost:3000/">
                        GitHub Seatch
                    </a>
                </h1>
                <span className="flex">
                    <Link to='/' className="mr-[15px] text-xl text-[rgb(147,147,147)]
                        hover:text-white transition duration-300 ease-in-out">
                        Main
                    </Link>
                    <Link to='/favourite' className="text-xl text-[rgb(147,147,147)]
                        hover:text-white transition duration-300 ease-in-out ">
                        Favourite
                    </Link>
                </span>
            </nav>
        </div>
    )
}

export default Navigation
