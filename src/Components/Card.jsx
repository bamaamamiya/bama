const Card = ({ title, description, image , sound}) => {
  const playSound = () => {
    const audio = new Audio('/audio/Select Sound Effect.mp3');
    audio.play();
  };
  return (
    <div className="md:w-60  h-autospace-y-2 border-2 p-6 rounded-2xl hover:scale-90 hover:border-r-4 hover:border-b-8  "
    onMouseEnter={playSound}>
      <div className="flex">
        <img
          src={image}
          alt={title}
          className="overflow-hidden md:h-80 w-full object-cover rounded-lg"
        />
      </div>
      <div>
      <div className="font-bold text-xl mb-2 text-white capitalize">{title}</div>
        <p className="md:text-justify">
          {description}
        </p>
      </div>
    </div>
  );
};

export default Card