import { IoStar } from "react-icons/io5";
import type { ITechnologies } from "../../types/type";
import { type Dispatch, type SetStateAction } from "react";
import { Bounce, toast } from "react-toastify";
interface TechnologyProps {
  technology: ITechnologies;
  selectTechnologies: ITechnologies[];
  setSelectedTechnologies: Dispatch<SetStateAction<ITechnologies[]>>;
}
const TechnologyCard = ({
  technology,
  selectTechnologies,
  setSelectedTechnologies,
}: TechnologyProps) => {

 const isAdded = selectTechnologies.some(
    (technologyItem) => technologyItem.id === technology.id
  );

  const handleAddToStack = () => {
    const existTechnology = selectTechnologies.find(
      (t) => t.id === technology.id
    );

    if (existTechnology) {
      const remainingTechnology = selectTechnologies.filter(
        (t) => t.id !== technology.id
      );

      setSelectedTechnologies(remainingTechnology);

      toast.success(`${technology.name} Removed`, {
        position: "top-center",
        autoClose: 3000,
        theme: "light",
        transition: Bounce,
      });
    } else {
      setSelectedTechnologies([...selectTechnologies, technology]);

      toast.success(`${technology.name} Added`, {
        position: "top-center",
        autoClose: 3000,
        theme: "light",
        transition: Bounce,
      });
    }
  };

  return (
    <div>
      <div
        className={`shadow  p-3 space-y-4 rounded-2xl bg-[#FFFFFF] ${isAdded ? "border border-pink-600" : ""}`}
      >
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
          onClick={handleAddToStack}
          className={`btn rounded-xl  ${isAdded ? "btn-secondary" : "btn-neutral"} w-full`}
        >
          {isAdded ? "Added to Stack" : "Add to Stack"}
        </button>
      </div>
    </div>
  );
};

export default TechnologyCard;
