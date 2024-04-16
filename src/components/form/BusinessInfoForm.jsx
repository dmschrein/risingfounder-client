import {useState, useEffect} from "react";

const BusinessInfoForm = ({ data, setData, setFormValid }) => {
  console.log(setFormValid)

  const [touchedFields, setTouchedFields] = useState({
    marketingGoals: false,
    marketingPlatforms: false,
    marketingPainpoints: false,
    marketingPainpointsWhy: false,
  });

  const handleBlur = (field) => {
    setTouchedFields({ ...touchedFields, [field]: true });
  };
  const isFieldError = (field) => {
    return touchedFields[field] && !data[field];
  };
  useEffect(() => {
    const isValid = data.marketingGoals && data.marketingPlatforms && data.marketingPainpoints && data.marketingPainpointsWhy;
    setFormValid(isValid);
  }, [data, setFormValid])

  return (
    <div className="space-y-6">
      {/* Marketing Goals Section */}
      <div className="mt-1">
        <label className="block text-sm font-medium text-gray-700 pb-2">
          What are your marketing goals?*
        </label>
        <input
          onChange={(e) => setData({ ...data, marketingGoals: e.target.value })}
          onBlur={() => handleBlur('marketingGoals')}
          value={data.marketingGoals}
          type="text"
          id="marketinggoals"
          className="text-black bg-white block h-14 w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 
        shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
        />
        {isFieldError('marketingGoals') && <div className="text-red-500 text-sm">Please provide marketing goals.</div>}
      </div>
      {/* Used AI Marketing Platform Section */}
      <div className="mt-1">
        <label className="block text-sm font-medium text-gray-700 pb-2">
          Which AI marketing platforms have you used?*
        </label>
        <input
          onChange={(e) =>
            setData({ ...data, marketingPlatforms: e.target.value })
          }
          onBlur={() => handleBlur('marketingPlatforms')}
          value={data.marketingPlatforms}
          type="text"
          id="aiplatforms"
          className="text-black bg-white block h-14 w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 
        shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
        />
        {isFieldError('marketingPlatforms') && <div className="text-red-500 text-sm">Please provide marketing platforms.</div>}
      </div>
      {/* Marketing Pain point Section */}
      <div className="mt-1">
        <label className="block text-sm font-medium text-gray-700 pb-2">
          What is your biggest marketing painpoint?*
        </label>
        <input
          onChange={(e) =>
            setData({ ...data, marketingPainpoints: e.target.value })
          }
          onBlur={() => handleBlur('marketingPainpoints')}
          value={data.marketingPainpoints}
          type="text"
          id="painpoint"
          className="text-black bg-white block h-14 w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 
        shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
        />
        {isFieldError('marketingPainpoints') && <div className="text-red-500 text-sm">Please provide marketing painpoints.</div>}
      </div>
      {/* Why is this? Section */}
      <div className="mt-1">
        <label className="block text-sm font-medium text-gray-700 pb-2">
          Why is this your biggest marketing painpoint?*
        </label>
        <input
          onChange={(e) =>
            setData({ ...data, marketingPainpointsWhy: e.target.value })
          }
          onBlur={() => handleBlur('marketingPainpointsWhy')}
          value={data.marketingPainpointsWhy}
          type="text"
          id="whypainpoint"
          className="text-black bg-white block h-14 w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 
        shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
        />
        {isFieldError('marketingPainpointsWhy') && <div className="text-red-500 text-sm">Please explain your painpoints.</div>}
      </div>
    </div>
  );
};

export default BusinessInfoForm;
