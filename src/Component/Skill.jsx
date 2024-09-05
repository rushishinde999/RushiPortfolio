import React from "react";
import html from "../assets/htmlpng.jpeg";
import css from "../assets/csspng.jpeg";
import javascript from "../assets/javascript.png";
import mysql from "../assets/mysql.jpeg";
import java from "../assets/java.jpeg";
import mongo from "../assets/mongo.jpeg";
import react from "../assets/react.jpeg";
import spring from "../assets/springboot.jpeg";
import git from "../assets/github-icon.png";
import github from "../assets/git1.svg";
import postman from "../assets/postman.jpeg";

const Skill = () => {
  return (
    <div className="min-h-screen p-6 bg-gradient-to-r from-indigo-200 to-yellow-100">
      <h2 className="text-center text-cyan-400 font-bold text-4xl mb-8">
        My Skills
      </h2>
      <div className="flex flex-wrap justify-center gap-10">
        <div className="flex flex-col items-center">
          <img
            className="h-32 w-32 p-3 border-2 border-indigo-200 rounded-lg transition-transform duration-300 hover:scale-125"
            src={html}
            alt="HTML"
          />
          <span className="mt-2">HTML</span>
        </div>
        <div className="flex flex-col items-center">
          <img
            className="h-32 w-32 p-3 border-2 border-indigo-200 rounded-lg transition-transform duration-300 hover:scale-125"
            src={css}
            alt="CSS"
          />
          <span className="mt-2">CSS</span>
        </div>
        <div className="flex flex-col items-center">
          <img
            className="h-32 w-32 p-3 border-2 border-indigo-200 rounded-lg transition-transform duration-300 hover:scale-125"
            src={javascript}
            alt="JavaScript"
          />
          <span className="mt-2">JavaScript</span>
        </div>
        <div className="flex flex-col items-center">
          <img
            className="h-32 w-32 p-3 border-2 border-indigo-200 rounded-lg transition-transform duration-300 hover:scale-125"
            src={react}
            alt="React"
          />
          <span className="mt-2">React</span>
        </div>
        <div className="flex flex-col items-center">
          <img
            className="h-32 w-32 p-3 border-2 border-indigo-200 rounded-lg transition-transform duration-300 hover:scale-125"
            src={mongo}
            alt="MongoDB"
          />
          <span className="mt-2">MongoDB</span>
        </div>
        <div className="flex flex-col items-center">
          <img
            className="h-32 w-32 p-3 border-2 border-indigo-200 rounded-lg transition-transform duration-300 hover:scale-125"
            src={mysql}
            alt="MySQL"
          />
          <span className="mt-2">MySQL</span>
        </div>
        <div className="flex flex-col items-center">
          <img
            className="h-32 w-32 p-3 border-2 border-indigo-200 rounded-lg transition-transform duration-300 hover:scale-125"
            src={java}
            alt="Java"
          />
          <span className="mt-2">Java</span>
        </div>
        <div className="flex flex-col items-center">
          <img
            className="h-32 w-32 p-3 border-2 border-indigo-200 rounded-lg transition-transform duration-300 hover:scale-125"
            src={spring}
            alt="Spring Boot"
          />
          <span className="mt-2">Spring Boot</span>
        </div>
        <div className="flex flex-col items-center">
          <img
            className="h-32 w-32 p-3 border-2 border-indigo-200 rounded-lg transition-transform duration-300 hover:scale-125"
            src={git}
            alt="Git"
          />
          <span className="mt-2">Git</span>
        </div>
        <div className="flex flex-col items-center">
          <img
            className="h-32 w-32 p-3 border-2 border-indigo-200 rounded-lg transition-transform duration-300 hover:scale-125"
            src={github}
            alt="GitHub"
          />
          <span className="mt-2">GitHub</span>
        </div>

        <div className="flex flex-col items-center">
          <img
            className="h-32 w-32 p-3 border-2 border-indigo-200 rounded-lg transition-transform duration-300 hover:scale-125"
            src={postman}
            alt="postman"
          />
          <span className="mt-2">Postman</span>
        </div>
      </div>
    </div>
  );
};

export default Skill;
