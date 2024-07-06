
const Avatar = () =>{
    const Name = "Bama Amamiya";
    const Job = "Shadow"
    const Tittle = "Monarch"
    const HP = "-"
    const Level = 4
    const Point = 2
    const Strength = 999
    const Agility = 200
    const Sense = 1000
    const Vital = 233
    const intel = 10500
    return (
        <div className="md:flex grid justify-center gap-4 p-4 w-max">
            <div>
                <img src="/images/bokuanime.jpg" className="rounded-2xl w-80"/>
            </div>
            <div className="grid p-4">
            <div className="grid items-center text-sm ">
                <h1>Name : {Name}</h1>
                <h1>Job : {Job}</h1>
                <h1>Tittle : {Tittle}</h1>
                <h1>HP : {HP}</h1>
                <h1>Level : {Level}</h1>
                <br></br>
            </div>
                <div className="border-t-2 border-b-2">
                    <h1>STRENGTH : {Strength}</h1>
                    <h1>AGILITY : {Agility}</h1>
                    <h1>SENSE : {Sense}</h1>
                    <h1>VITALITY : {Vital}</h1>
                    <h1>INTELLIGENCE : {intel}</h1>
                </div>
                <h1 className="text-end font-medium">REMAINING POINT : {Point}</h1>
                <br></br>
        </div>
        </div>
    )
}

export default Avatar