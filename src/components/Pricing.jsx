import Section from "./Section";
import { smallSphere, stars } from "../assets";
import Heading from "./Heading";
import PricingList from "./PricingList";
import { LeftLine, RightLine } from "./design/Pricing";
import Button from "./Button";

const Pricing = () => {
  return (
    <Section className="overflow-hidden" id="pricing">
      <div className="container relative z-2">
        <div className="hidden relative justify-center mb-[6.5rem] lg:flex">
          <img
            src={smallSphere}
            className="relative z-1"
            width={255}
            height={255}
            alt="Sphere"
          />
          <div
            className="absolute top-1/2 left-1/2 w-[60rem] -translate-x-1/2 -translate-y-1/2
        pointer-events-none"
          >
            <img
              src={stars}
              className="w-full"
              width={950}
              height={400}
              alt="Stars"
            />
          </div>
        </div>
        <Heading
          tag="Become a Rising Founder today"
          title="How our method works"
        />
        <div className="relative">
          <PricingList />
          <LeftLine />
          <RightLine />
        </div>
        <div className="flex flex-col items-center mt-10">
        <Button purple className="px-40"
          >Get Started Today!
          </Button>
        </div>
       
        {/* <p className="flex justify-center text-sm mt-4">
            * Prices include features in previous packages
          </p> */}
        <div className="flex justify-center mt-10">
          <a
            className="text-xs font-code font-bold
        tracking-wider uppercase border-b"
            href="/pricing"
          >
            See the full details
          </a>
        </div>
      </div>
    </Section>
  );
};

export default Pricing;
