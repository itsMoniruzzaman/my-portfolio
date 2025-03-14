import "../styles/global.css";
import { FaArrowRight } from "react-icons/fa";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa";
import { useState } from "react";

interface CountUpProps {
  end: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
}

const CountUp: React.FC<CountUpProps> = ({
  end,
  duration = 2000,
  prefix = "",
  suffix = "",
}) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number | undefined;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;

      // Calculate the current count based on progress
      const percentage = Math.min(progress / duration, 1);
      const currentCount = Math.floor(percentage * end);

      setCount(currentCount);

      if (progress < duration) {
        animationFrame = requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationFrame);
    };
  }, [end, duration]);

  return (
    <span>
      {prefix}
      {count}
      {suffix}
    </span>
  );
};

const Banner = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <section className="relative w-full pt-20 pb-14 md:pt-36 md:pb-20 flex items-center justify-center text-white px-6  ">
      {/* Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 max-w-7xl mx-auto text-center relative z-10 py-12">
        {/* First Column */}
        <div className="flex flex-col items-center lg:items-start">
          <p className="text-2xl md:text-4xl font-semibold text-[#656565] mb-4">
            Hello, I'm
          </p>
          <h1 className="text-4xl lg:text-5xl font-bold text-red-600 mb-4">
            Moniruzzaman
          </h1>
          <div>
            <p className="mb-6 w-2 text-2xl lg:text-3xl font-bold text-gray-700 overflow-hidden whitespace-nowrap border-r-4 pr-2 animate-typewriter">
              Video Editor
            </p>
          </div>

          <p className="text-gray-600 mb-6 text-justify">
            A Passionate Video Editor and Storyteller! Offering Video Editing
            services for content creators and businesses. Let's collaborate to
            bring your vision to life and create content that converts viewers
            into loyal supporters and customers!
          </p>

          <div className="flex gap-4">
            <a href="mailto:collab@moniruzzamaan.com">
              <button className="flex items-center gap-2 px-6 py-3 bg-red-600 text-white rounded-full hover:bg-red-700 transition-all duration-300">
                Hire Me
                <FaArrowRight />
              </button>
            </a>
            <a href="https://www.fiverr.com">
              <button className="flex items-center gap-2 px-6 py-3 border-x-2 rounded-lg border-[#237d53] text-white   transition-all duration-300 bg-[#37c583df]  ">
                Fiverr
                <FaArrowRight />
              </button>
            </a>
          </div>
          <div className="flex justify-center sm:justify-end pt-8 gap-8 text-3xl text-red-600  md:hidden">
            <a
              href="https://www.linkedin.com/in/itsmoniruzzaman"
              target="_blank"
              rel="noopener noreferrer"
              className="transition duration-300 transform hover:scale-110 ">
              <FaLinkedin />
            </a>
            <a
              href="https://www.youtube.com/@moniruzzamaaan"
              target="_blank"
              rel="noopener noreferrer"
              className="transition duration-300 transform hover:scale-110 ">
              <FaYoutube />
            </a>
            <a
              href="https://www.instagram.com/moniruzzamaaan"
              target="_blank"
              rel="noopener noreferrer"
              className="transition duration-300 transform hover:scale-110 ">
              <FaInstagram />
            </a>
            <a
              href="https://x.com/imMoniruzzaman"
              target="_blank"
              rel="noopener noreferrer"
              className="transition duration-300 transform hover:scale-110 ">
              <FaTwitter />
            </a>
            <a
              href="https://www.facebook.com/moniruzzamaaan"
              target="_blank"
              rel="noopener noreferrer"
              className="transition duration-300 transform hover:scale-110 ">
              <FaFacebook />
            </a>
          </div>
        </div>

        {/* Second Column (Client Images) */}
        <div className="flex justify-center items-center">
          <img
            src="https://i.ibb.co.com/Fbhw6WXK/moniruzzaman-profile-picture.png"
            alt="Client"
            className="rounded-3xl shadow-xl drop-shadow-2xl bg-red-900 object-cover 
             w-80 h-80 md:w-96 md:h-96 
             transition-transform duration-500 ease-in-out transform 
             hover:scale-110 hover:rotate-3 hover:shadow-2xl"
          />
        </div>

        {/* Third Column (Stats) */}
        <div
          data-aos="fade-right"
          className="grid grid-cols-1">
          <div className="bg-white border-x-2 border-red-600 shadow-lg rounded-lg p-6 flex flex-col items-center">
            <p className="text-4xl font-bold text-red-600">
              <CountUp
                end={3}
                suffix="+"
              />
            </p>
            <p className="text-lg text-gray-600">Years of Experience</p>
          </div>
          <div className="bg-white border-y-2 border-red-600 shadow-lg rounded-lg p-6 flex flex-col items-center mt-4">
            <p className="text-4xl font-bold text-red-600">
              <CountUp
                end={1000}
                suffix="+"
              />
            </p>
            <p className="text-lg text-gray-600">Projects Completed</p>
          </div>
          <div className="bg-white border-x-2 border-red-600 shadow-lg rounded-lg p-6 flex flex-col items-center mt-4">
            <p className="text-4xl font-bold text-red-600">
              <CountUp
                end={99}
                suffix="%"
              />
            </p>
            <p className="text-lg text-gray-600">Client Satisfaction</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
