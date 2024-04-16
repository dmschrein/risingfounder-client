import SignUpForm from "../components/form/SignUpForm";
import PersonalInfoForm from "../components/form/PersonalInfoForm";
import BusinessInfoForm from "../components/form/BusinessInfoForm";
import logo from "../assets/knitt.svg";
import { useState, useEffect } from "react";
import axios from "axios";
import Box from "../components/Box";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import BrandInfo from "../components/nichequiz/BrandInfo";

const MultiStepForm = () => {
  const navigate = useNavigate();
  const [page, setPage] = useState(0);
  const [data, setData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    firstName: "",
    lastName: "",
    company: "",
    marketingGoals: "",
    marketingPlatforms: "",
    marketingPainpoints: "",
    marketingPainpointsWhy: "",
  });

  {
    /* Handle data & Access backend */
  }
  const RegisterUser = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("/register", {
        // Your existing axios post data
        username: data.username,
        email: data.email,
        password: data.password,
        firstName: data.firstName,
        lastName: data.lastName,
        company: data.company,
        marketingGoals: data.marketingGoals,
        marketingPlatforms: data.marketingPlatforms,
        marketingPainpoints: data.marketingPainpoints,
        marketingPainpointsWhy: data.marketingPainpointsWhy,
      });

      // Assume successful registration if no error is thrown
      toast.success("Registration successful!");
      navigate("/success");
    } catch (error) {
      console.log(error);
      // Check if the error is a MongoDB duplicate key error
      if (error.response && error.response.data.code === 11000) {
        // Customize this message as needed
        toast.error(
          `The email ${error.response.data.keyValue.email} is already in use. Please use a different email.`
        );
      } else {
        // General error handling
        toast.error("Registration failed. Please try again.");
      }
    }
  };

  const titles = ["Let's Get Started!", "Title2", "Title2", "Title2","Title2","Title2","Tell us a little about yourself", "More Info"];
  const formQuestions = [
    "Which industry is your company in?",
    "What are your company values?",
    "Who is your ideal customer?", //  b2b, b2c
    "Who does your brand serve?", // sex?
    "What is your ideal customer's age?", // young
    "What is your brand's personality?", // funny, luxury
    "What is your favorite marketing channel?", // fb, instagram
    "What sets your brand apart from competitors?", // eco, handmade
  ]
  const formSubHeadings = ["subheading1", "subheading2", "subheading3", "subheading4", "subheading5", "subheading6", "subheading7", "subheading8"]
  const { company, ...otherProps } = data;
  const canSave = [...Object.values(otherProps)].every(Boolean);
  const [isCurrentFormValid, setIsCurrentFormValid] = useState(false);

  const PageDisplay = () => {
    switch (page) {
      case 0:
        return (
          <BrandInfo
            data={data}
            setData={setData}
            setFormValid={setIsCurrentFormValid}
          />
        );
      case 1:
        return (
          <PersonalInfoForm
            data={data}
            setData={setData}
            setFormValid={setIsCurrentFormValid}
          />
        );
      case 2:
        return (
          <BusinessInfoForm
            data={data}
            setData={setData}
            setFormValid={setIsCurrentFormValid}
          />
        );
      case 3:
        return (
          <SignUpForm 
          data={data}
          setData={setData}
          setFormValid={setIsCurrentFormValid}
          />
        )
      default:
        return null;
    }
  };

  return (
    <div className="flex flex-col items-center justify-center w-full min-h-screen bg-gradient-to-r from-red-500 to-violet-600 py-9 px-6">
      <ToastContainer />
      <div className="w-full max-w-4xl space-y-8">
        <div className="bg-white shadow-lg rounded-lg p-10">
          {/* Progress Bar */}
          <div className="mb-4">
            <div className="w-full bg-gray-200 rounded-full h-2 dark:bg-gray-700">
              <div
                className={`h-2 rounded-full ${
                  page === 0 ? "w-1/3" : page === 1 ? "w-2/3" : "w-full"
                } bg-blue-600`}
              ></div>
            </div>
          </div>
          <h1 className="text-center text-3xl font-bold text-gray-900">
            {titles[page]}
          </h1>
          {/* Form contents */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="md:col-span-1 justify-end pr-4">
              {/* Put question content here */}
              <h1 className="text-black text-2xl font-bold">{formQuestions[page]}</h1>
              <h2 className="text-black text-l">{formSubHeadings[page]}</h2>
            </div>
            <div className="md:col-span-1">
              {/* Put input field here */}
              {PageDisplay()}
            </div>
          </div>
          {/* Navigation Buttons */}
          <div className="flex items-center justify-between pt-4">
            {page > 0 && (
              <button
                disabled={page == 0}
                onClick={() => {
                  setPage((currPage) => currPage - 1);
                }}
                className="flex cursor-pointer w-full justify-center rounded-md border border-transparent bg-[#7F00FF] py-2 px-4 text-sm font-medium text-white hover:bg-violet-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                Back
              </button>
            )}
            <button
              onClick={(e) => {
                if (page === titles.length - 1) {
                  if (isCurrentFormValid) {
                    RegisterUser(e);
                  } else {
                    alert("Please fill in all required fields.");
                  }
                  console.log(data);
                } else {
                  if (isCurrentFormValid) {
                    setPage((currPage) => currPage + 1);
                  } else {
                    alert("Please fill in all required fields.");
                  }
                }
              }}
              disabled={page === titles.length - 1 && !canSave}
              className="flex cursor-pointer w-full justify-center rounded-md border border-transparent bg-[#7F00FF] py-2 px-4 text-sm font-medium text-white hover:bg-violet-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              {page === titles.length - 1 ? "Submit" : "Continue"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MultiStepForm;
