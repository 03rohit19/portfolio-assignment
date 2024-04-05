import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const Connect = () => {
  return (
    <div
      name="Connect"
      className="w-full  p-4 text-black bg-slate-100"
      data-aos="fade-left"
      data-aos-duration="1000"
    >
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto item-cente">
        <div className="pb-8 mt-10 text-cente">
          <div className="text-center">
            <a
              href="#"
              className="p-1 text-2xl text-center px-4 text-blue-700 border border-slate-400 rounded-full baseline"
            >
              I would love to connect
            </a>
          </div>

          <h1 className="text-2xl font-bold text-black text-center mt-5  md:text-4xl">
            I am always looking to work on exciting projects, learn new things,
            or just chat about tech.
          </h1>
        </div>
        <div className="flex justify-center items-center">
          <form
            action="https://getform.io/f/d8d4cb12-ee8a-499a-975d-ac5a3657139f"
            method="POST"
            className="flex flex-col w-full md:w-1/2"
          >
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="p-2 bg-transparent rounded-md text-black focus:outline-none border-2 border-black"
            />
            <input
              type="text"
              name="email"
              placeholder="Enter your email"
              className="p-2 my-4 bg-transparent  rounded-md text-black focus:outline-none  border-2 border-black"
            />
            <textarea
              name="message"
              rows="10"
              className="p-2 bg-transparent  rounded-md text-black focus:outline-none  border-2 border-black"
            ></textarea>
            <button className="text-[#fff] font-semibold bg-[#1363C6]  border borrder-white cursor-pointer px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300">
              Lets connect
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Connect;
