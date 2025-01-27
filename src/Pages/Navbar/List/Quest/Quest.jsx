import { useState } from "react"
import Footer from "../../../Footer/Footer";

const Quest =() =>{
    const [tasks, setTasks] = useState([
        { task: 'Push Up', status: 'INCOMPLETE', current: 0, goal: 50 },
        { task: 'Sit Up', status: 'INCOMPLETE', current: 0, goal: 50 },
        { task: 'Squats', status: 'INCOMPLETE', current: 0, goal: 50 },
        // { task: 'Running', status: 'INCOMPLETE', current: 0, goal: 3  , text : ' M '},
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
        <div className="grid justify-center items-center">

        <div className=" border-2 md:w-96  h-full rounded-xl p-2 grid items-center">
        <div className="flex justify-end gap-2 ">
        <h1 className="text-end text-5xl">_</h1>
        <h1 className="text-end text-5xl">x</h1>
        </div>
        <div className="flex justify-center items-center ">
            <h1 className="text-5xl font-bold text-center">QUEST DIRECTIONS</h1>
        </div>
        <div className="grid justify-center items-center space-y-2">
            <h1 className="text-center">Daily Quest - Getting Ready To Become Powerful</h1>

            <h1 className="text-3xl text-center">GOAL!</h1>
            <div className="grid justify-center">
            {tasks.map((task, index) => (
                <div className="flex gap-2 text-2xl" key={index}>
                <button onClick={() => handleChange(index)}>[{task.status}]</button>
                <h1 className="text-lg md:text-2xl">{task.task} [ {task.current} / {task.goal} {task.text}]</h1>
                </div>
            ))}
        </div>
        </div>
        <div className=" flex justify-center items-center">
        <h1 className="text-2xl text-center"> <span className="text-red-800">CAUTION!</span> - IF THE DAILY QUEST REMAINS INCOMPLETE,PENALTIES WILL BE GIVEN ACCORDINGLY</h1>
        </div>
        <div className="flex justify-center">
        <img src="/images/clock.png" className="w-40"/>
        </div>
        <br/>
        <Footer/>
        </div>
            </div>
    )
}

export default Quest