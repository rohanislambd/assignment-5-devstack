import { use } from "react";
import type { ITechnologies } from "../../types/type";
import TechnologyCard from "./TechnologyCard";

interface TechnologiesProps {
  technologiesPromise: Promise<ITechnologies[]>;
}

const Technologies = ({ technologiesPromise }: TechnologiesProps) => {
  const technologies = use(technologiesPromise);
  console.log(technologies);
  return (
    <div className="container mx-auto ">
      <h2 className="text-4xl font-bold">
        Explore the{" "}
        <span className="bg-gradient-to-r from-[#EC4899] to-[#8B5CF6] bg-clip-text text-transparent">
          Technologies
        </span>
      </h2>
      <p className="text-[#64748B] text-[16px] pt-2">
        Pick one technology per category to build your ideal stack.
      </p>

      <div className="grid grid-cols-12">
        <div className="grid col-span-8  grid-cols-3 gap-5">
          {technologies.map((technology) => {
            return <TechnologyCard technology={technology} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Technologies;
