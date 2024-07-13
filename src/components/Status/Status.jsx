import Avatar from "./Avatar"
const Status = () =>{
    return (
        <div className="bg-black space-y-4 p-2  ">
                <div className="grid justify-center items-center border-t-2 border-b-2">
                    <div className="flex justify-end gap-2 ">
                        <h1 className="text-end text-5xl">_</h1>
                        <h1 className="text-end text-5xl">x</h1>
                    </div >
                    <h1 className="text-5xl font-bold text-center">STATUS</h1>
                <Avatar/>
                </div>
        </div>
    )
}

export default Status