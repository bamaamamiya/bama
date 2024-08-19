import Footer from '../../../Footer/Footer';
import Skill from "./List/Skill/Skill"
import Status from "../../../MainContent/Status/Status"

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