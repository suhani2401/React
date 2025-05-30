import { NavLink } from "react-router";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <header className="header flex justify-between p-2">
      <div className="logo flex cursor-pointer">
        <img
          src="/logo.png"
          alt="logo"
          className="w-[2.5vw] h-[4.5vh] m-auto"
        />
        <h2 className="name text-[24px] block font-bold">
          uhani
        </h2>
      </div>
      <Navbar />
    </header>
  );
};

export default Header;
