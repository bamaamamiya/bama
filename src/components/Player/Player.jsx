import Footer from "../Footer/Footer"
import Skill from "../Skill/Skill"
import Status from "../Status/Status"

const Player =() =>{
    return(
        <div className="space-y-6">
            <Status/>
            <Skill/>
            <Footer/>
        </div>
    )
}

export default Player