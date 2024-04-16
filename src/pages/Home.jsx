import React from "react";
import Hero from "../components/Hero";
import Benefits from "../components/Benefits"
import RecentBlogs from "../components/blog/RecentBlogs";
import CompanyLogos from "../components/CompanyLogos";
import Banner from "../components/Banner";
import Collaboration from "../components/Collaboration";
import Pricing from "../components/Pricing";
import Services from "../components/Services";
import FeatureBanner from "../components/FeatureBanner";
import FeatureBlogs from "../components/FeatureBlogs";
import KeepReading from "../components/blog/KeepReading";
import Footer from "../components/Footer"
const Home = () => {
  return (
    <div>
      <Hero/>
      <div className="mt-20">
        <CompanyLogos/>
        </div>
      <Benefits/>
       {/* Recent Blogs Section */}
       <div className="mt-20">
          <RecentBlogs />
        </div>
        <Banner/>
        <Collaboration/>
        <Pricing />
        <Services />
        <FeatureBanner/>
        <FeatureBlogs/>
        <KeepReading/>
        <Footer/>
    </div>
  );
};

export default Home;
