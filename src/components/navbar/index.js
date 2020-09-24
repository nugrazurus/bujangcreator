import React from "react";

const Navbar = ({logo, small}) => {
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white transition duration-150 ease-in-out"
              aria-label="Main menu"
              aria-expanded="false"
            >
              <svg
                className="block h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              <svg
                className="hidden h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex-shrink-0">
              <img
                className="block lg:hidden h-8 w-auto"
                src={small}
                alt="Workflow logo"
              />
              <img
                className="hidden lg:block h-8 w-auto"
                src={logo}
                alt="Workflow logo"
              />
            </div>
            <div className="hidden sm:block sm:ml-6">
              <div className="flex">
                <a
                  href="#"
                  className="ml-4 px-3 py-2 rounded-md text-sm font-medium leading-5 text-black hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-purple-700 transition duration-150 ease-in-out"
                >
                  Dashboard
                </a>
                <a
                  href="#"
                  className="ml-4 px-3 py-2 rounded-md text-sm font-medium leading-5 text-black hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-purple-700 transition duration-150 ease-in-out"
                >
                  Our Team
                </a>
                <a
                  href="#"
                  className="ml-4 px-3 py-2 rounded-md text-sm font-medium leading-5 text-black hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-purple-700 transition duration-150 ease-in-out"
                >
                  Projects
                </a>
                <a
                  href="#"
                  className="ml-4 px-3 py-2 rounded-md text-sm font-medium leading-5 text-black hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-purple-700 transition duration-150 ease-in-out"
                >
                  Contact
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="hidden sm:hidden">
        <div className="px-2 pt-2 pb-3">
          <a
            href="#"
            className="block px-3 py-2 rounded-md text-base font-medium text-white bg-gray-900 focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out"
          >
            Dashboard
          </a>
          <a
            href="#"
            className="mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out"
          >
            Team
          </a>
          <a
            href="#"
            className="mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out"
          >
            Projects
          </a>
          <a
            href="#"
            className="mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out"
          >
            Calendar
          </a>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
