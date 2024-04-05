import { useState } from "react";
import { Link } from "react-scroll";
import { FaBars, FaTimes } from "react-icons/fa";

// eslint-disable-next-line react/prop-types, no-unused-vars
const Navbar = ({ data }) => {
  const [nav, setNav] = useState(false);

  const links = [
    {
      id: 1,
      link: "Home",
    },
    {
      id: 2,
      link: "Skills",
    },
    {
      id: 3,
      link: "About",
    },
    {
      id: 4,
      link: "Services",
    },
    {
      id: 5,
      link: "Projects",
    },
    {
      id: 6,
      link: "Testimonials",
    },
    {
      id: 7,
      link: "Connect",
    },
  ];

  return (
    <div className="fixed top-0 right-0 justify-around w-full h-20 px-10 text-white bg-blue-700 flex items-center z-50">
      <div className="text-4xl font-sans font-bold text-[#fff]">John Doe</div>
      <ul className="hidden md:flex flex-1 justify-end">
        {links.map(({ id, link }) => (
          <li
            key={id}
            className="px-4 cursor-pointer capitalize font-medium text-[#fff] hover:scale-105 duration-200"
          >
            <Link to={link} smooth duration={500}>
              {link}
            </Link>
          </li>
        ))}
      </ul>
      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden flex justify-end"
      >
        {nav ? (
          <FaTimes className="text-3xl md:hidden block text-white" />
        ) : (
          <FaBars className="text-3xl md:hidden block text-white" />
        )}
      </div>

      {nav && (
        <ul className="flex flex-col  absolute top-0 left-0 w-full h-screen bg-blue-700 ">
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize py-6 text-2xl"
            >
              <Link
                onClick={() => setNav(!nav)}
                to={link}
                smooth
                duration={500}
              >
                {link}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Navbar;
