import React from 'react'
import { Link } from "react-router-dom"
import { FaArrowRight } from "react-icons/fa6"

const FeatureBanner = () => {
  return (
    <div className='featurebanner-background px-4 py-32 mx-auto'>
      <div className='text-white text-center'>
        <h1 className='text-5xl lg:text-5xl leading-snug font-bold mb-5'>33 Tools Worth Trying Out When You're building a Brand</h1>
        <p className='text-gray-100 lg:w-3/5 mx-auto mb-5 font-primary text-3xl'><em>
          Including the top AI marketing, branding, and generative AI tools! 
        </em>
        </p>
        <div>
          <Link to="/" className="font-medium hover:text-orange-500 inline-flex item-center py-1">
          Read it Now <FaArrowRight className="mt-1 ml-2"/>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default FeatureBanner