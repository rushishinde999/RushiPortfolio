import React from "react";
import profile from "../assets/profile.jpg";
import Skill from "./Skill";
import Project from "./Project";
import Conatct from "./Conatct";
import Footer from "./Footer";

const About = () => {
  return (
    <div className="bg-gradient-to-r from-indigo-200 to-yellow-100">
      <div className="min-h-screen flex flex-col items-center p-6">
        <div className="flex items-center gap-16 mb-6">
          <div className="profile w-72">
            <img
              className="rounded-full h-60 w-60 transition-transform duration-300 hover:scale-110"
              src={profile}
              alt="Profile"
            />
          </div>
          <div className="aboutprofile w-3/6 p-6 rounded-3xl border-2 bg-gray-100">
            <div className="font-semibold text-cyan-500 mb-4">About ME</div>
            <p className="font-light mb-4">
              Hi, I am a motivated and dedicated Full Stack Java Developer with
              expertise in building robust web applications using Java, Spring
              Boot, React.js, and MySQL. With a strong foundation in both
              frontend and backend development, I am eager to apply my knowledge
              and learn new technologies in a dynamic team environment.
            </p>
            <div className="flex justify-around">
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
                <i className="fa-brands fa-linkedin"></i>
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
      <Conatct />
      <Footer />
    </div>
  );
};

export default About;
