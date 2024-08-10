import { Link } from "react-router-dom"


const Start = () => {
    return (
        <div className="bg-black text-white h-screen flex justify-center items-center ">
            <Link to='/profil' >
                <img 
                src='/images/player.webp' 
                alt="player-start" 
                width="564" 
                height="376" />
            </Link>
        </div>
    )
}

export default Start