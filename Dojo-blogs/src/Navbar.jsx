import { Link } from "react-router-dom";

const Navbar = () => {
  return ( 
    <nav className="p-[20px] flex item-center max-w-[900px] my-0 mx-auto border-b-x border-solid border border-[#f2f2f2]">
      <h1 className="text-[#f1356d] text-[40px] font-bold my-[10.72px] mx-0 block">The Dojo Blog</h1>
      <div className="ml-auto">
        <Link to="/" className="ml-[16px] no-underline p-[6px] hover:text-[#f1356d] relative top-[25px]">Home</Link>
        <Link to="/create" className="ml-[16px] no-underline p-[6px] hover:text-[#f1356d] relative top-[25px]">New Blog</Link>
      </div>
    </nav>  
  );
}
 
export default Navbar;    