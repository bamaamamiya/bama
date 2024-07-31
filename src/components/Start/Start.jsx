import { Link } from "react-router-dom"


const Start = () => {
    return (
        <div className="bg-black text-white h-screen flex justify-center items-center ">
            <Link to='/profil' >
                <img src='https://raw.githubusercontent.com/bamaamamiya/bama/master/public/images/player.webp' alt="player-start" />
            </Link>
        </div>
    )
}

export default Start