import React, { useEffect } from "react";
import profile from "../assets/profile.jpg";
import Skill from "./Skill";
import Project from "./Project";
import Contact from "./Contact";
import Footer from "./Footer";

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="bg-gradient-to-r from-indigo-200 to-yellow-100">
      <div className="min-h-screen  flex flex-col items-center p-6">
        <div className="flex items-center gap-16 mb-6 w-full md:flex-row">
          <div className="profile w-full  flex   justify-center ">
            <img
              className="rounded-full   max-w-full w-full   transition-transform duration-300 hover:scale-110 sm:w-96 md:w-12/12 lg:w-96 "
              src={profile}
              alt="Profile"
            />
          </div>
          <div className="aboutprofile p-6 md:px-6   rounded-3xl border-2 bg-gray-100">
            <div className="font-semibold text-cyan-500 mb-4 ">About ME</div>
            <p className="font-light mb-4">
              Hi, I am a motivated and dedicated Full Stack Java Developer with
              expertise in building robust web applications using Java, Spring
              Boot, React.js, and MySQL. With a strong foundation in both
              frontend and backend development, I am eager to apply my knowledge
              and learn new technologies in a dynamic team environment.
            </p>
            <div className="flex flex-wrap justify-around">
              <div className="email transition-transform hover:font-bold hover:text-blue-800">
                <i className="fa-solid fa-envelope"></i>
                <a href="mailto:rushikeshrs2002@gmail.com">
                  rushikeshrs2002@gmail.com
                </a>
              </div>
              <div className="github transition-transform hover:font-bold hover:text-blue-800">
                <i className="fa-brands fa-github"></i>
                <a
                  href="http://github.com/rushishinde999"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Github
                </a>
              </div>
              <div className="linkedin transition-transform hover:font-bold hover:text-blue-800">
                <i className="fa-brands fa-linkedin "></i>
                <a
                  href="https://www.linkedin.com/in/rushikesh-shinde-31b521238"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
              </div>
              <div className="instagram transition-transform hover:font-bold hover:text-blue-800">
                <i className="fa-brands fa-instagram"></i>
                <a
                  href="https://www.instagram.com/rushi_shinde999/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Instagram
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center">
          <div className="text-6xl font-semibold mb-2">Welcome!</div>
          <span className="text-6xl font-semibold text-red-600">
            I’m a Full Stack Developer Turning Ideas into Reality."
          </span>
          <div className="text-4xl font-medium text-blue-500 mt-2">
            Computer Engineer
          </div>
        </div>
      </div>

      <Skill />
      <Project />
      <Contact />
      <Footer />
    </div>
  );
};

export default About;
