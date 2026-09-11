import { IoStar } from "react-icons/io5";
import type { ITechnologies } from "../../types/type";
import { useState } from "react";
import { Bounce, toast } from "react-toastify";
interface TechnologyProps{
    technology: ITechnologies;
}
const TechnologyCard = ({technology}:TechnologyProps) => {
   const [isAdded, setIsAdded] = useState<boolean>(false);
   const handleAddToStack = () =>{
     setIsAdded(true)
       toast.success(`${technology.name} Added`, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
        });
   }

  return (
    <div className="">
      <div className={`shadow  p-3 space-y-4 rounded-2xl bg-[#FFFFFF] ${isAdded ? "border border-pink-600":""}`}>
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
        <button
        onClick={()=>handleAddToStack()}
         className={`btn rounded-xl  ${isAdded ? "btn-secondary" : "btn-neutral"} w-full`}>
          {isAdded ? "Added to Stack": "Add to Stack"}
        </button>
      </div>
   
    </div>
  );
};

export default TechnologyCard;
