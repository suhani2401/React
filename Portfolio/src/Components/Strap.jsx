const Strap = () => {
  return (
    <>
      <div className="strap-green h-[7vh] w-screen bg-[#2D4D38] -rotate-[2.5deg] z-1"></div>
      <div className="strap-yellow absolute bottom-[38px] w-screen flex justify-evenly align-center bg-[#ffaa3d] p-2 z-100">
        <span class="material-symbols-rounded opacity-[0.8] pt-2">asterisk</span>
        <h2 className="text-[24px] block font-bold opacity-[0.8]">App Design</h2>
        <span class="material-symbols-rounded opacity-[0.8] pt-2">asterisk</span>
        <h2 className="text-[24px] block font-bold opacity-[0.8]">Website Design</h2>
        <span class="material-symbols-rounded opacity-[0.8] pt-2">asterisk</span>
        <h2 className="text-[24px] block font-bold opacity-[0.8]">Dashboard</h2>
        <span class="material-symbols-rounded opacity-[0.8] pt-2">asterisk</span>
        <h2 className="text-[24px] block font-bold opacity-[0.8]">Wireframe</h2>
        <span class="material-symbols-rounded opacity-[0.8] pt-2">asterisk</span>
      </div>
    </>
  );
}

export default Strap;
