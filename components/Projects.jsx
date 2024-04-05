/* eslint-disable react/prop-types */

import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();

const Projects = ({ data }) => {
  return (
    <>
      <div
        name="Projects"
        className="flex flex-col items-center px-6 mx-auto bg-slate-100  "
      >
        <div
          className="flex flex-col mt-10 mb-14 space-y-8 md:mt-20"
          data-aos="fade-left"
          data-aos-duration="1000"
        >
          <div className="text-center">
            <a
              href="#"
              className="p-1 text-2xl text-center px-4 text-blue-700 border border-slate-400 rounded-full baseline"
            >
              Projects
            </a>
          </div>

          <h1 className="text-2xl font-bold text-black md:text-4xl">
            I craft experiences
          </h1>
        </div>

        <div
          className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0 mb-12"
          data-aos="fade-left"
          data-aos-duration="1000"
        >
          {data?.projects?.map((project) => (
            <div
              key={project._id}
              className="shadow-md shadow-gray-600 rounded-lg "
            >
              <img
                src={project?.image?.url}
                alt={project?.name}
                className="rounded-md duration-200 hover:scale-105 h-44 w-full"
              />
              <div className="flex items-center justify-center">
                <button
                  className="w-1/2 px-4 py-2 m-2 duration-200 hover:scale-105"
                  // onClick={() => handleClick(link)}
                >
                  {project?.title}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Projects;
