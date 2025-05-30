const Home = () => {
  return (
    <section className="home relative flex justify-between align-center mt-10">
      <div className="text-container max-w-[48%] mt-10">
        <h1 className="text-[24px] block font-bold py-[5px] px-[10px] mb-[20px] boder-dashed border-2 border-[--blue] rounded-xl inline-block">
          Hello There!
        </h1>
        <h2 className="text-[55px] block font-bold leading-[1.2] mb-[15px]">
          I am{" "}
          <span className="text-[--blue] underline decoration-[--blue] underline-offset-[10px] font-bold italic decoration-2.2">
            Suhani Patel,
          </span>{" "}
          Web Developer.
        </h2>
        <p className="opacity-[0.8] mb-[20px] text-[18px]">
          Creating Scalable Web Solutions with MERN Stack and Modern Design
        </p>
        <div className="btn flex gap-10">
          <div className="view-btn flex gap-[10px] bg-[--mix] inline-block rounded-[50px] cursor-pointer">
            <span className="my-auto ml-5">View My Resume</span>
            <span className="material-symbols-rounded bg-[--text-color] rounded-[70px] my-auto mx-1 text-white size-8 p-1.5">
              arrow_forward_ios
            </span>
          </div>
          <div className="hire-me bg-tranparent border-[2px] border-solid border-black rounded-[50px] py-[8.5px] px-5 cursor-pointer">
            Hire Me
          </div>
        </div>
      </div>
      <div className="img-container">
        <img src="/suhani.png" alt="Suhani Patel" className="mx-20 z-100" />
        <div className="img-blue-bg absolute right-[40px] bottom-0.5 bg-[--blue] opacity-[0.4] h-[40vh] w-[20vw] rounded-[20px] -skew-x-12 -z-10"></div>
        <div className="img-green-bg absolute right-[260px] top-20 bg-[--mix] opacity-[0.6] h-[40vh] w-[15vw] rounded-[20px] skew-x-12 -z-10"></div>
        <div className="img-decor"></div>
      </div>
    </section>
  );
}
 
export default Home;
