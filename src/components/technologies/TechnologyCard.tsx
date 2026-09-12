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
    const existTechnology = selectTechnologies.some(
      (t) => t.id === technology.id
    );

     

    if (existTechnology) {

      toast.warning(`${technology.name} is already in your stack`, {
        position: "top-center",
        autoClose: 3000,
        theme: "light",
        transition: Bounce,
      });
      return;
    } else {
      setSelectedTechnologies([...selectTechnologies, technology]);

      toast.success(`${technology.name} added to stack`, {
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
        <p className="text-[#64748B]">{technology.description}</p>
        <div className="flex justify-between items-center">
          <button className="btn">{technology.category}</button>
          <p className="block md:hidden xl:block text-[#64748B]">{technology.difficulty}</p>
          <p className="flex justify-center items-center gap-1 font-semibold">
            {" "}
            <span className="text-yellow-400">
              <IoStar />
            </span>{" "}
            {technology.rating}
          </p>
        </div>
        <button
          onClick={handleAddToStack}
          // disabled={isAdded}
          className={`btn rounded-xl  ${isAdded ? "btn-secondary" : "btn-neutral"} w-full`}
        >
          {isAdded ? "Added to Stack" : "Add to Stack"}
        </button>
      </div>
    </div>
  );
};

export default TechnologyCard;
