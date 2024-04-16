import { check } from "../assets";
import { pricing } from "../constants";
import Button from "./Button";

const PricingList = () => {
   // Define background and subtitle colors for each step
   const cardColors = [
    { bg: 'bg-blue-100', subtitle: 'text-blue-800' },
    { bg: 'bg-green-100', subtitle: 'text-green-800' },
    { bg: 'bg-purple-100', subtitle: 'text-purple-800' }
  ];
  return (
    <div className="flex flex-wrap gap-4 justify-center">
      {pricing.map((item,index) => (
        <div
          key={item.id}
          className="flex flex-col w-[26rem] px-6 bg-n-1 border border-n-6 rounded-[2rem] h-[50rem] justify-between"
        >
          <h2 className="text-3xl font-bold text-gray-900 my-4">{item.title}</h2>
          <p className={`text-2xl ${cardColors[index % cardColors.length].subtitle} my-3`}>
            {item.subtitle}
          </p>
          <p className="text-xl text-gray-600 min-h-[4rem] mb-3">
            {item.description}
          </p>
          <ul>
            {item.features.map((feature, index) => (
              <li
                key={index}
                className="flex items-start py-5 border-t border-n-6"
              >
                <img src={check} width={24} height={24} alt="Check" />
                <p className="body-2 ml-4">{feature}</p>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default PricingList;