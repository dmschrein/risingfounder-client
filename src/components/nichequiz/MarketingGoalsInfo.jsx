const MarketingGoalsInfo = ({data, setData, setFormValid}) => {
  const goalsOptions = [
    "User acquistion",
    "Product adoption",
    "Customer awareness",
    "Increase market share",
    "Enhance customer engagement",
    "Increase customer satisfaction",
    "Promote services",
    "Launch new features",
    "Strengthen brand loyalty",
    "Build credibility",
    "Increase customer retention",
    "Increase awareness",
    "Customer education",
    "Collaborate",
    "Build partnerships",
    "Grow social media community",
    "Other"
  ]

  const toggleOption = (option) => {
    const currentIndex = data.marketingGoals.indexOf(option)
    const newMarketingGoals = [...data.marketingGoals]

    if (currentIndex === -1) {
      newMarketingGoals.push(option)
    } else {
      newMarketingGoals.splice(currentIndex, 1)

    } console.log("Updated marketingGoals: ", newMarketingGoals)
    setData({...data, marketingGoals: newMarketingGoals})
  }
  const handleBlur = () => {
    const isValid = data.marketingGoals.length > 0;
    setFormValid(isValid);
    console.log("Marketing Pain Points isValid:", isValid)
  }

  return (
    <div className="space-y-6">
      {/* Marketing Goals Section */}
      <div className="mt-1">
        <h3 className="block text-sm font-medium text-gray-700 pb-2">
          Marketing Goals
        </h3>
        <div className="flex flex-wrap gap-2">
          {goalsOptions.map((option) => (
            <button
              key={option}
              type="button"
              onBlur={handleBlur}
              onClick={() => toggleOption(option)}
              className={`px-4 py-4 rounded-md ${
                data.marketingGoals.includes(option)
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

export default MarketingGoalsInfo