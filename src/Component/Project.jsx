import React from "react";
import ems from "../assets/ems.jpeg";
import todo from "../assets/todo.jpeg";
import portfolio from "../assets/portfolio.jpeg";
import Quiz from "../assets/Quiz.jfif";
const Project = () => {
  return (
    <div className="bg-gradient-to-r from-indigo-200 to-yellow-100 p-6">
      <div className="text-center text-cyan-300 text-3xl font-semibold mb-6">
        Projects
      </div>
      <div className="flex flex-wrap justify-center gap-8">
        <div className="project1 border-4 p-5 border-black w-full max-w-xs text-center flex flex-col items-center">
          <img
            className="h-32 mb-4"
            src={ems}
            alt="Employee Management System"
          />
          <h3 className="text-xl font-bold mb-2">Employee Management System</h3>
          <p className="info mb-4 text-left">
            &#8226; Developed a comprehensive Employee Management System using
            Spring Boot and React.js.
            <br />
            &#8226; Implemented MySQL for efficient data management.
            <br />
            &#8226; Created RESTful APIs to perform CRUD operations on employee
            data.
            <br />
            &#8226; Utilized React.js for a user-friendly and interactive
            frontend.
            <br />
            &#8226; Successfully designed and delivered a scalable and secure
            application.
          </p>
          <p>
            <i className="fa-brands fa-github"></i>
            <a
              href="https://github.com/rushishinde999/EmployeeManagementSystem"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline "
            >
              Github
            </a>
          </p>
        </div>

        <div className="project2 border-4 border-black w-full max-w-xs text-center flex flex-col items-center p-4">
          <img className="h-32 mb-4" src={todo} alt="TO-DO-LIST" />
          <h2 className="text-xl font-bold mb-2 p-2">TO-DO-LIST</h2>
          <p className="text-left">
            &#8226; Developed a to-do list application using React.js, enabling
            users to add and delete tasks efficiently.
            <br />
            &#8226; Utilized React hooks for state management and ensured a
            responsive, intuitive user interface.
            <br />
            &#8226; Focused on creating a smooth and interactive experience.
            <br />
            &#8226; Applied best practices in component-based architecture.
            <p>
              <i class="fa-regular fa-rectangle-list"></i>
              <a
                href="https://main.d2rbeu6xvd1rh2.amplifyapp.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline "
              >
                Project Link
              </a>
            </p>
          </p>
        </div>
        <div className="project2 border-4 border-black w-full max-w-xs text-center flex flex-col items-center p-4">
          <img className="h-32 mb-4" src={Quiz} alt="Quiz App" />
          <h2 className="text-xl font-bold mb-2 p-2">Quiz-App</h2>
          <p className="text-left">
            &#8226;A simple Quiz App built using React and Tailwind CSS that
            allows users to take multiple-choice quizzes.
            <br />
            &#8226;It displays one question at a time with options to choose
            from.
            <br />
            &#8226;After submitting an answer, users can see their score and
            move to the next question.
            <br />
            &#8226;The app is fully responsive, ensuring a smooth experience
            across devices.
            <p>
              <i class="fa-regular fa-rectangle-list"></i>
              <a
                href="https://main.do9v6pk9tahgq.amplifyapp.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline "
              >
                Project Link
              </a>
            </p>
          </p>
        </div>

        <div className="project2 border-4 border-black w-full max-w-xs text-center flex flex-col items-center p-4">
          <img className="h-32 mb-4" src={portfolio} alt="TO-DO-LIST" />
          <h2 className="text-xl font-bold mb-2 p-1">Portfolio</h2>
          <p className="text-left">
            &#8226; I created a personal portfolio using React and Tailwind CSS,
            showcasing my skills, projects, and experience.
            <br /> &#8226;The portfolio is designed with responsive layout and
            smooth navigation, implemented using React Router for seamless page
            transitions.
            <br />
            &#8226; It features sections like 'About Me' ,'Skills, and
            'Projects' to highlight my expertise.
            <br /> &#8226;The project is deployed on AWS Amplify for easy access
            and scalability.
            <p>
              <i class="fa-solid fa-user-tie"></i>
              <a
                href=""
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline "
              >
                Personal Portfolio
              </a>
            </p>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Project;
