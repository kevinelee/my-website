import React from "react";
import Skill from "./skill-div";

export default function Skills() {
  return (
    <>
      <div className="bg-white relative">
        <div className="skills-bg " style={{ opacity: "15%" }}></div>
        <div className="max-w-screen-xl md:max-w-2xl lg:max-w-7xl mx-auto py-12 px-0 sm:px-6 py-12 lg:px-0 relative">
          <p className="text-1xl md:text-3xl text-center leading-6 font-semibold uppercase text-gray-600 tracking-wider ">
            Skills
          </p>
          <div className="mt-6 grid grid-cols-2 gap-3 md:grid-cols-3 lg:mt-8">
            <Skill
              link="https://reactjs.org/"
              className="max-h-28 hover"
              src="https://cdn.auth0.com/blog/react-js/react.png"
              alt="React"
            />
            <Skill
              link="https://www.javascript.com/"
              className="max-h-24 hover hover"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1024px-Unofficial_JavaScript_logo_2.svg.png"
              alt="JavaScript"
            />
            <Skill
              link="https://nodejs.org/en/"
              className="max-h-24 hover"
              src="https://cdn.worldvectorlogo.com/logos/nodejs-icon.svg"
              alt="Node.js"
            />
            <Skill
              link="https://www.postgresql.org/"
              className="max-h-24 hover"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/1200px-Postgresql_elephant.svg.png"
              alt="PostgreSQL"
            />
            <Skill
              link="https://html.com/"
              className="max-h-24 hover"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/HTML5_Badge.svg/600px-HTML5_Badge.svg.png"
              alt="HTML5"
            />
            <Skill
              link="https://expressjs.com/"
              className="max-h-24 hover"
              src="https://n7.nextpng.com/sticker-png/925/447/sticker-png-express-js-node-js-javascript-mongodb-node-js-text-trademark-logo-web-application.png"
              alt="Express"
            />
            <Skill
              link="https://tailwindcss.com/"
              className="max-h-16 mt-4 hover"
              src="https://seeklogo.com/images/T/tailwind-css-logo-5AD4175897-seeklogo.com.png"
              alt="Tailwind"
            />
            <Skill
              link="https://developer.mozilla.org/en-US/docs/Web/CSS"
              className="max-h-24 hover"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1200px-CSS3_logo_and_wordmark.svg.png"
              alt="CSS3"
            />
            <Skill
              link="https://jquery.com/"
              className="max-h-24 hover"
              src="https://cdn.iconscout.com/icon/free/png-256/jquery-10-1175155.png"
              alt="Jquery"
            />
          </div>
        </div>
      </div>
    </>
  );
}
