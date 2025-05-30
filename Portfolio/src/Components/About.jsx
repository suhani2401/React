import { NavLink } from "react-router-dom";

const About = () => {
  return (
    <section className="about text-center">
      <h2 className="text-[30px] block font-bold">
        <span className="text-[35px] text-[--blue]">-{" "}</span>About Me
      </h2>
      <h2 className="text-[40px] block font-bold leading-[1.2] mb-[15px] mt-10">
        Who is{" "}
        <span className="font-bold italic decoration-2.2">Suhani Patel?</span>
      </h2>
      <p className="text-justify max-w-[80%] opacity-[0.8] m-auto mb-10">
        As a dedicated MERN stack developer 💻, I craft scalable web solutions
        that deliver seamless, high-performance applications. Using React,
        NodeJS, Express, and MongoDB, I build dynamic platforms like real-time
        chat systems and secure authentication frameworks 🔒. My passion for
        modern design 🎨 shines through in user-centric, responsive interfaces
        created with Figma, blending functionality with aesthetic appeal.
      </p>
      <div className="download-btn flex gap-[10px] bg-[--mix] inline-block rounded-[50px] w-fit cursor-pointer p-1 mb-10 m-auto">
        <span className="my-auto ml-3">Download Resume</span>
        <span className="material-symbols-rounded bg-[--text-color] rounded-[70px] my-auto text-white size-8 p-1">
          <span className="material-symbols-outlined">download</span>
        </span>
      </div>
      <span className="opacity-[0.7]">Follow me on:</span>
      <div className="social flex justify-center gap-3 mt-3">
        <NavLink
          to=""
          className="bg-[--btn-color] rounded-[50px] hover:bg-[#cbcbcb]"
        >
          <img
            src="./github.png"
            alt="github"
            className="m-2 size-6 cursor-pointer opacity-[0.8]"
          />
        </NavLink>
        <NavLink
          to=""
          className="bg-[--btn-color] rounded-[50px] hover:bg-[#cbcbcb]"
        >
          <img
            src="./linkedin.png"
            alt="linkedin"
            className="m-2 size-6 cursor-pointer opacity-[0.8]"
          />
        </NavLink>
        <NavLink
          to=""
          className="bg-[--btn-color] rounded-[50px] hover:bg-[#cbcbcb]"
        >
          <img
            src="./instagram.png"
            alt="instagram"
            className="m-2 size-6 cursor-pointer opacity-[0.8]"
          />
        </NavLink>
        <NavLink
          to=""
          className="bg-[--btn-color] rounded-[50px] hover:bg-[#cbcbcb]"
        >
          <img
            src="./whatsapp.png"
            alt="whatsapp"
            className="m-2 size-6 cursor-pointer opacity-[0.8]"
          />
        </NavLink>
      </div>
      <div className="green-div absolute -left-20 bottom-[-90vh] bg-[--mix] opacity-[0.6] h-[30vh] w-[15vw] rounded-t-[10px] skew-x-12"></div>
      <div className="blue-div absolute -right-20 bottom-[-90vh] bg-[--blue] opacity-[0.3] h-[30vh] w-[15vw] rounded-t-[10px] -skew-x-12"></div>
    </section>
  );
}
 
export default About;