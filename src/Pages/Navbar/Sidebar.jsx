import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu } from "lucide-react";

function Sidebar() {
	const playSound = () => {
		const audio = new Audio('/audio/Select Sound Effect.mp3');
		audio.play();
	};
  return (
    <div className="grid">
      <ul className="grid text-center  sm:gap-4 sm:ml-auto border-b-2 border-t-2 md:border-none text-5xl">
        <li className="lg:hover:scale-125 text-white/50 hover:text-white" onMouseEnter={playSound}>
          <Link to="/home">Home</Link>
        </li>
        <li className="lg:hover:scale-125 text-white/50 hover:text-white" onMouseEnter={playSound}>
          <Link to="/player">Player</Link>
        </li>
        <li className="lg:hover:scale-125 text-white/50 hover:text-white" onMouseEnter={playSound}>
          <Link to="/player">Quest</Link>
        </li>
        <li className="lg:hover:scale-125 text-white/50 hover:text-white" onMouseEnter={playSound}>
          <Link to="/player">Book</Link>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
