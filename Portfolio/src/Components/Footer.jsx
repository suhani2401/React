const Footer = () => {
  return (
    <footer className="flex flex-col mt-10">
      <div className="strap-yellow w-screen flex justify-evenly align-center bg-[#ffaa3d] p-1 z-100">
        <h2 className="text-[24px] block font-bold opacity-[0.8]">
          App Design
        </h2>
        <span className="material-symbols-rounded opacity-[0.8] pt-2">
          asterisk
        </span>
        <h2 className="text-[24px] block font-bold opacity-[0.8]">
          Website Design
        </h2>
        <span className="material-symbols-rounded opacity-[0.8] pt-2">
          asterisk
        </span>
        <h2 className="text-[24px] block font-bold opacity-[0.8]">Dashboard</h2>
        <span className="material-symbols-rounded opacity-[0.8] pt-2">
          asterisk
        </span>
        <h2 className="text-[24px] block font-bold opacity-[0.8]">Wireframe</h2>
      </div>

    </footer>
  );
}
 
export default Footer;