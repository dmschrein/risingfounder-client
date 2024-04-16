import React from "react";

const MarketingPainpointsWhy = ({ data, setData, setFormValid }) => {
  const painpointWhyOptions = [
    "Challenges in measuring direct imapact of marketing efforts",
    "Difficulty attracting leads that convert",
    "Marketing costs",
    "Campaign effectiveness",
    "Finding time to create content",
    "Content is not capturing and retaining audience interest",
    "Do not know how to create content",
    "Difficulty finding time to keep up with technology changes",
    "Consumer preferences are changing too quickly",
    "Not delivering personalized marketing messages",
    "Organic reach is not working for me",
    "Higher customer acquisition costs",
    "Navigating privacy laws is hindering",
    "Failure to coordinate marketing efforts acroos multiplatforms",
    "Too many marketing channels to manage",
    "Difficulting balancing business and marketing duties at the same time",
    "Indecision and ineffective spread of resources",
    "Trouble finding and implementing effective strategies",
    "None of the above"
  ];

  const toggleOption = (option) => {
    const currentIndex = data.marketingPainpointsWhy.indexOf(option);
    const newMarketingPainpointsWhy = [...data.marketingPainpointsWhy];

    if (currentIndex === -1) {
      newMarketingPainpointsWhy.push(option);
    } else {
      newMarketingPainpointsWhy.splice(currentIndex, 1);
    }
    console.log("Updated marketingPainpointsWhy: ", newMarketingPainpointsWhy);
    setData({ ...data, marketingPainpointsWhy: newMarketingPainpointsWhy });
  };
  const handleBlur = () => {
    const isValid = data.marketingPainpointsWhy.length > 0
    setFormValid(isValid);
    console.log("Marketing pain points why isValid:", isValid)
  };

  return (
    <div className="space-y-6">
      {/* Marketing Pain Points Section */}
      <div className="mt-1">
        <h3 className="block text-sm font-medium text-gray-700 pb-2">
          Marketing Pain Points
        </h3>
        <div className="flex flex-wrap gap-2">
          {painpointWhyOptions.map((option) => (
            <button
              key={option}
              type="button"
              onBlur={handleBlur}
              onClick={() => toggleOption(option)}
              className={`px-4 py-4 rounded-md ${
                data.marketingPainpointsWhy.includes(option)
                  ? "bg-blue-500 text-white"
                  : "bg-white text-gray-700 border border-gray-300"
              }`}
            >
              {option}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MarketingPainpointsWhy;
