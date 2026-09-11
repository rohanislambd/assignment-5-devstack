import { IoStar } from "react-icons/io5";
import type { ITechnologies } from "../../types/type";
interface TechnologyProps{
    technology: ITechnologies;
}
const TechnologyCard = ({technology}:TechnologyProps) => {
  return (
    <div className="">
      <div className=" shadow min-h-50 p-3 space-y-4 bg-[#FFFFFF]">
        <div className="flex justify-between">
          <img src={technology.icon} alt="" className="max-w-10" />
          <p className="text-blue-400 btn rounded-full">{technology.badge}</p>
        </div>
        <h3 className="font-bold">{technology.name}</h3>
        <p>{technology.description}</p>
        <div className="flex justify-between items-center">
          <button className="btn">{technology.category}</button>
          <p>{technology.difficulty}</p>
          <p className="flex justify-center items-center gap-1">
            {" "}
            <span className="text-yellow-400">
              <IoStar />
            </span>{" "}
            {technology.rating}
          </p>
        </div>
        <button className="btn rounded-xl  bg-black w-full text-white">
          Add to Stack
        </button>
      </div>
   
    </div>
  );
};

export default TechnologyCard;
