/* eslint-disable react/prop-types */
import { FaCheck } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";
import { FaPhone } from "react-icons/fa6";

import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();

const Home = ({ data }) => {
  return (
    <>
      <div
        name="Home"
        className="mt-14 bg-white flex flex-col px-6 py-10 mx-auto space-y-0 md:space-y-0 md:flex-row md:mt-20"
        data-aos="fade-left"
        data-aos-duration="1000"
      >
        <div className="md:w-[50%] md:ml-20 lg:ml-40 ">
          <img
            src={data?.about?.avatar?.url}
            alt="Hero-image"
            className="md:-mb-0 md:overflow-hidden w-[90%]"
          ></img>
        </div>
        <div className="flex flex-col mb-14 space-y-4 mt-20 justify-center md:w-[70%]">
          <div className="text-center md:text-left mt-10 md:ml-16 ">
            <a
              href="#"
              className="text-2xl p-1 md:text-center px-4 md:text-5xl font-bold text-blue-700 border border-slate-400 rounded-full baseline"
            >
              👋 I am {data?.about?.name}
            </a>
          </div>
          <div>
            <h1 className="max-w-md text-4xl font-bold text-left text-black md:text-5xl md:ml-16">
              {data?.about?.title}
            </h1>
          </div>

          <div>
            <p className="max-w-sm  text-black text-left md:ml-16 text-2xl">
              {data?.about?.subTitle}
            </p>
          </div>

          <div className=" text-center  md:flex flex-col-2 md:ml-16 justify-between w-[60%]">
            <div className=" text-left  col-span-1 mb-1 ">
              <p className="flex ml-1 font-sans font-semibold text-[#fff">
                <FaCheck className=" my-1 mx-1 text-[#1363c6]  " />
                <span className="text-black ">
                  Experience :{data?.about?.exp_year} years
                </span>
              </p>
              <h6 className="flex ml-1 m-1 font-sans font-semibold ">
                <IoMail className="text-[#1363c6]  my-1 mx-1 " />
                <span className="text-black">{data?.about?.contactEmail}</span>
              </h6>
            </div>
            <div className=" text-left col-span-1 mb-1 ">
              <h6 className="flex ml-1 m-1 font-sans font-semibold">
                <FaLocationDot className="text-[#1363c6]  m-1 " />
                <span className="text-black">{data?.about?.address}</span>
              </h6>
              <h6 className="flex m-1 font-sans font-semibold">
                <FaPhone className="text-[#1363c6]   m-1 " />
                <span className="text-black">{data?.about?.phoneNumber}</span>
              </h6>
            </div>
          </div>

          <div className="flex justify-center md:justify-start space-x-2 md:ml-16">
            <a
              href="#"
              className="p-3 px-6  text-white text-center bg-[#1363c6] rounded-full baseline hover:bg-blue-700"
            >
              Contact
            </a>

            <a className="bg-[#fff] rounded-full p-4 border cursor-pointer border-[#1363c6]  ">
              <FaTwitter className="text-center text-[#1363c6] hover:text-black " />
            </a>
            <a className="bg-[#fff] rounded-full p-4 border cursor-pointer border-[#1363c6]  ">
              <FaInstagram className="text-center text-[#1363c6] hover:text-black" />
            </a>
            <a className="bg-[#fff] rounded-full p-4 border cursor-pointer border-[#1363c6]  ">
              <FaLinkedinIn className="text-center text-[#1363c6] hover:text-black" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
