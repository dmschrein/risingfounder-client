import React from "react";
import IndustryCategoryInfo from "../components/nichequiz/IndustryCategoryInfo";
import MarketingGoalsInfo from "../components/nichequiz/MarketingGoalsInfo";
import MarketingPlatformsUsed from "../components/nichequiz/MarketingPlatformsUsed";
import MarketingPainPointsInfo from "../components/nichequiz/MarketingPainPointsInfo";
import MarketingPainpointsWhy from "../components/nichequiz/MarketingPainpointsWhy";
import CompanyValuesInfo from "../components/nichequiz/CompanyValuesInfo";
import EmailInfo from "../components/nichequiz/EmailInfo";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import PersonalInfoForm from "../components/form/PersonalInfoForm";
import BrandPersonality from "../components/nichequiz/BrandPersonality";
import SignUpForm from "../components/form/SignUpForm";
import axios from "axios";

const NicheQuiz = () => {
  const navigate = useNavigate();
  const [page, setPage] = useState(0);
  const [data, setData] = useState({
    industryCategories: [],
    companyValues: [],
    marketingGoals: [],
    marketingPlatforms: [],
    marketingPainpoints: [],
    marketingPainpointsWhy: [],
    brandPersonality: [],
    firstName: "",
    lastName: "",
    company: "",
    email: "",
  });

  {
    /* Handle data & Access backend */
  }
  const handleQuizSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("/submit", {
        // Your existing axios post data
        industryCategories: data.industryCategories,
        companyValues: data.companyValues,
        marketingGoals: data.marketingGoals,
        marketingPlatforms: data.marketingPlatforms,
        marketingPainpoints: data.marketingPainpoints,
        marketingPainpointsWhy: data.marketingPainpointsWhy,
        brandPersonality: data.brandPersonality,

        firstName: data.firstName,
        lastName: data.lastName,
        company: data.company,

        username: data.username,
        email: data.email,
        password: data.password,
      });

      // Assume successful registration if no error is thrown
      toast.success("Quiz submission successful!");
      navigate("/success");
    } catch (error) {
      console.log(error);
      toast.error(`The quiz is having issues here`)
      // Check if the error is a MongoDB duplicate key error
      if (error.response && error.response.data.code === 11000) {
        // Customize this message as needed
        toast.error(
          `The email ${error.response.data.keyValue.email} is already in use. Please use a different email.`
        );
      } else {
        // General error handling
        console.log(error)
        toast.error("Quiz submission failed. Please try again.");
      }
    }
  };

  const titles = ["1/9", "2/9", "3/9", "4/9", "5/9", "6/9", "7/9", "8/9", "9/9"];
  const quizQuestions = [
    "1Which industry is your company in?",
    "2What are your company values?",
    "3What are your marketing goals?",
    "4What marketing platforms and tools do you currently use?", // sex?
    "5What are your biggest marketing painpoints?", // young
    "6Why are they your biggest marketing painpoints?", // young
    "7What is your brand's personality?", // funny, luxury
    "8What's your name and company?", // fb, instagram
    "9Where should we send your results?", // eco, handmade
  ];
  const quizSubHeadings = [
    "1This will help our algorithm get you better results! Please select all that apply.",
    "2We want to include what's important to you! Please select all that apply.",
    "3Dream big! we're gonna make it happen! Please select all that apply.",
    "4Please select all that apply.",
    "5Hopefully, there aren't too many! Please select all that apply.",
    "6Please select all that apply.",
    "7Or what would you like it to be? Please select all that apply.",
    "",
    "9Don't worry! We won't spam you.",
  ];
  const { company, ...otherProps } = data;
  const canSave = [...Object.values(otherProps)].every(Boolean);
  const [isCurrentFormValid, setIsCurrentFormValid] = useState(false);

  const PageDisplay = () => {
    switch (page) {
      case 0:
        return (
          <IndustryCategoryInfo
            data={data}
            setData={setData}
            setFormValid={setIsCurrentFormValid}
          />
        );
      case 1:
        return (
          <CompanyValuesInfo
            data={data}
            setData={setData}
            setFormValid={setIsCurrentFormValid}
          />
        );
      case 2:
        return (
          <MarketingGoalsInfo
            data={data}
            setData={setData}
            setFormValid={setIsCurrentFormValid}
          />
        );
      case 3:
        return (
          <MarketingPlatformsUsed
            data={data}
            setData={setData}
            setFormValid={setIsCurrentFormValid}
          />
        );
      case 4:
        return (
          <MarketingPainPointsInfo
            data={data}
            setData={setData}
            setFormValid={setIsCurrentFormValid}
          />
        );
      case 5:
        return (
          <MarketingPainpointsWhy
            data={data}
            setData={setData}
            setFormValid={setIsCurrentFormValid}
          />
        );
      case 6:
        return (
          <BrandPersonality
            data={data}
            setData={setData}
            setFormValid={setIsCurrentFormValid}
          />
        );
      case 7:
        return (
          <PersonalInfoForm
            data={data}
            setData={setData}
            setFormValid={setIsCurrentFormValid}
          />
        );
      case 8:
        return (
          <SignUpForm
            data={data}
            setData={setData}
            setFormValid={setIsCurrentFormValid}
          />
        );

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
                className="h-2 rounded-full bg-blue-600"
                style={{ width: `${(page / (titles.length - 1)) * 100}%` }}
              ></div>
            </div>
          </div>
          <h1 className="text-right text-l font-bold text-gray-900">
            {titles[page]}
          </h1>
          {/* Form contents */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="md:col-span-1 justify-end pr-4">
              {/* Put question content here */}
              <h1 className="text-black text-2xl font-bold">
                {quizQuestions[page]}
              </h1>
              <h2 className="text-black text-l">{quizSubHeadings[page]}</h2>
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
                console.log(`Form can be submitted: ${isCurrentFormValid}`)
                if (page === titles.length - 1) {
                  if (isCurrentFormValid) {
                    handleQuizSubmit(e);
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

export default NicheQuiz;
