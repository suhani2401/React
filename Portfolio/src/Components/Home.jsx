const Home = () => {
  return (
    <section className="home max-w-7xl mx-auto relative flex justify-between align-center">
      <div className="details max-w-[45%] ml-20 mt-20">
        <h1 className="text-[24px] block font-bold py-[5px] px-[10px] mb-[20px] boder-dashed border-2 border-[#ffaa3d] inline-block">
          Hello There!
        </h1>
        <h2 className="text-[55px] block font-bold leading-[1.2] mb-[15px]">
          I am{" "}
          <span className="text-[#ffaa3d] underline underline-offset-[10px] font-medium italic decoration-2.2">
            Suhani Patel,
          </span>{" "}
          Full-stack Developer Based in India.
        </h2>
        <p className="opacity-[0.8] mb-[20px] text-[18px]">
          I’m an experienced Product Designer with 18+ years in the field,
          collaborating with various companies and startups.
        </p>
        <div className="btn flex gap-10">
          <div className="symbol-btn flex gap-[10px] bg-[#ffaa3d] border-[2px] text-white border-solid border-[#ffaa3d] inline-block p-0.2 rounded-[50px]">
            <div className="view-portfolio-btn bg-[#2D4D38] border-[2px] border-solid border-[#2D4D38] inline-block py-2 px-4 rounded-[50px]">
              View My Portfolio
            </div>
            <span className="material-symbols-rounded bg-white rounded-[70px] text-black mt-1.5 mr-1 w-8 h-8 p-1.5">
              arrow_forward_ios
            </span>
          </div>
          <div className="hire-me bg-tranparent border-[2px] border-solid border-black rounded-[50px] py-[8.5px] px-5">
            Hire Me
          </div>
        </div>
      </div>
      <div className="profile mt-[80px] mx-20">
        <div className="circle bg-[#ffaa3d] flex justify-center align-center w-[400px] h-[450px] rounded-[60%_40%_60%_40%/50%_60%_40%_50%] item-center">
          <img src="/suhani.png" alt="Suhani Patel" className="" />
        </div>
        <div className="img-decor"></div>
      </div>
    </section>
  );
}
 
export default Home;
