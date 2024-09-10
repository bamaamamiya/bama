import Footer from '../../../Footer/Footer';
import Skill from "./List/Skill/Skill"
import Status from "../../../MainContent/Status/Status"
import About from './List/About/About';
import NetWorth from './List/Net/Networth';

const Player =() =>{
    return(
        <div className="space-y-6">
            <Status/>
            <Skill/>
            <About/>
            <NetWorth/>
            <Footer/>
        </div>
    )
}

export default Player