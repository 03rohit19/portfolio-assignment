// import Navbar from "./components/NavItems";
// import Header from "./components/Header";
import { useEffect, useState } from "react";
import Home from "./components/Home";
// import About from "./components/About";
// import Header3 from "./components/Header3";
import About from "./components/About";
import Services from "./components/Services";
import Projects from "./components/Projects";
import Testimonials from "./components/Testimonials";
import Nav from "./components/Nav2";
// import Header9 from "./components/Header9";
// import Header6 from "./components/Header6";
// import Header4 from "./components/Header4";
import Skills from "./components/Skills";
import Connect from "./components/Connect";

function App() {
  const [data, setData] = useState();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://portfolio-backend-30mp.onrender.com/api/v1/get/user/65b3a22c01d900e96c4219ae"
        );
        const { user, success } = await response.json();
        if (success) {
          console.log(user);
          setData(user);
        } else {
          throw new Error("Failed to fetch user data");
        }
      } catch (error) {
        console.error("Error fetching user data:", error.message);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <Nav />
      <Home data={data} />
      <Skills data={data} />

      <About data={data} />

      <Services data={data} />
      <Projects data={data} />
      <Testimonials data={data} />
      <Connect />
      {/* <Header9 /> */}
    </>
  );
}

export default App;
