import React from 'react'

const MarketingPainPointsInfo = ({data, setData, setFormValid}) => {

  const painpointOptions = [
    "Generating quality leads",
    "Tracking and analytics conclusively",
    "Creating engaging content",
    "Managing budget constaints",
    "Keeping up with technology and trends",
    "Targeting and personalization",
    "SEO competition",
    "Social media visability",
    "Customer retention",
    "Adapting to consumer privacy regulations",
    "Cross-channel marketing",
    "Time management",
    "Scaling Marketing Efforts",
    "Overwhelmed with decision and marketing channels",
    "None of the above",
    "Other"
]

  const toggleOption = (option) => {
    const currentIndex = data.marketingPainpoints.indexOf(option);
    const newMarketingPainpoints = [...data.marketingPainpoints];

    if (currentIndex === -1) {
      newMarketingPainpoints.push(option);
    } else {
      newMarketingPainpoints.splice(currentIndex, 1);
    }
    console.log("Updated marketingPainpoints: ", newMarketingPainpoints);
    setData({ ...data, marketingPainpoints: newMarketingPainpoints });
  };
  const handleBlur = () => {
    setFormValid(data.marketingPainpoints.length > 0);
  };

  return (
<div className="space-y-6">
      {/* Marketing Pain Points Section */}
      <div className="mt-1">
        <h3 className="block text-sm font-medium text-gray-700 pb-2">
          Marketing Pain Points
        </h3>
        <div className="flex flex-wrap gap-2">
          {painpointOptions.map((option) => (
            <button
              key={option}
              type="button"
              onBlur={handleBlur}
              onClick={() => toggleOption(option)}
              className={`px-4 py-4 rounded-md ${
                data.marketingPainpoints.includes(option)
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

  )
}

export default MarketingPainPointsInfo