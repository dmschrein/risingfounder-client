import React from "react";

const MarketingPlatformsUsed = ({data, setData, setFormValid}) => {
  const platformOptions = [
    "Facebook",
    "Instagram",
    "Twitter",
    "LinkedIn",
    "TikTok",
    "Pinterest",
    "Google Ads",
    "Mailchimp",
    "Constant Contact",
    "HubSpot",
    "WordPress",
    "Medium",
    "Shopify",
    "Amazon",
    "Etsy",
    "YouTube",
    "Salesforce",
    "SEMrush",
    "Zapier",
    "Jasper",
    "Poll the People",
    "Crayon",
    "None of the above",
    "Other"
  ];

  const toggleOption = (option) => {
    const currentIndex = data.marketingPlatforms.indexOf(option);
    const newMarketingPlatforms = [...data.marketingPlatforms];

    if (currentIndex === -1) {
      newMarketingPlatforms.push(option);
    } else {
      newMarketingPlatforms.splice(currentIndex, 1);
    }
    console.log("Updated marketingPlatforms: ", newMarketingPlatforms);
    setData({ ...data, marketingPlatforms: newMarketingPlatforms });
  };
  const handleBlur = () => {
    const isValid = data.marketingPlatforms.length > 0;
    setFormValid(isValid);
    console.log("Marketing Platform Used isValid:", isValid)
  };

  return (
    <div className="space-y-6">
      {/* Marketing Platforms Section */}
      <div className="mt-1">
        <h3 className="block text-sm font-medium text-gray-700 pb-2">
          Marketing Platforms
        </h3>
        <div className="flex flex-wrap gap-2">
          {platformOptions.map((option) => (
            <button
              key={option}
              type="button"
              onBlur={handleBlur}
              onClick={() => toggleOption(option)}
              className={`px-4 py-4 rounded-md ${
                data.marketingPlatforms.includes(option)
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



};

export default MarketingPlatformsUsed;
