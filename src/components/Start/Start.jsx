import { Link } from "react-router-dom"
const Start =() =>{
    return(
        <div className="bg-black text-white h-screen flex justify-center items-center ">
            <Link to='/home' >
            <img src="https://i.pinimg.com/564x/14/3b/77/143b779af1b9aec2ff9e5fe6cb191c43.jpg" alt="player-start"/>
            </Link>
        </div>
    )
}

export default Start