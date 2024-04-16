
const CompanyValuesInfo = ({data, setData, setFormValid}) => {
  const valueOptions = [
    "Sustainability",
    "Innovation",
    "Transparency",
    "Quality Goods",
    "Customer Centricity",
    "Diversity & Inclusion",
    "Safety",
    "Teamwork",
    "Accountability",
    "Learning & Development",
    "Excellence",
    "Agility",
    "Community Engagement",
    "Creativity"
  ];

  const toggleOption = (option) => {
    const currentIndex = data.companyValues.indexOf(option);
    const newcompanyValues = [...data.companyValues];

    if (currentIndex === -1) {
      newcompanyValues.push(option);
    } else {
      newcompanyValues.splice(currentIndex, 1);
    }
    console.log("Updated companyValues: ", newcompanyValues);
    setData({ ...data, companyValues: newcompanyValues });
  };
  
  const handleBlur = () => {
    const isValid = data.companyValues.length > 0
    setFormValid(isValid);
    console.log("Brand Personality isValid:", isValid)
  };

  return (
    <div className="space-y-6">
      {/* Company Values Section */}
      <div className="mt-1">
        <h3 className="block text-sm font-medium text-gray-700 pb-2">
          Company Values
        </h3>
        <div className="flex flex-wrap gap-2">
          {valueOptions.map((option) => (
            <button
              key={option}
              type="button"
              onBlur={handleBlur}
              onClick={() => toggleOption(option)}
              className={`px-4 py-4 rounded-md ${
                data.companyValues.includes(option)
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

export default CompanyValuesInfo;
