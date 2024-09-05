import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./Component/About";
import Navbar from "./Component/Navbar";
import Contact from "./Component/Contact";
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
      path: "/Project",
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
      path: "/Contact",
      element: (
        <>
          <Navbar /> <Contact />
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
