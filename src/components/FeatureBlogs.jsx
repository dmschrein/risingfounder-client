import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa6";
import Section from "./Section";
import { featureblog1, featureblog2, featureblog3, featureblog4 } from "../assets";

const FeatureBlogs = () => {
  const [popularBlogs, setPopularBlogs] = useState([]);

  useEffect(() => {
    //fetch("http://localhost:3000/blogs")
    fetch("http://api.risingfounder.io/blogs")
      .then((res) => res.json())
      .then((data) => setPopularBlogs(data.slice(0, 15)));
  }, []);

  return (
    <Section className="overflow-hidden" id="featured-blogs">
      <div className="container relative">
      <div className="container-lg mx-auto px-4 lg:px-6 xl:px-8">
        <h1 className="text-5xl mb-6">
          Founders: "Have you tried writing it down?"
        </h1>
        {/* First blog container */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* First featured blog */}
          <div className="col-span-3 border-2 border-black lg:flex w-full max-h-[500px] overflow-hidden">
            <div className="lg:w-1/2 p-8 flex flex-col justify-center">
              <h3 className="text-4xl mb-5 text-left">
                Manifestation vs. Journaling vs. Planning
              </h3>
              <p className="font-medium tracking-wide italic-text">
                <em>
                  What's the best method for organizing your thoughts and
                  enhancing your productivity? This comparative analysis dives
                  into the unique benefits of manifestation, journaling, and
                  planning. Understand how each practice serves different
                  purposes and when you might choose one over the others to
                  optimize your personal or professional life.
                </em>
              </p>
            </div>
            {/* Column 2 - Image */}
            <div className="lg:flex-grow flex justify-end">
              <img
                src={featureblog1}
                alt="Visual Representation"
                className="max-h-full w-auto object-cover"
                style={{ maxHeight: "100%", maxWidth: "100%" }}
              />
              <div className="flex flex-col justify-between pt-5 pb-10 border-t border-gray-800 sm:flex-row">
                <div className="flex items-center mt-4 space-x-4 sm:mt-0"></div>
              </div>
            </div>
          </div>
        </div>
        {/* Second blog container */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* second featured blog */}
          <div className="col-span-3 border-2 border-black lg:flex w-full max-h-[500px] overflow-hidden">
            {/* Column 2 - Image */}
            <div className="lg:flex-grow flex justify-left">
              <img
                src={featureblog2}
                alt="Visual Representation"
                className="max-h-full w-auto object-cover"
                style={{ maxHeight: "100%", maxWidth: "100%" }}
              />
              <div className="flex flex-col justify-between pt-5 pb-10 border-t border-gray-800 sm:flex-row">
                <div className="flex items-center mt-4 space-x-4 sm:mt-0"></div>
              </div>
            </div>
            {/* Title*/}
            <div className="lg:w-1/2 p-8 flex flex-col justify-center">
              <h3 className="text-4xl mb-5 text-left">
                Journal Prompts for Building Your Dream Brand
              </h3>
              <p className="font-medium tracking-wide italic-text">
                <em>
                  Kickstart your entrepreneurial journey with these curated
                  journal prompts designed to help you conceptualize and grow
                  your dream brand. This blog provides actionable insights and
                  creative prompts that guide you through the initial stages of
                  brand building, from ideation to execution.
                </em>
              </p>
            </div>
          </div>
        </div>
        {/* Third blog container */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Third featured blog */}
          <div className="col-span-3 border-2 border-black lg:flex w-full max-h-[500px] overflow-hidden">
            <div className="lg:w-1/2 p-8 flex flex-col justify-center">
              <h3 className="text-4xl mb-5 text-left">
                Why we manifestations are better written down?
              </h3>
              <p className="font-medium tracking-wide italic-text">
                <em>
                  Discover the powerful impact of putting your manifestations
                  into writing. This blog explores how the act of writing
                  reinforces intentions and transforms abstract dreams into
                  tangible goals. Learn about the psychological effects and the
                  science behind why writing down your desires can significantly
                  increase the likelihood of them becoming reality.
                </em>
              </p>
            </div>
            {/* Column Image */}
            <div className="lg:flex-grow flex justify-end">
              <img
                src={featureblog3}
                alt="Visual Representation"
                className="max-h-full w-auto object-cover"
                style={{ maxHeight: "100%", maxWidth: "100%" }}
              />
              <div className="flex flex-col justify-between pt-5 pb-10 border-t border-gray-800 sm:flex-row">
                <div className="flex items-center mt-4 space-x-4 sm:mt-0"></div>
              </div>
            </div>
          </div>
        </div>
        {/* Fourth blog container */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Fourth featured blog */}
          <div className="col-span-3 border-2 border-black lg:flex w-full max-h-[500px] overflow-hidden">
            {/* Column Image */}
            <div className="lg:flex-grow flex justify-left">
              <img
                src={featureblog4}
                alt="Visual Representation"
                className="max-h-full w-auto object-cover"
                style={{ maxHeight: "100%", maxWidth: "100%" }}
              />
              <div className="flex flex-col justify-between pt-5 pb-10 border-t border-gray-800 sm:flex-row">
                <div className="flex items-center mt-4 space-x-4 sm:mt-0"></div>
              </div>
            </div>
            {/* Title*/}
            <div className="lg:w-1/2 p-8 flex flex-col justify-center">
              <h3 className="text-4xl mb-5 text-left">
                Optimizing Mental Clarity Through Structured Writing: Techniques
                and Tips
              </h3>
              <p className="font-medium tracking-wide italic-text">
                <em>
                  Enhance your mental clarity and focus through structured
                  writing techniques. This post offers practical advice on
                  organizing your thoughts effectively, using methods like mind
                  mapping, bullet journaling, and the SMART criteria. Gain
                  insights into how structured writing can help you clear mental
                  clutter and achieve your daily goals more efficiently.
                </em>
              </p>
            </div>
          </div>
          </div>
        </div>
      </div>
    </Section>
  );
};
export default FeatureBlogs;
