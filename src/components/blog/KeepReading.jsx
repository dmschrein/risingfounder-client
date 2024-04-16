import React from "react";
import Section from "../Section";
import SideBar from "../SideBar";

const KeepReading = () => {
  return (
    <Section className="overflow-hidden" id="keepreading">
      <div className="container relative z-2">
      <div className="container-lg mx-auto px-0 lg:px-0">
        <h1 className="text-6xl mb-8">Keep Reading</h1>
        <hr className="border-b-1 border-black" />
        <div className="pt-8">
          <SideBar />
        </div>
      </div>
      </div>
      
    </Section>
  );
};

export default KeepReading;
