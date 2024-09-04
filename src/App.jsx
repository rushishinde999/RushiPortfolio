import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./Component/About";
import Navbar from "./Component/Navbar";
import Conatct from "./Component/Conatct";
import Skill from "./Component/Skill";
import Project from "./Component/Project";

const App = () => {
  const Router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <Navbar /> <About />
        </>
      ),
    },
    {
      path: "/project",
      element: (
        <>
          <Navbar /> <Project />
        </>
      ),
    },
    {
      path: "/Skill",
      element: (
        <>
          <Navbar /> <Skill />
        </>
      ),
    },
    {
      path: "/Conatact",
      element: (
        <>
          <Navbar /> <Conatct />
        </>
      ),
    },

    {},
  ]);

  return (
    <>
      <RouterProvider router={Router} />
    </>
  );
};

export default App;
