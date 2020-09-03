import React from "react";

export default function ContactMe() {
  return (
    <>
      <div className="flex p-24 text-white text-center flex-col md:flex-row md:justify-around">
        {/* <i className="fas fa-map-marker-alt"></i>  */}
        <div className="p-4 flex flex-col text-2xl text-gray-400">
          Location:
          <span className="text-3xl text-white">Orange County, CA</span>
        </div>
        <div className="p-4 flex flex-col text-2xl text-gray-400">
          Mobile#:<span className="text-3xl text-white">562-405-5872</span>{" "}
        </div>
        <div className="p-4 flex flex-col text-2xl text-gray-400">
          Email:
          <span className="text-3xl text-white">kevin.ej.lee@gmail.com</span>
        </div>
      </div>
    </>
  );
}
