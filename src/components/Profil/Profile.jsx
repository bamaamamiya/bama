import React from "react"
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faDiscord } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const Profile = () =>{

    return(
        <div className="grid justify-center items-center">
      <div className="flex gap-2">
    <div className="sm:flex justify-center  ">
        <img src="./images/profile.jpg" alt="Profil" className="sm:w-80 rounded-full flex justify-center dark:border-white dark:border-4"  />
        </div>
        <div className="flex items-center">
          <div>
          <p className="text-center text-primary ">Hello, im</p>
          <h1 className="text-center text-2xl font-bold">Bama Amamiya</h1>        
            <div className="space-x-4 mt-2 flex justify-center">
              <a href="https://www.instagram.com/bama.amamiya/">
                <FontAwesomeIcon icon={faInstagram} size="2x"/>
              </a>
                {/* <a>
                <FontAwesomeIcon icon={faDiscord} size="2x"/>
                </a> */}
                <a href="https://github.com/bamaamamiya">
                <FontAwesomeIcon icon={faGithub} size="2x"/>
                </a>
          </div>
          </div>
          </div>
      </div>
      
      <div className="text-center mt-20">
      <button className="text-center bg-black text-white p-2 rounded-xl animate-bounce shadow-2xl">You life in illutions</button>
      </div>
    </div>

    )
}

export default Profile