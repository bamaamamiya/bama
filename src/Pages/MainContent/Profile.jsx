import React from "react";
import Sidebar from "../Navbar/Sidebar";

const Profile = () => {
  return (
    <div>
      {/* Desktop View */}
      <div className="hidden md:flex justify-center items-center gap-2 h-screen p-4">
        <div className="flex justify-center items-center">
          <div className="w-60 grid justify-center items-center">
            <h1 className="text-5xl font-bold">Bama Amamiya</h1>
            <h1 className="text-3xl text-center bg-white rounded-2xl font-bold text-black p-2">バマ アマミヤ</h1>
            <br />
            <h1 className="text-xl font-bold">
              Bama moves in silence — always watching, never seen. Blending into the crowd by design, not weakness. Knowledge is his weapon, patience his blade. While others seek recognition, he seeks understanding. The world plays its game... but Bama is playing something far greater — a game only he knows is happening.
            </h1>
          </div>
        </div>
        <div className="flex justify-center items-center p-2 ">
          <img src="./images/boko.png" alt="Profil" className="w-[500px]" />
        </div>
        <Sidebar />
      </div>

      {/* Mobile View */}
      <div className="md:hidden flex flex-col justify-center items-center gap-4 p-4">
        <div className="flex justify-center items-center">
          <img src="./images/bokuanime.jpg" alt="Profil" className="rounded-3xl" />
        </div>
        <div className="text-center">
          <h1 className="text-4xl font-bold">Bama Amamiya</h1>
          <h1 className="text-4xl bg-white rounded-2xl font-bold text-black p-2">バマ アマミヤ</h1>
          <br />
          <h1 className="text-lg font-bold">
            Bama moves in silence — always watching, never seen. Blending into the crowd by design, not weakness. Knowledge is his weapon, patience his blade. While others seek recognition, he seeks understanding. The world plays its game... but Bama is playing something far greater — a game only he knows is happening.
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Profile;