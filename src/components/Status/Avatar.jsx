
const Avatar = () =>{
    const Name = "Bama Amamiya";
    const Job = "None"
    const Tittle = "Demon Lord"
    const HP = 1000
    const Level = 2
    const Point = 0
    return (
        <div className="flex justify-center gap-4 border-b-2">
            <div>
                <p className="text-center">Bama Amamiya</p>
                <img src="/images/bokuanime.jpg" className="rounded-3xl w-80"/>
            </div>
            <div className="grid gap-4">
            <div className="text-2xl grid items-center">
                <h1>Name : {Name}</h1>
                <h1>Job : {Job}</h1>
                <h1>Tittle : {Tittle}</h1>
                <h1>HP : {HP}</h1>
                <h1>Level : {Level}</h1>
                <br></br>
            </div>
                <div className="border-t-2 border-b-2">
                    <h1>STRENGTH : 239</h1>
                    <h1>AGILITY : 160</h1>
                    <h1>SENSE : 100</h1>
                    <h1>VITALITY : 100</h1>
                    <h1>INTELLIGENCE : 954</h1>
                </div>
                <h1 className="text-end font-semibold">REMAINING POINT : {Point}</h1>
                <br></br>
        </div>
        </div>
    )
}

export default Avatar