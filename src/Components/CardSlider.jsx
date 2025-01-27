import Card from "./Card";

export const CardSlider = ({ cards }) => {
    return (
      <div className="flex overflow-x-auto space-x-4 p-4 scrollbar-none">
        {cards.map((card, index) => (
          <div
            key={index}
            className="hover:blur-none blur-sm hover:scale-105 transition-all duration-300"
          >
            <Card {...card} />
          </div>
        ))}
      </div>
    );
  };
  
  export default CardSlider;