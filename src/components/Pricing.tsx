// import { useState } from "react";
import { FaCheckCircle } from "react-icons/fa";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const titleNames = [
  {
    title: "Video Editing",
  },
];

const graphicsPlans = [
  {
    name: "Basic",
    price: 99,
    features: [
      "Custom Motion Graphics",
      "Animated Text & Elements",
      "Delivery in 5-7 days",
      "12/7 Support",
    ],
    buttonText: "Buy Basic",
  },
  {
    name: "Standard",
    price: 399,
    features: [
      "Comprehensive YouTube SEO",
      "Keyword Optimization",
      "Thumbnail & Title Optimization",
      "Performance Analysis",
      "12/7 Support",
    ],
    buttonText: "Buy Standard",
    popular: true,
  },
  {
    name: "Premium",
    price: 69,
    features: [
      "Custom Thumbnail Designs",
      "High-Quality & Engaging Thumbnails",
      "Delivery in 2-3 days",
      "12/7 Support",
    ],
    buttonText: "Buy Premium",
  },
];

const Pricing = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <div>
      <div
        data-aos="fade-right"
        className="mb-8 text-center">
        <h3 className="text-red-600 font-bold uppercase text-xl">
          Flexible Pricing Plans For
        </h3>
        {titleNames.map((title, index) => (
          <h2
            key={index}
            className="text-4xl md:text-6xl font-bold">
            {title.title}
          </h2>
        ))}
      </div>

      <div className="flex flex-col md:flex-row justify-center items-center gap-6 px-8  text-white max-w-7xl mx-auto">
        {graphicsPlans.map((plan, index) => (
          <div
            data-aos="fade-up"
            key={index}
            className="relative bg-[#111] p-6 rounded-lg shadow-lg w-72 md:w-80 border border-gray-700">
            {plan.popular && (
              <span className="absolute top-2 right-2 bg-red-600 text-xs px-2 py-1 rounded-md ">
                Popular
              </span>
            )}
            <h2 className="text-2xl font-bold">{plan.name}</h2>
            <p className="text-3xl font-semibold mt-2 text-gray-300">
              ${plan.price}{" "}
              <span className="text-lg text-gray-400">/project</span>{" "}
            </p>
            <hr className="my-4 border-gray-700" />
            <h3 className="text-lg font-semibold text-gray-400">
              Top Features:
            </h3>
            <ul className="mt-3 space-y-2">
              {plan.features.map((feature, idx) => (
                <li
                  key={idx}
                  className="flex items-center gap-2 text-gray-400">
                  <FaCheckCircle className="text-red-500" /> {feature}
                </li>
              ))}
            </ul>
            <a href="mailto:collab@moniruzzamaan.com">
              <button className="mt-6 w-full py-2 border border-red-500 rounded-lg text-red-500 hover:bg-red-500 hover:text-white transition">
                {plan.buttonText}
              </button>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
