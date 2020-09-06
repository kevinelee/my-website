import React from "react";

export default function Applications() {
  return (
    <>
      <div className="relative  pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
        <div className="absolute inset-0">
          <div className="bg-white h-1/3 sm:h-2/3"></div>
        </div>
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center">
            <h2 className="text-3xl md:text-5xl text-center leading-6 font-semibold uppercase text-gray-600 tracking-wider ">
              &mdash; Applications &mdash;
            </h2>
            <p className="mt-3 max-w-2xl mx-auto text-xl leading-7 text-gray-500 sm:mt-4">
              Check out some of the applications I've worked on and created!
            </p>
          </div>
          <div className="mt-12 grid gap-5 max-w-lg mx-auto lg:grid-cols-3 lg:max-w-none">
            <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
              <div className="flex-shrink-0">
                <img
                  className="h-48 w-full object-cover"
                  // src="https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80"
                  src="https://www.hotspawn.com/app/uploads/2018/08/hearthstone_whatis.png"
                  alt=""
                />
              </div>
              <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                <div className="flex-1">
                  <p className="text-sm leading-5 font-medium text-indigo-600">
                    <a href="" className="hover:underline">
                      Game
                    </a>
                  </p>
                  <a
                    href="https://memory-match.kevinelee.com"
                    className="block"
                  >
                    <h3 className="mt-2 text-xl leading-7 font-semibold text-gray-900">
                      Hearthstone Memory Match
                    </h3>
                    <p className="mt-3 text-base leading-6 text-gray-500">
                      Interactive game based off your favorite Blizzard Trading
                      Card Game
                    </p>
                  </a>
                </div>
              </div>
            </div>
            <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
              <div className="flex-shrink-0">
                <img
                  className="h-48 w-full object-cover"
                  src="https://www.snowcreekathleticclub.com/wp-content/uploads/2013/09/Tennis-Banner-e1463607515232.jpg"
                  alt=""
                />
              </div>
              <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                <div className="flex-1">
                  <p className="text-sm leading-5 font-medium text-indigo-600">
                    <a href="" className="hover:underline">
                      Shop
                    </a>
                  </p>
                  <a href="https://ace-tennis.kevinelee.com" className="block">
                    <h3 className="mt-2 text-xl leading-7 font-semibold text-gray-900">
                      Ace Tennis Goods
                    </h3>
                    <p className="mt-3 text-base leading-6 text-gray-500">
                      Shopping website for browsing tennis goods
                    </p>
                  </a>
                </div>
              </div>
            </div>
            <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
              <div className="flex-shrink-0">
                <img
                  className="h-48 w-full object-cover"
                  src="https://www.calendarp.com/wp-content/uploads/2019/02/YouTube-Channel-Art-CP-006.jpg"
                  alt=""
                />
              </div>
              <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                <div className="flex-1">
                  <p className="text-sm leading-5 font-medium text-indigo-600">
                    <a href="" className="hover:underline">
                      {" "}
                      Social Media
                    </a>
                  </p>
                  <a href="https://art4bid.kevinelee.com" className="block">
                    <h3 className="mt-2 text-xl leading-7 font-semibold text-gray-900">
                      ART4BID
                    </h3>
                    <p className="mt-3 text-base leading-6 text-gray-500">
                      An application to view and upload posts allowing the
                      bidding on items.
                    </p>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
