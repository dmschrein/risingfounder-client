import React from "react";

const BrandPersonality = ({ data, setData, setFormValid }) => {
  const personalityOptions = [
    "Luxury",
    "Sincerity",
    "Ruggedness",
    "Excitement",
    "Sophistication",
    "Adventurous",
    "Caring",
    "Charming",
    "Optimistic",
    "Disruptive",
    "Elegant",
    "Romantic",
    "Sexy",
    "Playful",
    "Humorous",
    "Cute",
    "Imaginative",
    "Mystical",
    "Sensual",
    "Youthful",
    "Personable",
    "Feminine",
    "Clever",
    "Old-Fashioned",
    "Quirky",
    "Glamorous",
    "Empowering",
    "Artisanal",
    "Trustworthy",
    "None of the above",
  ];
  const toggleOption = (option) => {
    const currentIndex = data.brandPersonality.indexOf(option);
    const newBrandPersonality = [...data.brandPersonality];

    if (currentIndex === -1) {
      newBrandPersonality.push(option);
    } else {
      newBrandPersonality.splice(currentIndex, 1);
    }
    console.log("Updated brandPersonality: ", newBrandPersonality);
    setData({ ...data, brandPersonality: newBrandPersonality });
  };
  const handleBlur = () => {
    const isValid = data.brandPersonality.length > 0
    setFormValid(isValid)
  };

  return (
    <div className="space-y-6">
      {/* Brand Personality Section */}
      <div className="mt-1">
        <h3 className="block text-sm font-medium text-gray-700 pb-2">
          Brand Personality Categories
        </h3>
        <div className="flex flex-wrap gap-2">
          {personalityOptions.map((option) => (
            <button
              key={option}
              type="button"
              onBlur={handleBlur}
              onClick={() => toggleOption(option)}
              className={`px-4 py-4 rounded-md ${
                data.brandPersonality.includes(option)
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

export default BrandPersonality;
