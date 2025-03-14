import { motion } from "framer-motion";
import "../styles/global.css";
import Pricing from "@/components/Pricing";
import ThumbPricing from "@/components/ThumbPricing";
import SeoPricing from "@/components/SeoPricing";
import ChooseMe from "@/components/ChooseMe";

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

const ServicePage = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <section className="py-20 pt-40 px-4 sm:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-8">
            <h3 className="text-[#FF141D] font-semibold">
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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="bg-white/10 backdrop-blur-lg p-6 rounded-2xl shadow-xl hover:scale-105 border border-white/20 max-w-sm mx-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}>
                <img
                  src={service.imageUrl}
                  alt={service.name}
                  className="w-full h-48 object-cover rounded-xl mb-6 shadow-lg"
                />
                <h3 className="downtext-gradient text-2xl font-semibold mb-4 drop-shadow-lg">
                  {service.name}
                </h3>
                <p className="downtext-gradient mb-4 text-lg drop-shadow-md">
                  {service.description}
                </p>
                {/* <Link to={`/services/${service.slug}`}>
                  <button className="relative mt-8  px-6 py-2 bg-gradient-to-r from-red-500 to-red-700 text-white font-semibold rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105 hover:shadow-red-600/50 border border-red-500/50">
                    See Details
                  </button>
                </Link> */}
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <section className="pb-16">
        <Pricing />
        <br />
        <ThumbPricing />
        <br />
        <SeoPricing />
      </section>
      <section>
        <ChooseMe />
      </section>
    </div>
  );
};

export default ServicePage;
