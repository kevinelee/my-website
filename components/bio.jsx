import React from "react";
import useTypewriter from "react-typewriter-hook";
import { useState, useEffect, useRef } from "react";

const MagicOcean = ["a developer.", "an engineer.", "a problem-solver."];
let index = 0;

export default function Bio() {
  const [magicName, setMagicName] = useState("a designer.");
  const intervalRef = useRef({});
  const name = useTypewriter(magicName);
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      // index = index + 1 > 2 ? 0 : ++index + 1;
      index = index > 2 ? 0 : ++index;
      setMagicName(MagicOcean[index]);
    }, 3000);
    return function clear() {
      clearInterval(intervalRef.current);
    };
  }, [magicName]);

  return (
    <>
      <div className="flex justify-center relative ">
        <div className="bio-bg" style={{ opacity: "15%" }}></div>
        <div className=" flex justify-center py-12 px-4 flex-col ">
          <img
            className="rounded-full h-36 w-36 m-auto"
            src="https://avatars2.githubusercontent.com/u/56710563?s=460&u=181725246b9e4928501cab97039dcf70e5f82f2b&v=4"
            alt="kevin"
          />
          <div className=" text-center mx-auto max-w-sm  px-4 w-9/12 h-24 sm:px-6 md:max-w-none md:h-20 lg:h-12 ">
            <h2 className="pt-4 pb-4 text-2xl tracking-tight leading-10 font-extrabold text-gray-900 sm:text-1xl sm:leading-none md:text-3xl md:max-w-screen-xl">
              Hi, I'm Kevin, and I am {name}
            </h2>
          </div>
          <p className="md:max-w-2xl lg:max-w-7xl  pt-4 pb-2">
            Hi, I'm Kevin E. Lee, and I'm a full-stack web developer. I've
            always been interested in the make-up of whatever I could get my
            hands on. Deconstructing and reconstructing has always been a hobby
            of mine, and I've discovered an avenue to do just that!
          </p>
          <p className="md:max-w-2xl lg:max-w-7xl  py-2">
            After graduating from CSU, Long Beach, I entered the
            freight-forwarding industry. I spent countless hours on Excel and
            the company's shipping software, Freightstream. I was constantly
            trying to find more efficient ways to maneuver and navigate through
            Freightstream until I inevitably reached the software's limitations.
            Each time, all I wanted was to be able to hop under the hood to
            fine-tune it to my liking. I came to realize I was far more
            interested in how I was working rather than the work itself.
          </p>
          <p className="md:max-w-2xl lg:max-w-7xl  py-2">
            With that revelation in mind, I entered and completed a full-time
            coding bootcamp, LearningFuze. I'm now able to create and polish
            applications and take ownership of my own craft. Using these
            newfound talents, I plan to contribute to future teams and push my
            own limits!
          </p>

          <div className="flex justify-center max-w-screen-xl mx-auto pt-6 px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-3 gap-8 md:grid-cols-6 lg:grid-cols-3">
              <div className="col-span-1 flex flex-row justify-center md:col-span-2 lg:col-span-1">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.linkedin.com/in/kevinelee/"
                >
                  <img
                    className="h-6 hover"
                    src="/linkedin-icon.png"
                    alt="linkedin"
                  />
                </a>
              </div>
              <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://github.com/kevinelee"
                >
                  <img
                    className="h-6 hover"
                    src="/github-icon.png"
                    alt="github"
                  />
                </a>
              </div>
              <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="/Kevin E. Lee.pdf"
                >
                  <img
                    className="h-6 hover"
                    src="/paperclip-icon.png"
                    alt="resume"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
