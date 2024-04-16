import { useState, useEffect } from "react";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";

const SignUpForm = ({ data, setData, setFormValid}) => {
  console.log(setFormValid)

  const [passwordEye, setPasswordEye] = useState(false);
  const [confirmPasswordEye, setConfirmPasswordEye] = useState(false);
  const [passwordsMatch, setPasswordsMatch] = useState(true);
  const [touchedFields, setTouchedFields] = useState({
    username: false,
    email: false,
    password: false,
    confirmPassword: false,
  });

  const handleBlur = (field) => {
    setTouchedFields({ ...touchedFields, [field]: true });
  };

  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    setData({ ...data, password: newPassword });
    setPasswordsMatch(newPassword === data.confirmPassword);
    handleBlur("password");
  };

  const handleConfirmPasswordChange = (e) => {
    const newConfirmPassword = e.target.value;
    setData({ ...data, confirmPassword: newConfirmPassword });
    setPasswordsMatch(data.password === newConfirmPassword);
    handleBlur("confirmPassword");
  };

  const isFieldError = (field) => {
    return touchedFields[field] && !data[field];
  };

  {
    /* handle password eye */
  }
  const handlePasswordEye = () => {
    setPasswordEye(!passwordEye);
  };

  {
    /* handle confirm password eye */
  }
  const handleConfirmPasswordEye = () => {
    setConfirmPasswordEye(!confirmPasswordEye);
  };
  useEffect(() => {
    const isValid = data.username && data.email && data.password && data.confirmPassword && passwordsMatch;
    setFormValid(isValid);
  }, [data, passwordsMatch, setFormValid])

  return (
    <div className="space-y-6">
      {/* Username Section */}
      <div className="mt-1">
        <label className="block text-sm font-medium text-gray-700 pb-2">
          Username*
        </label>
        <input
          onChange={(e) => setData({ ...data, username: e.target.value })}
          onBlur={() => handleBlur('username')}
          value={data.username}
          type="text"
          id="username"
          className="text-black bg-white block h-14 w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 
        shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
        />
        {isFieldError('username') && <div className="text-red-500 text-sm">Username is required.</div>}
      </div>
      {/* Email Section */}
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
      {/* Password Section */}
      <div className="mt-1 relative">
        <label className="block text-sm font-medium text-gray-700 pb-2">
          Password*
        </label>
        <input
          onChange={handlePasswordChange}
          onBlur={() => handleBlur('password')}
          value={data.password}
          type={passwordEye ? "text" : "password"}
          id="password"
          className="text-black bg-white block h-14 w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 
        shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
        />

        <div
          className="text-2xl absolute top-11 right-5 cursor-pointer"
          onClick={handlePasswordEye}
        >
          {passwordEye ? (
            <AiFillEye style={{ color: "black", fontSize: "24px" }} />
          ) : (
            <AiFillEyeInvisible style={{ color: "black", fontSize: "24px" }} />
          )}
        </div>
        {isFieldError('password') && <div className="text-red-500 text-sm">Password is required.</div>}
      </div>
      {/* Confirm Password Section */}
      <div className="mt-1 relative">
        <label className="block text-sm font-medium text-gray-700 pb-2">
          Confirm Password*
        </label>
        <input
          onChange={handleConfirmPasswordChange}
          value={data.confirmPassword}
          type={confirmPasswordEye ? "text" : "password"} // This line controls the input type based on the confirmPasswordEye state
          id="cpassword"
          className="text-black bg-white block h-14 w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
        />
        <div
          className="text-2xl absolute top-11 right-5 cursor-pointer"
          onClick={handleConfirmPasswordEye}
        >
          {confirmPasswordEye ? (
            <AiFillEye style={{ color: "black", fontSize: "24px" }} />
          ) : (
            <AiFillEyeInvisible style={{ color: "black", fontSize: "24px" }} />
          )}
        </div>
        {!passwordsMatch && (
          <div className="text-red-500 text-sm mt-1">
            Passwords do not match.
          </div>
        )}
      </div>
    </div>
  );
};

export default SignUpForm;
