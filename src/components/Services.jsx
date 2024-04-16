import Section from "./Section";
import Heading from "./Heading";
import {
  service1,
  service2,
  service3,
  service4,
  service5,
  service6,
  service8,
  check,
  founder1,
  founder2,
  founder3,
} from "../assets";
import { brainwaveServices, brainwaveServicesIcons } from "../constants";
import Generating from "./Generating";
import {
  PhotoChatMessage,
  Gradient,
  VideoBar,
  VideoChatMessage,
} from "./design/Services";

const Services = () => {
  return (
    <Section id="how-to-use">
      <div className="container-lg">
        <Heading
          title="Founders that love us."
          text="Rising Founder unlocks your true potential."
        />
        <div className="relative">
          {/* First element */}
          <div className="relative z-1 flex items-center justify-center h-[39rem] mb-5 p-8 border border-n-1/10 rounded-3xl overflow-hidden lg:p-20 xl:h-[46rem]">
            <div className="absolute top-0 left-20 w-full h-full pointer-events-none md:w-3/5 xl:w-auto">
              <img
                className="w-full h-full object-cover md:object-left"
                width={800}
                alt="Cake Denim"
                height={730}
                src={founder1}
              />
            </div>
            <div className="relative z-1 max-w-[17rem] ml-auto">
              <h4 className="h4 mb-4">How our founders are benefiting</h4>
              <p className="body-2 mb-[3rem] text-n-3">
                "We had a great product and story that rising founders helped us
                tell."
              </p>
              <ul className="body-2">
                {brainwaveServices.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-start py-4 border-t border-n-6"
                  >
                    <img width={24} height={24} src={check} />
                    <p className="ml-4">{item}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          {/* Second element */}
          <div className="relative z-1 grid gap-5 lg:grid-cols-2">
            <div className="relative min-h-[30rem] border border-n-1/10 rounded-3xl overflow-hidden">
              <div className="absolute inset-0">
                <img
                  src={founder2}
                  className="h-full w-full object-cover"
                  alt="robot"
                  width={630}
                  height={800} 
                />
              </div>
            </div>
            {/* Third element */}
            <div className="relative min-h-[60rem] bg-n-7 rounded-3xl overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <img
                  src={founder3}
                  className="object-cover rounded-3xl h-full w-full" 
                  alt="lisa"
                  width={416}
                  height={520}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  )
}
export default Services;
