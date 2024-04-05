/* eslint-disable react/prop-types */

import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();

const Services = ({ data }) => {
  return (
    <>
      <div
        name="Services"
        className="text-center mt-10 mb-10"
        data-aos="fade-left"
        data-aos-duration="1000"
      >
        <a
          href="#"
          className="p-1 text-2xl text-center px-4 text-blue-700 border border-slate-400 rounded-full baseline"
        >
          Services
        </a>
      </div>
      <div className="flex flex-col items-center px-6 mx-auto space-y-0 md:space-y-0 md:flex-row md:mb-5 ">
        <div className="flex flex-wrap justify-center gap-4 mt-10 mb-10 md:mt-10 md:mb-20 ">
          {data?.services?.map((service) => (
            <div
              key={service._id}
              className="flex flex-col items-center p-6 space-y-4 bg-[#fff] rounded-lg border border-slate-500 transition-transform hover:scale-105 hover:border-blue-600"
              data-aos="fade-left"
              data-aos-duration="2000"
            >
              <img
                src={service.image.url}
                alt="Hero-image"
                className="md:overflow-hidden rounded-full w-[200px] transition-transform hover:scale-105"
              />

              <div className="space-y-0 transition-transform hover:scale-105">
                <h5 className="text-lg font-bold text-black">{service.name}</h5>
                <p className="text-lg  text-black text-center">
                  Charges : <span className="font-bold">{service?.charge}</span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Services;
