import Star from "./Star";

const Strap = () => {
  return (
    <>
      <div className="strap-gradiant h-[12vh] w-[100vw] bg-gradient-to-r from-[--blue] via-[--mix] to-[--green] -mx-20 -z-10"></div>
      <div className="strap-black relative bottom-[10vh] w-[100vw] -mx-20 flex justify-evenly align-center bg-[--text-color] p-2 -rotate-[2.5deg] text-white z-100">
        <Star />
        <h2 className="text-[24px] block font-bold opacity-[0.8]">
          App Design
        </h2>
        <Star />
        <h2 className="text-[24px] block font-bold opacity-[0.8]">
          Website Design
        </h2>
        <Star />
        <h2 className="text-[24px] block font-bold opacity-[0.8]">Dashboard</h2>
        <Star />
        <h2 className="text-[24px] block font-bold opacity-[0.8]">Wireframe</h2>
        <Star />
      </div>
    </>
  );
}

export default Strap;