import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faMasksTheater, faUser, faPlugCircleXmark } from "@fortawesome/free-solid-svg-icons";
import Status from "./Status/Status";
import Mess from "./Quo/Mess";
import Footer from "../Footer/Footer";

import MusicPlayer from "../MusicPlayer";

const Profile = () => {

  return (
    <div>
      <div className="md:flex grid justify-center items-center gap-2 h-screen p-4">
        <div className="flex justify-center items-center p-2 ">
          <img src="./images/profile.jpg" alt="Profil" className="sm:w-80 rounded-full flex justify-center border-white border-4" />
        </div>
        <div className="flex justify-center items-center">
          <div>
            <p className="text-center text-primary ">Hello, im</p>
            <h1 className="text-center text-2xl font-bold">Bama Amamiya</h1>
            <div className="space-x-4 mt-2 flex justify-center items-center">
              <a>
                <FontAwesomeIcon icon={faCode} size="1x" />
              </a>
              <a>
                <FontAwesomeIcon icon={faMasksTheater} size="1x" />
              </a>
              <a>
                <FontAwesomeIcon icon={faPlugCircleXmark} size="1x" />
              </a>
              <a>
                <FontAwesomeIcon icon={faUser} size="1x" />
              </a>

            </div>
          </div>
        </div>
      </div>
      <div>
        <Status />
        <Mess />
        <Footer />
      </div>
      <div>
        <MusicPlayer/>
      </div>
    </div>

  )
}

export default Profile