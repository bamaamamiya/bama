const Skill = () => {

    const ListSkill = [
        {
            name: 'Editing Video',
            img: 'https://i.pinimg.com/564x/d7/88/2f/d7882f0b050e2d2769361370b97ab566.jpg'
        },
        {
            name: 'Editing Photo',
            img: 'https://i.pinimg.com/564x/21/f2/cb/21f2cbd18979bc2a3e4f0d5c0506d72f.jpg'
        },
        {
            name: 'Coding',
            img: 'https://i.pinimg.com/564x/cb/e3/c3/cbe3c399a77bc0e496db1b8799b6fcf3.jpg'
        },
        {
            name: 'Marketing',
            img: 'https://i.pinimg.com/564x/8d/db/6e/8ddb6efe4d11d0c1fc112e4d17ac692f.jpg'
        },
        {
            name: 'Trilingual',
            img: 'https://i.pinimg.com/564x/c2/23/35/c22335a90621c9dcca617460e81dc4cd.jpg'
        },
        {
            name: 'Detective',
            img: 'https://i.pinimg.com/564x/ef/ba/c5/efbac5024d58c9762dee57581e60475f.jpg'
        },
    ]

    return (
        <div className="bg-black text-white grid justify-center items-center ">
            <h1 className="text-7xl font-bold text-center ">SKILL</h1>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 m-4 items-center">
                {ListSkill.map((skill, index) => (
                    <div key={index} className="flex space-x-2 justify-center items-center border-2 p-2 rounded-xl ">
                        <img src={skill.img} alt={skill.name} className="h-[100px] w-[70px]" />
                        <p className="text-center w-full capitalize">{skill.name}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Skill