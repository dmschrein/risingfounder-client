import { useState, useEffect } from "react";

const PersonalInfoForm = ({ data, setData, setFormValid }) => {
  console.log(setFormValid)

  const [touchedFields, setTouchedFields] = useState({
    firstName: false,
    lastName: false,
    company: false,
  });

  const handleBlur = (field) => {
    setTouchedFields({ ...touchedFields, [field]: true });
  };
  const isFieldError = (field) => {
    return touchedFields[field] && !data[field];
  };
  useEffect(() => {
    const isValid = data.firstName && data.lastName;
    console.log(
      `Is Personal Info Valid: ${isValid}`,
      `FirstName: ${data.firstName}`,
      `LastName: ${data.lastName}`
    );
    setFormValid(isValid);
  }, [data, setFormValid]);

  return (
    <div className="space-y-6">
      {/* First Name Section */}
      <div className="mt-1">
        <label className="block text-sm font-medium text-gray-700 pb-2">
          First Name*
        </label>
        <input
          onChange={(e) => setData({ ...data, firstName: e.target.value })}
          onBlur={() => handleBlur("firstName")}
          value={data.firstName}
          type="text"
          id="firstname"
          className="text-black bg-white block h-14 w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 
        shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
        />
        {isFieldError("firstName") && (
          <div className="text-red-500 text-sm">First name is required.</div>
        )}
      </div>
      {/* Last Name Section */}
      <div className="mt-1">
        <label className="block text-sm font-medium text-gray-700 pb-2">
          Last Name*
        </label>
        <input
          onChange={(e) => setData({ ...data, lastName: e.target.value })}
          onBlur={() => handleBlur("lastName")}
          value={data.lastName}
          type="text"
          id="lastname"
          className="text-black bg-white block h-14 w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 
        shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
        />
        {isFieldError("lastName") && (
          <div className="text-red-500 text-sm">Last name is required.</div>
        )}
      </div>
      {/* Company Name Section */}
      <div className="mt-1">
        <label className="block text-sm font-medium text-gray-700 pb-2">
          Company Name
        </label>
        <input
          onChange={(e) => setData({ ...data, company: e.target.value })}
          value={data.company}
          type="text"
          id="company"
          className="text-black bg-white block h-14 w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 
        shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
        />
      </div>
    </div>
  );
};

export default PersonalInfoForm;
