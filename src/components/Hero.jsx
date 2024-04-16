import { curve, risingFounder } from "../assets";
import { Link } from "react-router-dom";
import Button from "./Button";
import Section from "./Section";
import { BackgroundCircles, BottomLine, Gradient } from "./design/Hero";
import RecentBlogs from "./blog/RecentBlogs";
import { useRef } from "react";
import CompanyLogos from "./CompanyLogos";
const Hero = () => {
  const parallaxRef = useRef(null);

  return (
    <Section
      className="pt-[12rem] -mt-[5.25rem]"
      crosses
      crossesOffset="lg:translate-y-[5.25rem]"
      customPaddings
      id="hero"
    >
      <div className="container relative" ref={parallaxRef}>
        {/* Curve Image */}
        <img
          src={curve}
          className="absolute top-0 left-0 w-full"
          width={624}
          height={28}
          alt="Curve"
          style={{ zIndex: 1 }}
        />

        {/* Rising Founder Image */}
        <div className="relative z-10 max-w-[62rem] mx-auto text-center">
          <img
            src={risingFounder}
            className="mx-auto"
            width={1000}
            height={28}
            alt="Rising Founder"
          />
        </div>

        <div className="text-center mt-2">
          <h1 className="max-w-10xl mx-auto mb-6 text-n-6 text-4xl lg:mb-8">
            Transform your brand and become the founder you are meant to be.
          </h1>
          <h3 className="body-1 max-w-10xl mx-auto mb-6 text-n-6 lg:mb-8">
          Unlock transformative strategies to elevate your brand, captivate your audience, and skyrocket your revenue.
          </h3>
          <Link to="/quiz">
            <Button purple>Find Your Purpose</Button>
          </Link>
        </div>
        {/* <div className="mt-20">
        <CompanyLogos/>
        </div> */}
        
       
      </div>
      <div className="mt-20">
      {/* <BottomLine /> */}
      </div>
      
    </Section>
  );
};

export default Hero;
