import { Card, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";
import {
  FaChartLine,
  FaArrowUp,
  FaSearch,
  FaMobileAlt,
  FaArrowLeft,
} from "react-icons/fa";

const CaseStudyDetailsWeb = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <section className="pb-16 pt-40 ">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row gap-12">
            <div className="md:w-2/3">
              <h1 className="text-4xl font-bold downtext-gradient mb-4">
                Web Development for AUGUSTO Company
              </h1>
              <p className="text-xl downtext-gradient mb-6">
                A comprehensive case study on our web development project that
                helped AUGUSTO Company achieve a 30% increase in traffic and
                higher engagement with their users.
              </p>

              <img
                src="https://i.ibb.co.com/ymJGZrnv/original-6e3ca3a459308690bda42a9138ce3dcf.webp"
                alt="Web Development Project"
                className="w-full h-96 object-cover rounded-lg mb-8"
              />

              <h2 className="text-2xl font-semibold downtext-gradient mb-4">
                Project Overview
              </h2>
              <p className="downtext-gradient mb-6">
                AUGUSTO Company approached us to develop a custom website with
                enhanced user experience and improved functionality. The goal
                was to create an online presence that would attract more traffic
                and increase conversions. Our solution involved building a
                responsive and SEO-optimized website tailored to their target
                audience.
              </p>

              <h2 className="text-2xl font-semibold downtext-gradient mb-4">
                Challenges
              </h2>
              <ul className="list-disc pl-6 downtext-gradient mb-6">
                <li>Existing website was outdated and slow.</li>
                <li>Low organic search rankings and poor SEO performance.</li>
                <li>
                  Lack of mobile optimization, leading to high bounce rates on
                  mobile devices.
                </li>
              </ul>

              <h2 className="text-2xl font-semibold downtext-gradient mb-4">
                Solutions
              </h2>
              <ul className="list-disc pl-6 downtext-gradient mb-6">
                <li>
                  Designed a modern, user-friendly website with improved
                  navigation.
                </li>
                <li>
                  Implemented SEO best practices and optimized content for
                  higher rankings.
                </li>
                <li>
                  Developed a responsive layout to ensure a seamless mobile
                  experience.
                </li>
              </ul>

              <h2 className="text-2xl font-semibold downtext-gradient mb-4">
                Results
              </h2>
              <p className="downtext-gradient mb-6">
                As a result of our work, AUGUSTO Company saw an immediate 30%
                increase in website traffic, a 15% improvement in conversion
                rates, and a significant drop in bounce rates across mobile
                devices. The new website helped establish their brand as a
                leader in their industry.
              </p>

              <div className="mt-8">
                <h2 className="text-2xl font-semibold downtext-gradient mb-4">
                  Interested in Working With Us?
                </h2>

                <a href="https://www.facebook.com/marcelinestudiobd">
                  <Button className="flex items-center text-red-600 hover:text-red-700 border-x-2 border-red-600 ">
                    <FaArrowLeft className="h-5 w-5 mr-2" />
                    Get In Touch
                  </Button>
                </a>
              </div>
            </div>

            <div className="md:w-1/3">
              <Card className="bg-black  border-x-red-600 shadow-2xl rounded-lg p-6 transition-all duration-300 transform hover:scale-105 hover:shadow-3xl">
                <CardContent>
                  <h3 className="text-3xl font-extrabold downtext-gradient mb-8 flex items-center space-x-3">
                    <FaChartLine className="text-indigo-300 text-3xl" />
                    <span>Key Metrics</span>
                  </h3>
                  <ul className="space-y-6">
                    <li className="flex items-center space-x-4">
                      <FaArrowUp className="text-green-500 text-2xl" />
                      <span className="text-lg  downtext-gradient">
                        <strong>Website Traffic Increase:</strong>{" "}
                        <span className="text-red-600">+30%</span>
                      </span>
                    </li>
                    <li className="flex items-center space-x-4">
                      <FaArrowUp className="text-yellow-500 text-2xl" />
                      <span className="text-lg downtext-gradient">
                        <strong>Conversion Rate Increase:</strong>{" "}
                        <span className="text-red-600">+15%</span>
                      </span>
                    </li>
                    <li className="flex items-center space-x-4">
                      <FaMobileAlt className="text-red-500 text-2xl" />
                      <span className="text-lg  downtext-gradient">
                        <strong>Bounce Rate Reduction:</strong>{" "}
                        <span className="text-red-600">25% (on mobile)</span>
                      </span>
                    </li>
                    <li className="flex items-center space-x-4">
                      <FaSearch className="text-purple-500 text-4xl" />
                      <span className="text-lg  downtext-gradient">
                        <strong>SEO Performance:</strong>{" "}
                        <span className="text-red-600">
                          Ranked in top 3 for major keywords
                        </span>
                      </span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CaseStudyDetailsWeb;
