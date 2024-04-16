import { useState, useEffect } from "react";

const EmailInfo = ({data, setData, setFormValid}) => {

  console.log(setFormValid)

  const [touchedFields, setTouchedFields] = useState({
    email: false,
  })

  const handleBlur = (field) => {
    setTouchedFields({ ...touchedFields, [field]: true}) 
  }

  const isFieldError = (field) => {
    return touchedFields[field] && !data[field]
  }

  useEffect(() => {
    const isValid = data.email
    console.log(`Is Email Valid: ${isValid}`, data.email)
    setFormValid(isValid)
  }, [data, setFormValid])


  return (
    <div className="space-y-6">
    <div className="mt-1">
        <label className="block text-sm font-medium text-gray-700 pb-2">
          Email*
        </label>
        <input
          onChange={(e) => setData({ ...data, email: e.target.value })}
          onBlur={() => handleBlur('email')}
          value={data.email}
          type="email"
          id="email"
          className="text-black bg-white block h-14 w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 
        shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
        />
        {isFieldError('email') && <div className="text-red-500 text-sm">Email is required.</div>}
      </div>
    </div>
  )
}

export default EmailInfo