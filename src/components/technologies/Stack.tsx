import type { Dispatch, SetStateAction } from "react";
import type { ITechnologies } from "../../types/type";
import StackCard from "./StackCard";
import { Bounce, toast } from "react-toastify";

interface StackProps {
  selectTechnologies: ITechnologies[];
  setSelectedTechnologies: Dispatch<SetStateAction<ITechnologies[]>>;
}
const Stack = ({ selectTechnologies, setSelectedTechnologies }: StackProps) => {
  const handleRemoveAll = () => {
    setSelectedTechnologies([]);
    toast.warning("All technologies removed from your stack", {
    position: "top-center",
    autoClose: 3000,
    theme: "light",
    transition: Bounce,
  });
  };
  return (
    <div className="p-3 space-y-3">
      <h2 className="text-xl font-bold ">Your Stack</h2>
      {selectTechnologies.length === 0 ? (
        <>
          <p className="text-[#94A3B8]">No technologies selected yet.</p>
          <div className="border border-dotted py-10 px-4">
            <p className="text-[#94A3B8]">Your stack is empty.</p>
          </div>
        </>
      ) : (
        <div className="space-y-3">
          <p className="text-[#94A3B8]">
            {" "}
            {selectTechnologies.length}Technology Selected
          </p>
          <div className="space-y-2">
            {selectTechnologies.map((technology: ITechnologies) => {
              return (
                <StackCard
                  key={technology.id}
                  technology={technology}
                  selectTechnologies={selectTechnologies}
                  setSelectedTechnologies={setSelectedTechnologies}
                />
              );
            })}
          </div>
          <div className="flex justify-center">
            <button
              onClick={handleRemoveAll}
              className="btn text-red-500 border border-red-200"
            >
              Remove All
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Stack;
