import { Link } from "react-router-dom";

const Start = () => {
  return (
    <div>
      <Link to="/home">
        <div className="bg-black text-white h-screen flex justify-center items-center ">
          <img
            src="/images/player.webp"
            alt="player-start"
            width="564"
            height="376"
          />
        </div>
      </Link>
    </div>
  );
};

export default Start;
