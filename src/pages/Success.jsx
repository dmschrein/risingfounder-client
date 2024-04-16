import React from 'react'

const Success = () => {
  return (
    <div className="bg-gradient-to-r from-red-500 to-violet-600 w-full h-screen min-h-full flex flex-col justify-center py-36 sm:px-6 lg:px-8 z-100 mf:h-screen text-center mt-10">
      <h1 className="text-3xl font-bold">Registration Successful!</h1>
      <p className="mt-5">Thank you for registering. We will email you your results soon.</p>
      {/* Add more content or a link back to the home page, etc. */}
    </div>
  );
};

export default Success