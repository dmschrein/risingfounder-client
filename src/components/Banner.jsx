import React from "react";
import { Link } from "react-router-dom";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter, FaFacebook } from "react-icons/fa6";

const Banner = () => {
  return (
    <div className="banner-background px-4 py-20 mx-auto">
      <div className="px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-15">
          {/* Column 1 - Title */}
          <div className="text-left lg:text-left">
            <h3 className="text-4xl lg:text-4xl leading-snug font-bold mb-5">
              Want more? Our newsletter makes dreams come true.
            </h3>
            <p className="font-medium tracking-wide italic-text">
              <em>
                Expert advice, inspiring founder conversations, and exclusive
                content delivered right to your inbox.
              </em>
            </p>
          </div>

          {/* Column 2 - Subscription */}
          <div className="md:max-w-md lg:max-w-lg">
            {/* <p className="font-medium tracking-wide text-gray-300">
              Subscribe for Updates
            </p> */}
            <form className="mt-4 flex flex-col">
              <input
                type="email"
                placeholder="example@email.com"
                name="email"
                id="email"
                className="flex-grow w-full h-12 px-4 mb-3 transition duration-200 bg-white border border-gray-700 rounded shadow-sm aspect-auto md:mr-2 md:mb-0 focus:border-purple-500 focus:outline-none"
              />
              <button
                type="submit"
                className="mt-4 inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-black hover:bg-violet-700 focus:outline-none border"
              >
                Sign Up!
              </button>
            </form>
            <div className="flex flex-col justify-between pt-5 pb-10 border-t border-gray-800 sm:flex-row">
              <div className="flex items-center mt-4 space-x-4 sm:mt-0">
                <a
                  href=""
                  className="text-gray-500 transition-all duration-300
              hover:text-orange-500"
                >
                  <FaInstagram className="h-6 w-6" />
                </a>
                <a
                  href=""
                  className="text-gray-500 transition-all duration-300
              hover:text-orange-500"
                >
                  <FaTwitter className="h-6 w-6" />
                </a>
                <a
                  href=""
                  className="text-gray-500 transition-all duration-300
              hover:text-orange-500"
                >
                  <FaFacebook className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
