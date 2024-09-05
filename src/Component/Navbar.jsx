import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar  m-0">
      <div className="nav  m-0  flex  md:flex-row flex-col p-3 bg-gradient-to-r from-indigo-200 to-yellow-100    ">
        <div className="name font-bold  text-2xl md:text-3xl md:mb-0 ">
          Rushikesh Ramchandra Shinde
        </div>
        <div className="nav-item ml-auto md:ml-auto md:mr-64">
          <ul className="flex flex-col md:flex-row md:text-2xl  gap-5 font-semibold text-2xl ">
            <li className="hover:font-bold transition-all ">
              <NavLink
                to={"/"}
                className={(e) => (e.isActive ? "text-red-600" : " ")}
              >
                About
              </NavLink>
            </li>
            <li className="hover:font-bold transition-all">
              <NavLink
                to="/Skill"
                className={(e) => (e.isActive ? "text-red-600" : "")}
              >
                Skill
              </NavLink>
            </li>
            <li className="hover:font-bold transition-all">
              <NavLink
                to="/Project"
                className={(e) => (e.isActive ? "text-red-600 " : " ")}
              >
                Project
              </NavLink>
            </li>
            <li className="hover:font-bold transition-all  ">
              <NavLink
                to="/Contact"
                className={(e) => (e.isActive ? "text-red-600 " : " ")}
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
        <div className=" h-20 w-20 md:w-auto  ">
          <button className=" bg-red-400 rounded-lg hover:font-bold transition-all p-1 md:py-2 md:px-4">
            Hire Me
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
