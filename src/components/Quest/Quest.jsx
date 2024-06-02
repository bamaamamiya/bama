import { useState } from "react"

const Quest =() =>{
    const [tasks, setTasks] = useState([
        { task: 'Push Up', status: 'INCOMPLETE', current: 0, goal: 100 },
        { task: 'Sit Up', status: 'INCOMPLETE', current: 0, goal: 100 },
        { task: 'Squats', status: 'INCOMPLETE', current: 0, goal: 100 },
        { task: 'Running', status: 'INCOMPLETE', current: 0, goal: 3 },
        ]);

        const handleChange = (index) => {
        setTasks(prevTasks =>
            prevTasks.map((task, i) =>
            i === index
            ? { ...task, status: task.status === 'INCOMPLETE' ? 'COMPLETE' : 'INCOMPLETE', current: task.status === 'INCOMPLETE' ? task.goal : 0 }
            : task
            )
        );
    };
    
    return(
        <div className="bg-black p-2">
        <div className="border-white border-2 space-y-6 h-screen rounded-xl p-2">
        <div className="flex justify-end gap-2 ">
        <h1 className="text-end text-5xl">_</h1>
        <h1 className="text-end text-5xl">x</h1>
        </div>
        <div className="flex justify-center items-center ">
            <h1 className="text-5xl font-bold ">QUEST DIRECTIONS</h1>
        </div>
        <div className="grid justify-center items-center space-y-2">
            <h1>Daily Quest - Getting Ready To Become Powerful</h1>

            <h1 className="text-3xl text-center">GOAL</h1>
            <div className="grid justify-center">
            {tasks.map((task, index) => (
            <div className="flex gap-2 text-2xl" key={index}>
                <button onClick={() => handleChange(index)}>[{task.status}]</button>
                <h1>{task.task} [ {task.current} / {task.goal} ]</h1>
                </div>
            ))}
        </div>
        </div>
        <div className=" flex justify-center items-center">
        <h1 className="text-2xl text-center"> <span className="text-red-800">CAUTION!</span> - IF THE DAILY QUEST REMAINS INCOMPLETE,PENALTIES WILL BE GIVEN ACCORDINGLY</h1>
        </div>
        </div>
    </div>
    )
}

export default Quest