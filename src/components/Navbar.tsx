import { IoMdMenu } from "react-icons/io";
import Logo from "../assets/logo-text.png";
const Navbar = () => {
  return (
    <div className="border-b border-gray-100 px-2 sticky top-0 bg-white">
      <div className="container mx-auto py-5">
        <nav className="flex justify-between items-center">
            <div className="text-3xl md:hidden">
                <IoMdMenu />
            </div>
          <img src={Logo} alt="DevStack" className="w-21 md:w-auto"/>
          <ul className="hidden md:flex justify-center items-center gap-7">
            <li>
              <a href="">Home</a>
            </li>
            <li>
              <a href="">Technologies</a>
            </li>
            <li>
              <a href="">Projects</a>
            </li>
            <li>
              <a href="">About</a>
            </li>
            <li>
              <a href="">Contact</a>
            </li>
          </ul>
          <div className="flex justify-between items-center gap-3">
            <button className="cursor-pointer font-semibold">Sign In</button>

            <button className="text-white bg-[#D91B7E] text-[12px] md:test-[14px] font-semibold rounded-full px-4 md:px-7 py-1 md:py-3">Sign Up</button>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
