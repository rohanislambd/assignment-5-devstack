import { IoMdMenu } from "react-icons/io";
import Logo from "../assets/logo-text.png";
const Navbar = () => {
  return (
    <div className="border-b border-gray-100 px-4">
      <div className="container mx-auto my-5">
        <nav className="flex justify-between items-center">
            <div className="text-3xl md:hidden">
                <IoMdMenu />
            </div>
          <img src={Logo} alt="DevStack"  />
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
            <button className="cursor-pointer ">Sign In</button>

            <button className="btn btn-secondary  rounded-full">Sign Up</button>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
