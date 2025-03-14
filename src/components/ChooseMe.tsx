import "../styles/global.css";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const services = [
  {
    name: "Professional & Top Notch Editing",
    description:
      "My video editing services focus on delivering polished and engaging content that enhances personal branding and business visibility. With seamless transitions, vibrant color grading, 3D camera techniques, motion graphics, and advanced animation when needed.",
    imageUrl: "https://i.ibb.co.com/9mcwNpjx/video.png",
  },
  {
    name: "50M+ Views & 1K+ Projects Done",
    description:
      "I've generated over 10 million views through my video editing work and completed more than 50 projects. Specializing in both long and short-form videos, I focus on crafting engaging and high-quality edits that captivate and hook audiences.",
    imageUrl: "https://i.ibb.co.com/SD0wHXYC/views.png",
  },
  {
    name: "Unlimited Revisions, Pay-As-You-Go & Demo Edit",
    description:
      "Your vision, perfected—unlimited revisions until you're satisfied. Just upload your raw footage, and I’ll handle the rest. Pay-as-you-go for a hassle-free, cost-effective process. Try a demo edit first! ",
    imageUrl: " https://i.ibb.co.com/XfRy90rs/demo.png",
    demo: "Request For Demo",
  },
];

const ChooseMe = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <div className="max-w-7xl mx-auto">
      <section className=" py-16  px-4 sm:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto text-center">
          <div
            data-aos="fade-right"
            className="mb-8">
            <h3 className="text-red-600 font-bold">
              I work for your best experience
            </h3>
            <h2 className="downtext-gradient text-2xl md:text-6xl font-bold tracking-tight mb-4">
              Why Choose Me
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                data-aos="fade-up"
                key={index}
                className="relative bg-white/10 backdrop-blur-xl p-6 rounded-3xl shadow-xl border border-white/20 transition-all transform hover:scale-105 hover:shadow-gray-500/50 max-w-sm mx-auto overflow-hidden">
                {/* Animated Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-red-500/20 to-transparent rounded-3xl blur-2xl opacity-40 pointer-events-none"></div>

                {/* Image */}
                <div className="relative overflow-hidden rounded-xl flex justify-center items-center">
                  <img
                    src={service.imageUrl}
                    alt={service.name}
                    className="w-16 h-16 object-cover rounded-xl transition-all duration-500 hover:scale-110"
                  />
                </div>

                {/* Content */}
                <div className="relative z-10 mt-6 text-center">
                  {/* Service Title */}
                  <h3 className="text-2xl font-bold mb-3 text-gray-800 drop-shadow-md">
                    {service.name}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 mb-4 text-lg drop-shadow-md text-justify">
                    {service.description}
                  </p>
                </div>
                {service.demo && (
                  <div>
                    <h1>⬇</h1>
                    <a
                      href="mailto:collab@moniruzzamaan.com"
                      className="block text-center mt-6 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-lg hover:bg-red-700 transition duration-300">
                      {service.demo}
                    </a>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ChooseMe;
