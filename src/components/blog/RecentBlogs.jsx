import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import Heading from "../Heading";
const RecentBlogs = () => {
  const [recentBlogs, setRecentBlogs] = useState([]);

  useEffect(() => {
    async function fetchRecentBlogs() {
      const response = await fetch(
       //"http://localhost:3000/blogs?limit=5&sort=published_date_desc"
       "http://api.risingfounder.io/blogs?limit=5&sort=published_date_desc"
      );
      const data = await response.json();
      // Assuming the API call returns the blogs sorted by published_date in descending order
      setRecentBlogs(data);
    }

    fetchRecentBlogs();
  }, []);

  // Adjust the JSX to incorporate only the first 5 blogs in 3 columns
  return (
    <div >
      <Heading
        className="md:max-w-md lg:max-w-4xl"
        title="Explore our most recent articles"
      />

      <div className="flex flex-row gap-4">
        {/* Left Column */}
        <div className="flex-1">
          {recentBlogs.slice(0, 2).map((blog) => (
            <div
              key={blog.id}
              className="col-span-12 md:col-span-3 p-5 shadow-lg rounded cursor-pointer"
            >
              <Link to={`/blogs/${blog.id}`}>
                <div>
                  <img src={blog.image} alt="" className="w-full" />
                </div>
                <h3 className="mt-4 mb-2 font-bold hover:text-blue-600">
                  {blog.title}
                </h3>
                <p className="mb-2 text-gray-600">
                  <FaUser className="inline-flex items-center mr-2" />
                  {blog.author}
                </p>
                <p className="text-sm text-gray-500">
                  Published: {blog.published_date}
                </p>
              </Link>
            </div>
          ))}
        </div>

        {/* Middle Column */}
        <div className="flex-2">
          {recentBlogs.slice(2, 3).map((blog) => (
            <div
              key={blog.id}
              className="col-span-6 p-5 shadow-lg rounded cursor-pointer"
              style={{ minHeight: "400px" }}
            >
              <Link to={`/blogs/${blog.id}`}>
                <div>
                  <img src={blog.image} alt="" className="w-full" />
                </div>
                <h3 className="mt-4 mb-2 font-bold hover:text-blue-600">
                  {blog.title}
                </h3>
                <p className="mb-2 text-gray-600">
                  <FaUser className="inline-flex items-center mr-2" />
                  {blog.author}
                </p>
                <p className="text-sm text-gray-500">
                  Published: {blog.published_date}
                </p>
              </Link>
            </div>
          ))}
        </div>

        {/* Right Column */}
        <div className="flex-1">
          {recentBlogs.slice(3, 5).map((blog) => (
            <div
              key={blog.id}
              className="col-span-3 md:col-span-3 p-5 shadow-lg rounded cursor-pointer"
            >
              <Link to={`/blogs/${blog.id}`}>
                <div>
                  <img src={blog.image} alt="" className="w-full" />
                </div>
                <h3 className="mt-4 mb-2 font-bold hover:text-blue-600">
                  {blog.title}
                </h3>
                <p className="mb-2 text-gray-600">
                  <FaUser className="inline-flex items-center mr-2" />
                  {blog.author}
                </p>
                <p className="text-sm text-gray-500">
                  Published: {blog.published_date}
                </p>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RecentBlogs;
