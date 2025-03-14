import React, { useEffect } from "react";
import { FaHandPointRight } from "react-icons/fa";
import AOS from "aos"; // Import AOS for animation
import "aos/dist/aos.css"; // Import the AOS CSS

import "../styles/global.css"; // Custom CSS (ensure to handle global styles if needed)

const services = [
  {
    title: "Video Editing Services",
    description: (
      <>
        <p className="text-lg text-gray-700 mb-6 leading-relaxed">
          At [Your Studio], we offer professional video editing services
          designed to bring your footage to life. Whether you need a polished
          corporate video, engaging social media clips, or a cinematic
          masterpiece, our team will transform your raw footage into a
          compelling story.
        </p>

        {/* Points with separate background and shadow */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-12">
          <div className="flex items-start space-x-5 p-4 bg-gray-100 rounded-lg shadow-lg">
            <div className="text-red-600 text-3xl">
              <FaHandPointRight />
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-gray-800">
                Custom Video Edits
              </h3>
              <p className="text-lg text-gray-600 mt-3">
                We create tailored edits to meet your exact vision, whether it's
                cutting, color grading, or adding creative transitions.
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-5 p-4 bg-gray-100 rounded-lg shadow-lg">
            <div className="text-red-600 text-3xl">
              <FaHandPointRight />
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-gray-800">
                Social Media Clips
              </h3>
              <p className="text-lg text-gray-600 mt-3">
                Perfect for boosting your online presence, we specialize in
                creating short, engaging videos optimized for social media
                platforms.
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-5 p-4 bg-gray-100 rounded-lg shadow-lg">
            <div className="text-red-600 text-3xl">
              <FaHandPointRight />
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-gray-800">
                Corporate Videos
              </h3>
              <p className="text-lg text-gray-600 mt-3">
                We help you produce professional corporate videos, whether it's
                a promotional video, training content, or event highlight.
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-5 p-4 bg-gray-100 rounded-lg shadow-lg">
            <div className="text-red-600 text-3xl">
              <FaHandPointRight />
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-gray-800">
                Music Videos
              </h3>
              <p className="text-lg text-gray-600 mt-3">
                Bring your music to life with a creative, visually stunning
                music video that complements the song’s vibe.
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-5 p-4 bg-gray-100 rounded-lg shadow-lg">
            <div className="text-red-600 text-3xl">
              <FaHandPointRight />
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-gray-800">
                Event Highlights
              </h3>
              <p className="text-lg text-gray-600 mt-3">
                We specialize in editing event videos to create highlights that
                capture the essence of your event, whether it’s a wedding,
                conference, or corporate event.
              </p>
            </div>
          </div>
        </div>
      </>
    ),
    image: "https://i.ibb.co.com/MDGZ01cb/c994075f59d75aac18d462bac4702bf0.jpg", // Replace with actual image related to Video Editing
    profileImage: "https://i.ibb.co.com/q3fSt8RM/fav-icon.png", // Replace with a professional profile image
    link: "https://www.linkedin.com/in/itsmoniruzzaman", // Replace with your actual studio link
  },
];

const VideoEditingService: React.FC = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Set animation duration
      once: true, // Ensure animations happen once per scroll
    });
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 py-24">
      <div className="text-center">
        <h2 className="text-4xl mt-8 font-semibold text-red-600 underline mb-8">
          My Video Editing Services
        </h2>

        {/* Render services with card design and animations */}
        {services.map((service, index) => (
          <div
            key={index}
            data-aos="fade-up" // Add AOS animation on scroll
            className="shadow-lg rounded-lg overflow-hidden bg-white mb-12 transition-transform transform hover:scale-105 hover:shadow-xl">
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-72 object-cover rounded-t-lg"
            />
            <div className="relative p-8">
              <img
                src={service.profileImage}
                alt="Profile"
                className="w-24 h-24 rounded-full mx-auto absolute -top-12 left-1/2 transform -translate-x-1/2 border-4 border-white shadow-md"
              />
              <h3 className="text-3xl font-bold mt-16 text-gray-800">
                {service.title}
              </h3>
              <div className="text-md mt-4 text-gray-700 text-justify">
                {service.description}
              </div>
              <a
                href={service.link}
                className="block text-center mt-6 px-6 py-3 bg-red-600 text-white font-semibold rounded-lg shadow-lg hover:bg-red-700 transition duration-300">
                Hire Me
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VideoEditingService;
