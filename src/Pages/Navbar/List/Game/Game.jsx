import Card from "../../../../Components/Card";

const Game = () => {
	const GameList = [
    {
      name: "Dark Souls Remastered",
      img: "https://i.pinimg.com/564x/d7/88/2f/d7882f0b050e2d2769361370b97ab566.jpg",
    },
    {
      name: "Editing Photo",
      img: "https://i.pinimg.com/564x/21/f2/cb/21f2cbd18979bc2a3e4f0d5c0506d72f.jpg",
    },
    {
      name: "Coding",
      img: "https://i.pinimg.com/564x/cb/e3/c3/cbe3c399a77bc0e496db1b8799b6fcf3.jpg",
    },
    {
      name: "Marketing",
      img: "https://i.pinimg.com/564x/8d/db/6e/8ddb6efe4d11d0c1fc112e4d17ac692f.jpg",
    },
    {
      name: "Trilingual",
      img: "https://i.pinimg.com/564x/c2/23/35/c22335a90621c9dcca617460e81dc4cd.jpg",
    },
    {
      name: "Detective",
      img: "https://i.pinimg.com/564x/ef/ba/c5/efbac5024d58c9762dee57581e60475f.jpg",
    },
  ];

  const cardData = [
    {
      title: "dark souls remastered",
      image:
        "https://i.pinimg.com/736x/54/76/60/547660f752963dbfaf1665b9447fee52.jpg",

    },
    {
      title: "dark souls III",
      image:
        "https://i.pinimg.com/736x/b4/d6/20/b4d620ebfb6505257b121798e0c60a1c.jpg",

    },
    {
      title: "SEKIRO: SHADOWS DIE TWICE",
      image:
        "https://i.pinimg.com/736x/8c/69/99/8c69991496789f76e26521e7e7a22d34.jpg",

    },
    // {
    //   title: "Coding",
    //   image:
    //     "https://i.pinimg.com/736x/7b/22/87/7b228777af6b69c5d833f376400ed9c8.jpg",
    //   description:
    //     "Coding skill involves building and designing functional web applications using technologies like HTML, CSS, React, and Tailwind CSS. This includes creating responsive layouts, interactive components, and optimized user interfaces to deliver seamless digital experiences.",
    // },
    // {
    //   title: "Marketing",
    //   image:
    //     "https://i.pinimg.com/736x/43/3c/96/433c96ec4058a2066eaffdade904ba9f.jpg",
    //   description:
    //     "Marketing skill involves understanding and implementing strategies to drive engagement and sales. This includes knowledge of Facebook Ads, crafting compelling offers, optimizing sales funnels, and leveraging platforms like WhatsApp for lead generation and conversions.",
    // },
    // {
    //   title: "Trilingual",
    //   image:
    //     "https://i.pinimg.com/736x/9f/9b/22/9f9b228ba9d0653a019c14212e6fc676.jpg",
    //   description:
    //     "Trilingual skill refers to the ability to communicate fluently in three languages: Indonesian, English, and Japanese , enabling effective communication across different cultures and contexts.",
    // },
  ];

  return (
    <div className="bg-black text-white grid justify-center items-center ">
      <h1 className="text-7xl font-bold text-center ">FAV GAME</h1>
      <div className="md:flex grid  justify-center overflow-x-hidden gap-2 p-4 text-center" >
        {cardData.map((card, index) => (
          <Card
            key={index}
            title={card.title}
            image={card.image}
            description={card.description}
          />
        ))}
      </div>
    </div>
  );
}


export default Game