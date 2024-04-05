/* eslint-disable react/prop-types */
// import ProImage1 from "../assets/projectImg1.jpg";
// import ProImage2 from "../assets/projectImg2.jpg";
// import ProImage3 from "../assets/projectImg3.jpg";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();
const About = ({ data }) => {
  return (
    <>
      <div
        name="About"
        className=" flex flex-col items-center px-6 mx-auto bg-slate-100"
      >
        <div
          className="flex flex-col mb-14 space-y-8 mt-10"
          data-aos="fade-left"
          data-aos-duration="1000"
        >
          <div className="text-center">
            <a
              href="#"
              className="p-1 text-2xl text-center px-4 text-blue-700 border border-slate-400 rounded-full baseline"
            >
              About me
            </a>
          </div>

          <h1 className="text-2xl font-bold text-center text-black md:text-4xl">
            {data?.about?.subTitle}
          </h1>
          <p className=" text-black md:text-2xl">{data?.about?.description}</p>
        </div>
      </div>
    </>
  );
};

export default About;
