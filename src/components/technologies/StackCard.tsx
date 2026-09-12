import type { Dispatch, SetStateAction } from "react";
import type { ITechnologies } from "../../types/type";
import { RxCross2 } from "react-icons/rx";

interface IStackCardProps{
    technology:ITechnologies;
    selectTechnologies: ITechnologies[];
    setSelectedTechnologies: Dispatch<SetStateAction<ITechnologies[]>>
}

const StackCard = ({technology, selectTechnologies, setSelectedTechnologies}:IStackCardProps) => {

    const handleRemoveTechnology = (technology:ITechnologies) =>{
        const remainingTechnology = selectTechnologies.filter((selectTechnology) => selectTechnology.id !== technology.id );
        setSelectedTechnologies(remainingTechnology)
    }
  return (
    <div>
      <div className="p-2 flex  gap-4 border items-center border-gray-200 rounded-2xl ">
        <img src={technology.icon} alt="" className="w-9" />
        <div>
          <h4>{technology.name}</h4>
          <p>{technology.category}</p>
        </div>
        
        <button 
         className="ml-auto"
        onClick={() => handleRemoveTechnology(technology)}
        ><RxCross2 /></button>
       
      </div>
      
    </div>
    
  );
};

export default StackCard;
