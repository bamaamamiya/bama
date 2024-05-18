import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faCode,  faMaskFace,  faMasksTheater,  faUser } from "@fortawesome/free-solid-svg-icons";
import Status from "../Status/Status";
import Mess from "../Quo/Mess";
import { faPlugCircleXmark } from "@fortawesome/free-solid-svg-icons/faPlugCircleXmark";


const Profile = () =>{

    return(
        <div>
      <div className="md:flex grid justify-center items-center gap-2 h-full p-4">
    <div className="flex justify-center items-center  ">
        <img src="./images/profile.jpg" alt="Profil" className="sm:w-80 rounded-full flex justify-center dark:border-white dark:border-4"  />
        </div>
        <div className="flex justify-center items-center">
          <div>
          <p className="text-center text-primary ">Hello, im</p>
          <h1 className="text-center text-2xl font-bold">Bama Amamiya</h1>        
            <div className="space-x-4 mt-2 flex justify-center items-center">
              <a>
              <FontAwesomeIcon icon={faCode} />
              </a>
              <a>
              <FontAwesomeIcon icon={faMasksTheater} />
              </a>
              {/* <a href="https://www.instagram.com/bama.amamiya/">
                <FontAwesomeIcon icon={faInstagram} size="2x"/>
              </a> */}
                {/* <a href="https://github.com/bamaamamiya">
                <FontAwesomeIcon icon={faGithub} size="2x"/>
                </a> */}
                <a>
                <FontAwesomeIcon icon={faPlugCircleXmark} />
                </a>
                <a>
                <FontAwesomeIcon icon={faUser} />
                </a>
                
          </div>
          </div>
          </div>
      </div>
      
      <Status/>
      <Mess/>
    </div>

    )
}

export default Profile