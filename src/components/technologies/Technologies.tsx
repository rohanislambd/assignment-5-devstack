import { use, useState } from "react";
import type { ITechnologies } from "../../types/type";
import TechnologyCard from "./TechnologyCard";
import Stack from "./Stack";

interface TechnologiesProps {
  technologiesPromise: Promise<ITechnologies[]>;
}

const Technologies = ({ technologiesPromise }: TechnologiesProps) => {
  const technologies = use(technologiesPromise);

  const [selectTechnologies, setSelectedTechnologies] = useState<ITechnologies[]>([]);



  
  return (
    <div className="container mx-auto ">
      <h2 className="text-4xl font-bold mx-4">
        Explore the{" "}
        <span className="bg-gradient-to-r from-[#EC4899] to-[#8B5CF6] bg-clip-text text-transparent">
          Technologies
        </span>
      </h2>
      <p className="text-[#64748B] text-[16px] pt-2 mx-4 mb-10">
        Pick one technology per category to build your ideal stack.
      </p>

      <div className="grid md:grid-cols-12 gap-8 mx-4">
        <div className="grid col-span-9  md:grid-cols-3 gap-5">
          {technologies.map((technology) => {
            return (
              <TechnologyCard key={technology.id}
               technology={technology} 
               selectTechnologies={selectTechnologies}
               setSelectedTechnologies={setSelectedTechnologies}
               />
            );
          })}
        </div>

        {/* Stack Cart */}
        <div className="col-span-9 md:col-span-3 min-h-100  md border border-gray-100 rounded-xl">
          <Stack
           selectTechnologies={selectTechnologies}
           setSelectedTechnologies={setSelectedTechnologies}
          />
        </div>
      </div>
    </div>
  );
};

export default Technologies;
