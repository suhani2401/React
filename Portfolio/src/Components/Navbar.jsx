import { NavLink } from "react-router";

const Navbar = () => {
  return (
    <div className="navbar flex justify-end">
      <div className="navbar flex gap-10 mt-2">
        <NavLink
          to="#about"
          className="hover:text-[--blue] hover:underline hover:underline-offset-[5px]"
        >
          About
        </NavLink>
        <NavLink
          to="#projects"
          className="hover:text-[--blue] hover:underline hover:underline-offset-[5px]"
        >
          Projects
        </NavLink>
        <NavLink
          to="#services"
          className="hover:text-[--blue] hover:underline hover:underline-offset-[5px]"
        >
          Resume
        </NavLink>
      </div>
      <div className="contact flex bg-[--btn-color] text-[--text-color] ml-10 mt-1 rounded-[50px] p-1 hover:bg-[#e6e6e6] cursor-pointer">
        <NavLink to="#contact" className="my-auto mx-5">
          Contact Me
        </NavLink>
        <span className="material-symbols-rounded bg-[--text-color] rounded-[70px] my-auto mx-1 text-white w-7 h-7 p-1">
          arrow_forward_ios
        </span>
      </div>
    </div>
  );
};

export default Navbar;
