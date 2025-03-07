
import React, { useState } from 'react';

const Avatar = () => {
    const Name = "Bama Amamiya";
    const Job = "Shadow"
    const Tittle = "Monarch"
    const HP = ""
    const Point = 3
    const Strength = 51929
    const Agility = 9200
    const Sense = 30540
    const Vital = 24833
    const intel = 1928010

    const [level, setLevel] = useState(5);
    const [xp, setXp] = useState(960); // XP saat ini
    const xpNeeded = 10000; // XP yang dibutuhkan untuk level up berikutnya

    // Hitung persentase progress XP
    const progressPercentage = (xp / xpNeeded) * 100;


    return (
        <div className="md:flex grid justify-center gap-4 p-4 w-max">
            <div className='p-2 flex items-center'>
                <img src="/images/bokuanime.jpg" className="rounded-2xl w-80" />
            </div>
            <div className="grid p-4">
                <div className="grid items-center text-2xl ">
                    <h1>Name : {Name}</h1>
                    <h1>Job : {Job}</h1>
                    <h1>Tittle : {Tittle}</h1>
                    <h1>HP : {HP}</h1>
                    <h1 className='text-xl'> <span className='text-2xl'>Level : {level} / 9</span></h1>

                    <p className="text-sm text-gray-500 mb-4">XP: {xp} / {xpNeeded}</p>
                    {/* Progress Bar */}
                    <div className="w-full bg-gray-400 rounded-full h-4">
                        <div
                            className="bg-gray-50 h-4 rounded-full"
                            style={{ width: `${progressPercentage}%` }}
                        ></div>
                    </div>
                    <br></br>
                </div>
                <div className="border-t-2 border-b-2 text-2xl p-2">
                    <h1>STRENGTH : {Strength}</h1>
                    <h1>AGILITY : {Agility}</h1>
                    <h1>SENSE : {Sense}</h1>
                    <h1>VITALITY : {Vital}</h1>
                    <h1>INTELLIGENCE : {intel}</h1>
                </div>
                <h1 className="text-end font-medium text-2xl">REMAINING POINT : {Point}</h1>
                <br></br>
            </div>
        </div>
    )
}

export default Avatar