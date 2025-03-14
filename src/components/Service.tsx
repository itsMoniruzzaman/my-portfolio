import { Link } from "react-router-dom";
import "../styles/global.css";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const services = [
  {
    name: "Video Editing",
    slug: "video-editing",
    description:
      "Edit your videos with professional tools and techniques to make them stand out.",
    imageUrl:
      "https://i.ibb.co.com/MDGZ01cb/c994075f59d75aac18d462bac4702bf0.jpg",
  },
  {
    name: "Thumbnail Design",
    slug: "thumbnail-design",
    description:
      "Professional, high-impact thumbnails designed to grab attention and increase clicks!",
    imageUrl:
      "https://i.ibb.co.com/spb5NY93/create-a-fantastic-eye-catching-youtube-thumbnail-design.jpg",
  },
  {
    name: "YouTube SEO",
    slug: "youtube-seo",
    description:
      "Optimize your YouTube videos to rank higher and get more views organically.",
    imageUrl:
      "https://i.ibb.co.com/HfMyx4fV/335263600c93b0865ff7963838f42080233284bb.webp",
  },
];

const Service = () => {
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
              My Services
            </h2>
            <p className="downtext-gradient max-w-2xl mx-auto">
              I provide the best-ever services for your great experience. I make
              all efforts for the revolutionary change. I promise you that you
              will never get disappointed.
            </p>
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
                <div className="relative overflow-hidden rounded-xl">
                  <img
                    src={service.imageUrl}
                    alt={service.name}
                    className="w-full h-52 object-cover rounded-xl transition-all duration-500 hover:scale-110"
                  />
                </div>

                {/* Content */}
                <div className="relative z-10 mt-6 text-center">
                  {/* Service Title */}
                  <h3 className="text-2xl font-bold mb-3 text-gray-800 drop-shadow-md">
                    {service.name}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 mb-4 text-lg drop-shadow-md">
                    {service.description}
                  </p>

                  {/* Button */}
                  {/* <Link to={`/services/${service.slug}`}>
                    <button className="relative px-6 py-2 bg-gradient-to-r from-red-500 to-pink-600 text-white font-semibold rounded-full shadow-lg transition-all duration-300 transform hover:scale-105 hover:shadow-red-400/50 border border-white/20">
                      Learn More
                    </button>
                  </Link> */}
                </div>
              </div>
            ))}
          </div>

          <div>
            <Link to={`/services`}>
              <button className="relative mt-8 w-1/2 md:w-1/4 px-6 py-2 bg-gradient-to-r from-red-500 to-red-700 text-white font-semibold rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105 hover:shadow-red-600/50 border border-red-500/50">
                See More
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Service;
