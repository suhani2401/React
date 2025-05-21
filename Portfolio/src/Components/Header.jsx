import { NavLink } from "react-router";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <header className="header stick flex justify-between m-auto p-2 mt-10 rounded-[20vw] max-w-7xl bg-[#2D4D38] text-white">
      <div className="logo flex gap-3">
        <img
          src="/logo.png"
          alt="logo"
          className="w-[2.8vw] h-[5.5vh] bg-[#ffaa3d] rounded-[30px]"
        />
        <h2 className="name pt-1 text-[24px] block font-bold">
          Suhani<span className="text-[#ffaa3d]">.</span>
        </h2>
      </div>
      <Navbar />
      <div className="contact bg-white text-[#2D4D38] py-2 px-5 rounded-[50px]">
        <NavLink to="#contact" className="">
          Contact Me
        </NavLink>
      </div>
    </header>
  );
};

export default Header;
