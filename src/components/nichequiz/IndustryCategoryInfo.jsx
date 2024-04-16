
const IndustryCategoryInfo = ({ data, setData, setFormValid }) => {

  const industryOptions = [
    "Consumer Services",
    "Fashion",
    "Sports",
    "Health & Wellness",
    "Travel",
    "Consumer Products",
    "Business Services",
    "Technology",
    "Education",
    "Entertainment & Media",
    "Financial Services",
    "Healthcare",
    "Real Estate",
    "Energy",
    "Automotive",
    "Agriculture & Food Production",
    "Logistics & Transportation",
    "Manufacturing",
    "Environmental Services",
    "Legal Services",
    "Hospitality",
    "Retail",
    "Arts & Crafts",
    "Non-Profit & NGO",
    "Government Services",
    "Telecommunications",
    "Other"
  ];

  const toggleOption = (option) => {
    const currentIndex = data.industryCategories.indexOf(option);
    const newIndustryCategories = [...data.industryCategories];

    if (currentIndex === -1) {
      newIndustryCategories.push(option);
    } else {
      newIndustryCategories.splice(currentIndex, 1);
    }
    console.log("Updated industryCategories: ", newIndustryCategories)
    setData({ ...data, industryCategories: newIndustryCategories });
  };

  const handleBlur = () => {
    const isValid = data.industryCategories.length > 0
    setFormValid(isValid)
    console.log("Industry Categories isValid:", isValid)
  };

  return (
    <div className="space-y-6">
      {/* Industry Categories Section */}
      <div className="mt-1">
        <h3 className="block text-sm font-medium text-gray-700 pb-2">
          Industry Categories
        </h3>
        <div className="flex flex-wrap gap-2">
          {industryOptions.map((option) => (
            <button
              key={option}
              type="button"
              onBlur={handleBlur}
              onClick={() => toggleOption(option)}
              className={`px-4 py-4 rounded-md ${
                data.industryCategories.includes(option)
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

export default IndustryCategoryInfo;
