import React from "react";

export default function Skills() {
  return (
    <>
    <div className="bg-white">
    <div className="max-w-screen-xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
      <p className="text-center text-base leading-6 font-semibold uppercase text-gray-600 tracking-wider">
        Skills
      </p>
      <div className="mt-6 grid grid-cols-2 gap-0.5 md:grid-cols-3 lg:mt-8">
        <div className="col-span-1 flex justify-center py-8 px-8 bg-gray-50">
          <img className="max-h-12" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1024px-React-icon.svg.png" alt="React"/>
        </div>
        <div className="col-span-1 flex justify-center py-8 px-8 bg-gray-50">
          <img className="max-h-12" src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fcommons.wikimedia.org%2Fwiki%2FFile%3AUnofficial_JavaScript_logo_2.svg&psig=AOvVaw0swZuD3cii_E2BZcZl6zAI&ust=1599177905706000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCJCK7YnYy-sCFQAAAAAdAAAAABADhttps://tailwindui.com/img/logos/mirage-logo.svg" alt="JavaScript"/>
        </div>
        <div className="col-span-1 flex justify-center py-8 px-8 bg-gray-50">
          <img className="max-h-12" src="https://tailwindui.com/img/logos/tuple-logo.svg" alt="PostgreSQL"/>
        </div>
        <div className="col-span-1 flex justify-center py-8 px-8 bg-gray-50">
          <img className="max-h-12" src="https://tailwindui.com/img/logos/laravel-logo.svg" alt="Node.js"/>
        </div>
        <div className="col-span-1 flex justify-center py-8 px-8 bg-gray-50">
          <img className="max-h-12" src="https://tailwindui.com/img/logos/statickit-logo.svg" alt="HTML5"/>
        </div>
        <div className="col-span-1 flex justify-center py-8 px-8 bg-gray-50">
          <img className="max-h-12" src="https://tailwindui.com/img/logos/statamic-logo.svg" alt="CSS3"/>
        </div>
      </div>
    </div>
  </div>
    </>
  );
}
