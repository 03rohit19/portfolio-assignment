/* eslint-disable react/prop-types */
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();

const Experience = ({ data }) => {
  return (
    <div name="Skills" className="bg-white text-white w-full">
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-black ">
        <div className="md:mt-10 ">
          <div
            className="text-center mb-10"
            data-aos="fade-left"
            data-aos-duration="1000"
          >
            <a
              href="#"
              className="p-1 text-2xl mb-2 text-center px-4 text-blue-700 border border-slate-400 rounded-full baseline"
            >
              Skills
            </a>
          </div>
          <h1
            className="text-2xl font-bold text-black md:text-4xl text-center mt-2"
            data-aos="fade-left"
            data-aos-duration="1000"
          >
            Technologies I have worked with
          </h1>
        </div>
        <div
          className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0 md:mb-8 "
          data-aos="fade-left"
          data-aos-duration="1000"
        >
          {data?.skills?.map((skill) => (
            <div
              key={skill?._id}
              className="shadow-md hover:scale-105 duration-500 py-2 rounded-lg bg-slate-100"
            >
              <img src={skill?.image?.url} alt="" className="w-20 mx-auto" />
              <p className="mt-4">{skill?.image?.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
