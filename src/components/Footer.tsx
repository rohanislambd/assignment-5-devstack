import FooterImg from "../assets/logo-text.png";
const Footer = () => {
  return (
    <div className="container mx-auto mt-25">
      <div className="flex justify-between items-center border-b border-gray-200 px-4 xl:px-0 pb-10 ">



        <div className="flex flex-col justify-center items-center md:block">
          <img src={FooterImg} alt="" />
          <p className="mt-4 font-semibold text-[#64748B] text-[12px] px-3 md:px-0 text-center md:text-start max-w-[310px]">
            Curated tools, technologies, and resources for developers building modern software.
          </p>
          <ul className="flex gap-4 mt-5 cursor-pointer text-[#475569] ">
            <li>
              <a href="https://github.com/rohanislambd">GitHub</a>
            </li>
            <li>
              <a href="">Twitter</a>
            </li>
            <li>
              <a href="">LinkedIn</a>
            </li>
          </ul>
        </div>
        {/*PRODUCT  */}
        <div className="space-y-3 hidden md:block">
          <h3 className="text-[#0F172A] font-semibold">PRODUCT</h3>
          <ul className="text-[#64748B] cursor-pointer space-y-3">
            <li>
              <a href=""></a>Home
            </li>
            <li>
              <a href=""></a>Technologies
            </li>
            <li>
              <a href=""></a>Projects
            </li>
          </ul>
        </div>
        {/* COMPANY */}
        <div className="space-y-3 hidden md:block"> 
          <h3 className="text-[#0F172A] font-semibold">COMPANY</h3>
          <ul className="text-[#64748B] cursor-pointer space-y-3">
            <li>
              <a href="">About</a>
            </li>
            <li>
              <a href="">Contact</a>
            </li>
            <li>
              <a href="">Careers</a>
            </li>
          </ul>
        </div>
        {/* LEGAL */}
        <div className="space-y-3 hidden md:block">
          <h2 className="text-[#0F172A] font-semibold">LEGAL</h2>
          <ul className="text-[#64748B] cursor-pointer space-y-3">
            <li>
              <a href="">Privacy Policy</a>
            </li>
            <li>
              <a href="">Privacy Policy</a>
            </li>
          </ul>
        </div>
         
      </div>

      <div className="flex justify-between items-center mt-10 mb-12 px-4 md:px-0">
         <p className="text-[#94A3B8] text-[12px]">© 2026 Dev Stack. All rights reserved.</p>
         <ul className="text-[#94A3B8] text-[12px] flex gap-5">
            <li><a href="">Privacy</a></li>
            <li><a href=""></a>Terms</li>
         </ul>
      </div>

    </div>
  );
};

export default Footer;
