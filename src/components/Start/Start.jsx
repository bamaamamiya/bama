import { Link } from "react-router-dom"

import startClick from '/public/images/player.webp'

const Start =() =>{
    return(
        <div className="bg-black text-white h-screen flex justify-center items-center ">
            <Link to='/home' >
            <img src={startClick} alt="player-start"/>
            </Link>
        </div>
    )
}

export default Start