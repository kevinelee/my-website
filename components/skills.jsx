import React from "react";

export default function Skills() {
  return (
    <>
      <div className="bg-white">
        <div className="max-w-screen-xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
          <p className="text-5xl text-center leading-6 font-semibold uppercase text-gray-600 tracking-wider ">
            &mdash; Skills &mdash;
          </p>
          <div className="mt-6 grid grid-cols-2 gap-3 md:grid-cols-3 lg:mt-8">
            <div className="col-span-1 flex justify-center py-8 px-8 bg-gray-100">
              <a href="https://reactjs.org/">
                <img
                  className="max-h-28 hover"
                  src="https://cdn.auth0.com/blog/react-js/react.png"
                  alt="React"
                />
              </a>
            </div>
            <div className="col-span-1 flex justify-center py-8 px-8 bg-gray-100">
              <a href="https://www.javascript.com/">
                <img
                  className="max-h-24 hover hover"
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1024px-Unofficial_JavaScript_logo_2.svg.png"
                  alt="JavaScript"
                />
              </a>
            </div>
            <div className="col-span-1 flex justify-center py-8 px-8 bg-gray-100">
              <a href="https://nodejs.org/en/">
                <img
                  className="max-h-24 hover"
                  src="https://cdn.worldvectorlogo.com/logos/nodejs-icon.svg"
                  alt="Node.js"
                />
              </a>
            </div>
            <div className="col-span-1 flex justify-center py-8 px-8 bg-gray-100">
              <a href="https://www.postgresql.org/">
                <img
                  className="max-h-24 hover"
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/1200px-Postgresql_elephant.svg.png"
                  alt="PostgreSQL"
                />
              </a>
            </div>

            <div className="col-span-1 flex justify-center py-8 px-8 bg-gray-100">
              <a href="https://html.com/">
                <img
                  className="max-h-24 hover"
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/HTML5_Badge.svg/600px-HTML5_Badge.svg.png"
                  alt="HTML5"
                />
              </a>
            </div>

            <div className="col-span-1 flex justify-center py-8 px-8 bg-gray-100">
              <a href="https://expressjs.com/">
                <img
                  className="max-h-24 hover"
                  src="https://n7.nextpng.com/sticker-png/925/447/sticker-png-express-js-node-js-javascript-mongodb-node-js-text-trademark-logo-web-application.png"
                  alt="Express"
                />
              </a>
            </div>
            <div className="col-span-1 flex justify-center py-8 px-8 bg-gray-100">
              <a href="https://tailwindcss.com/">
                <img
                  className="max-h-16 mt-4 hover"
                  src="https://seeklogo.com/images/T/tailwind-css-logo-5AD4175897-seeklogo.com.png"
                  alt="Tailwind"
                />
              </a>
            </div>
            <div className="col-span-1 flex justify-center py-8 px-8 bg-gray-100">
              <a href="https://developer.mozilla.org/en-US/docs/Web/CSS">
                <img
                  className="max-h-24 hover"
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1200px-CSS3_logo_and_wordmark.svg.png"
                  alt="CSS3"
                />
              </a>
            </div>
            <div className="col-span-1 flex justify-center py-8 px-8 bg-gray-100">
              <a href="https://getbootstrap.com/">
                <img
                  className="max-h-24 hover"
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/1024px-Bootstrap_logo.svg.png"
                  alt="Bootstrap"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
