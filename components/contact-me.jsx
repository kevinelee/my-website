import React from "react";

export default function ContactMe() {
  return (
    <>
      <div className="flex p-24 text-white text-center flex-col md:flex-row md:justify-center">
        {/* <i className="fas fa-map-marker-alt"></i>  */}
        <div className="p-4 flex flex-col"><span className="text-lg">Location:</span>Orange County</div>
        <div className="p-4 flex flex-col"><span className="text-lg">Mobile#:</span>(562) 405-5872 </div>
        <div className="p-4 flex flex-col"><span className="text-lg">Email:</span>kevin.ej.lee@gmail.com</div>
      </div>
    </>
  );
}
