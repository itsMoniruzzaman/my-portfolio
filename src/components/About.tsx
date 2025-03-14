import Aos from "aos";
import "aos/dist/aos.css";
import { Mail, Phone } from "lucide-react";
import { useEffect } from "react";
import { TiTick } from "react-icons/ti";
import { scroller } from "react-scroll";

const About = () => {
  useEffect(() => {
    // Check if the URL contains #about hash
    if (window.location.hash === "#about") {
      // Use react-scroll's scroller to scroll to the "about" section
      scroller.scrollTo("about", {
        smooth: true,
        duration: 800,
      });
    }
  }, []);

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <section id="about">
      <div className="bg-[#1B1816] text-white py-14 px-6 md:px-20 lg:px-20 flex flex-col max-w-7xl mx-auto rounded-lg">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Left Section */}
          <div className="space-y-6">
            <h3 className="text-gray-400 text-lg">About me</h3>
            <h1 className="text-4xl md:text-5xl font-bold">
              Professional <span className="text-red-600">Solutions</span>
              <br />
              For Content Creators & Businesses
            </h1>
            <div data-aos="fade-up-right">
              <p className="text-gray-400">
                I specialize in video editing and offer professional{" "}
                <strong className="text-gray-300">video editing</strong>,{" "}
                <strong className="text-gray-300">thumbnail design</strong>, and{" "}
                <strong className="text-gray-300">SEO services</strong>. I
                create eye-catching visuals and optimized content to boost
                engagement and help content creators and businesses grow.
              </p>
            </div>

            <div
              data-aos="fade-down"
              className="grid grid-cols-2 gap-4 text-white">
              <p className="flex items-center gap-2">
                <TiTick className="text-lime-400" />
                Video Editing
              </p>
              <p className="flex items-center gap-2">
                <TiTick className="text-lime-400" /> Thumbnail Design
              </p>
              <p className="flex items-center gap-2">
                <TiTick className="text-lime-400" /> YouTube SEO
              </p>
              <p className="flex items-center gap-2">
                <TiTick className="text-lime-400" /> Content Strategy
              </p>
            </div>
            <div
              data-aos="fade-up"
              className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6 bg-[#1F1F1F] p-4 rounded-xl border-[#353535] border">
              <div className="flex items-center gap-2">
                <Mail className="text-red-600" />
                <div>
                  <span className="text-[#a1a1a1] block text-xs">Email Me</span>
                  <a href="mailto:collab@moniruzzamaan.com">
                    <span className="font-bold text-sm">
                      collab@moniruzzamaan.com
                    </span>
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="text-red-600" />
                <div>
                  <span className="text-[#a1a1a1] text-xs block">
                    Make A Call
                  </span>
                  <a href="tel:+8801631715329">
                    <span className="font-bold text-sm">+8801631715329</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Section */}
          <div
            data-aos="fade-right"
            className="flex justify-center">
            <img
              src="https://i.ibb.co.com/fYdmQzFx/1741811601240-01.jpg"
              alt="Profile"
              className="w-72 md:w-[28rem] rounded-lg shadow-lg transition-transform duration-300 hover:scale-110 bg-red-950"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
