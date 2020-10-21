export default function ContactMe() {
  return (
    <div className="max-w-screen-xl mx-auto py-4 pb-4 md:pb-3 px-4 overflow-hidden sm:px-6 lg:px-8">
      <nav className="-mx-5 -my-2 flex flex-wrap flex-col justify-center items-center md:flex-row">
        <div className=" md:mt-0 py-2 px-5 flex justify-center">
          <a
            href="https://www.linkedin.com/in/kevinelee/"
            className="text-gray-300 hover:text-gray-100"
          >
            <span className="sr-only">LinkedIn</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
            </svg>
          </a>
          <a
            href="https://github.com/kevinelee"
            className="ml-6 text-gray-300 hover:text-gray-100"
          >
            <span className="sr-only">GitHub</span>
            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
              <path
                fillRule="evenodd"
                d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                clipRule="evenodd"
              />
            </svg>
          </a>
          <a
            href="./Kevin E. Lee.pdf"
            className="ml-6 text-gray-300 hover:text-gray-100"
          >
            <span className="sr-only">Resume</span>
            <svg
              className="h-6 w-6"
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"
              />
            </svg>
          </a>
        </div>
        <div className="px-5 py-2 border-t md:border-l md:border-t-0 border-gray-400">
          <div className="text-base leading-6 text-gray-300">
            Orange County, CA
          </div>
        </div>
        <div className="px-5 py-2">
          <a href="tel:5624055872">
            <div className="text-base leading-6 text-gray-300 hover:text-gray-100">
              562-405-5872
            </div>
          </a>
        </div>

        <div className="px-5 py-2">
          <a href="mailto:kevin.ej.lee@gmail.com">
            <div className="text-base leading-6 text-gray-300 hover:text-gray-100">
              kevin.ej.lee@gmail.com
            </div>
          </a>
        </div>
        <div className="px-5 py-2 border-t md:border-l md:border-t-0 border-gray-400 ">
          <p className="text-center text-base leading-6 text-gray-300 ">
            &copy; 2020 Kevin E. Lee
          </p>
        </div>
      </nav>
    </div>
  );
}
