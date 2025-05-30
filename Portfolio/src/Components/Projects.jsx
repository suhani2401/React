const Projects = () => {
  return (
    <section className="projects mt-10">
      <div className="flex justify-between">
        <h1 className="text-[35px] block font-bold">Latest projects</h1>
        <button className="text-[19px] opacity-[0.7] font-[450]">
          See All
        </button>
      </div>
      <div className="project-card-list flex">
        <div className="project-card border-[1px] border-solid border-gray-300 rounded-[50px]">
          {/* <img src="" alt="" /> */}
          <h2>Project Title</h2>
          <span>technology</span>
        </div>
        <div className="project-card border-[1px] border-solid border-gray-300 rounded-[50px]">
          {/* <img src="" alt="" /> */}
          <h2>Project Title</h2>
          <span>technology</span>
        </div>
        <div className="project-card border-[1px] border-solid border-gray-300 rounded-[50px]">
          {/* <img src="" alt="" /> */}
          <h2>Project Title</h2>
          <span>technology</span>
        </div>
      </div>
      <div className="skills-technologies"></div>
      <button>
        Get In Touch
        <span className="material-symbols-rounded">arrow_forward</span>
      </button>
    </section>
  );
}
 
export default Projects;