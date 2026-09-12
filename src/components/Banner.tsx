import bannerImg from "../assets/banner-stack.png";

const Banner = () => {
  return (
    <div className=" md:flex justify-between items-center container mx-auto my-10 px-4">
      <div className="py-10 space-y-6">
        <h2 className="text-3xl md:text-5xl font-extrabold">Build Your Ideal <br/> <span className="bg-gradient-to-r from-[#FF5722] via-[#D81B7E] to-[#7C3AED] bg-clip-text text-transparent">Development Stack</span></h2>
        <p className="text-[#475569] max-w-142 ">
          Explore frontend, backend, database, and tooling options,<br /> compare them
          side by side, and put together the stack that fits your next project.
        </p>
        <div className="flex gap-5">
          <button className="btn bg-gradient-to-r from-[#F97316]  to-[#EC4899] rounded text-white text-[10px] md:text-base">Explore Technologies</button>
          <button className="btn rounded md:px-11">Learn More</button>
        </div>
      </div>
      <div>
        <img src={bannerImg} alt=""  />
      </div>
    </div>
  );
};

export default Banner;
