import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faCode,  faMaskFace,  faMasksTheater,  faUser } from "@fortawesome/free-solid-svg-icons";
import Status from "../Status/Status";
import Mess from "../Quo/Mess";
import { faPlugCircleXmark } from "@fortawesome/free-solid-svg-icons/faPlugCircleXmark";
import { Link } from "react-router-dom";


const Profile = () =>{

    return(
        <div>
      <div className="md:flex grid justify-center items-center gap-2 h-full p-4">
    <div className="flex justify-center items-center p-2 ">
        <img src="./images/profile.jpg" alt="Profil" className="sm:w-80 rounded-full flex justify-center dark:border-white dark:border-4"  />
        </div>
        <div className="flex justify-center items-center">
          <div>
          <p className="text-center text-primary ">Hello, im</p>
          <h1 className="text-center text-2xl font-bold">Bama Amamiya</h1>        
            <div className="space-x-4 mt-2 flex justify-center items-center">
              <a>
              <FontAwesomeIcon icon={faCode} size="1x"/>
              </a>
              <a>
              <FontAwesomeIcon icon={faMasksTheater} size="1x"/>
              </a>
              {/* <a href="https://www.instagram.com/bama.amamiya/">
                <FontAwesomeIcon icon={faInstagram} size="2x"/>
              </a> */}
                {/* <a href="https://github.com/bamaamamiya">
                <FontAwesomeIcon icon={faGithub} size="2x"/>
                </a> */}
                <a>
                <FontAwesomeIcon icon={faPlugCircleXmark} size="1x"/>
                </a>
                <a>
                <FontAwesomeIcon icon={faUser} size="1x"/>
                </a>
                
          </div>
          </div>
          </div>
      </div>
      <div>
      <Status/>
      <Mess/>
      </div>
      <div className="flex justify-center items-center ">
      <div className="border-2 flex p-2 rounded-3xl">
        <Link to="/matrix" className="text-3xl font-bold">You live in illutions</Link>
        <span class="relative flex h-3 w-3">
  <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-white/50 opacity-85"></span>
  <span class="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
</span>
      </div>
      </div>
    </div>

    )
}

export default Profile