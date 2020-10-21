import React from "react";
import Skill from "./skill-div";

export default function Skills() {

  const skills = [
    {link: '', className: '', src:'', alt:''},

  ]



  return (
    <>
      <div className="bg-white relative">
        {/* <div className=" " style={{ opacity: "10%" }}></div> */}
        <div className="max-w-screen-xl md:max-w-2xl lg:max-w-7xl mx-auto py-12 px-0 sm:px-6 py-12 lg:px-0 relative">
          <p className="text-1xl md:text-3xl text-center leading-6 font-semibold uppercase text-gray-600 tracking-wider ">
            Skills
          </p>
          <div className="px-6 mt-6 grid grid-cols-2 gap-3 md:grid-cols-3 lg:mt-8">
            {/* {
              skills.map((skill, index) => {
                return <Skill key={`${skill.link}-${index}`} {...skill}/>
              })
            } */}
            <Skill
              link="https://reactjs.org/"
              className="max-h-28 hover mt-2"
              src="./react-icon.png"
              alt="React"
              languageName="React"
            />
            <Skill
              link="https://www.javascript.com/"
              className="max-h-24 hover mt-2"
              src="./js-icon.png"
              alt="JavaScript"
              languageName="JavaScript"
            />
            <Skill
              link="https://nodejs.org/en/"
              className="max-h-24 hover mt-2"
              src="nodejs-icon.svg"
              alt="Node.js"
              languageName="Node.js"
            />
            <Skill
              link="https://www.postgresql.org/"
              className="max-h-24 hover mt-1"
              src="postgresql-icon.png"
              alt="PostgreSQL"
              languageName="PostgreSQL"
            />
            <Skill
              link="https://html.com/"
              className="max-h-24 hover"
              src="html-icon.png"
              alt="HTML5"
              languageName="HTML5"
            />
            <Skill
              link="https://expressjs.com/"
              className="max-h-24 hover"
              src="express-icon.png"
              alt="Express"
              languageName="Express"
            />
            <Skill
              link="https://tailwindcss.com/"
              className="max-h-16 mt-4 hover"
              src="tailwind-icon.png"
              alt="Tailwind"
              languageName="Tailwind"
            />
            <Skill
              link="https://developer.mozilla.org/en-US/docs/Web/CSS"
              className="max-h-24 hover"
              src="css3-icon.png"
              alt="CSS3"
              languageName="CSS3"
            />
            <Skill
              link="https://jquery.com/"
              className="max-h-24 hover"
              src="jquery-icon.png"
              alt="Jquery"
              languageName="Jquery"
            />
          </div>
        </div>
      </div>
    </>
  );
}
