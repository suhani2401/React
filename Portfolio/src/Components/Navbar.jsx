import { NavLink } from "react-router";

const Navbar = () => {
  return (
    <div className="navbar p-2 flex justify-evenly w-[50vw]">
      <NavLink
        to="#home"
        className="hover:text-[#ffaa3d] hover:underline hover:underline-offset-[5px]"
      >
        Home
      </NavLink>
      <NavLink
        to="#services"
        className="hover:text-[#ffaa3d] hover:underline hover:underline-offset-[5px]"
      >
        Services
      </NavLink>
      <NavLink
        to="#about"
        className="hover:text-[#ffaa3d] hover:underline hover:underline-offset-[5px]"
      >
        About
      </NavLink>
      <NavLink
        to="#projects"
        className="hover:text-[#ffaa3d] hover:underline hover:underline-offset-[5px]"
      >
        Projects
      </NavLink>
    </div>
  );
}
 
export default Navbar;