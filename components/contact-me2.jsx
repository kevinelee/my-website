import React from "react";

export default function ContactMe() {
  return (
    <>
      <div className="flex p-24 text-white text-center flex-col md:flex-row md:justify-around">
        <div className="p-4 flex flex-col md:text-2xl text-gray-400">
          LOCATION:
          <span className="text-lg md:text-3xl text-white">
            Orange County, CA
          </span>
        </div>
        <div className="text-lg p-4 flex flex-col md:text-2xl text-gray-400">
          MOBILE#:<span className="md:text-3xl text-white">562-405-5872</span>{" "}
        </div>
        <div className="text-lg p-4 flex flex-col md:text-2xl text-gray-400 ">
          EMAIL:
          <span className="md:text-3xl text-white">
            kevin.ej.lee@gmail.com
          </span>
        </div>
      </div>
    </>
  );
}
