import Avatar from "./Avatar"
const Status = () =>{
    return (
        <div className="bg-black space-y-4 p-2">
            <div className="border-white border-t-2 border-b-2 ">
            <div className="flex justify-end gap-2 ">
            <h1 className="text-end text-5xl">_</h1>
            <h1 className="text-end text-5xl">x</h1>
            </div>
            <div className="flex justify-center items-center ">
                <h1 className="text-5xl font-bold ">STATUS</h1>
            </div>
            <div className="flex justify-center items-center">
                <Avatar/>
            </div>
            </div>
        </div>
    )
}

export default Status