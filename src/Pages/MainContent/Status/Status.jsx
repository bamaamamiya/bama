import Navbar from "../../Navbar/Navbar";
import Avatar from "./Avatar";
const Status = () => {
  return (
    <div>
      <div className="grid justify-center items-center border-t-2 border-b-2 p-0  sm:p-80">
        <div className="flex justify-end gap-2 ">
          <h1 className="text-end text-5xl">_</h1>
          <h1 className="text-end text-5xl">x</h1>
        </div>
        <div>
          <h1 className="text-7xl font-bold text-center">STATUS</h1>
          <Avatar />
        </div>
      </div>
    </div>
  );
};

export default Status;
