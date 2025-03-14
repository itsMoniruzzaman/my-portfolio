import { Card, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";
import {
  FaChartLine,
  FaArrowUp,
  FaSearch,
  FaMobileAlt,
  FaArrowLeft,
} from "react-icons/fa";

const CaseStudyDetailsMar = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <section className="pb-16 pt-40">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row gap-12">
            <div className="md:w-2/3">
              <h1 className="text-4xl font-bold downtext-gradient mb-4">
                Digital Marketing for Irish Organization LLC. Company
              </h1>
              <p className="text-xl downtext-gradient mb-6">
                A comprehensive case study on our digital marketing project that
                helped Irish Organization LLC. Company increase its brand
                awareness and improve conversions through strategic online
                campaigns.
              </p>

              <img
                src="https://i.ibb.co.com/xSXPJznH/facebook-ads-dashboard-impressions.png"
                alt="Digital Marketing Project"
                className="w-full h-96 object-cover rounded-lg mb-8"
              />

              <h2 className="text-2xl font-semibold downtext-gradient mb-4">
                Project Overview
              </h2>
              <p className="downtext-gradient mb-6">
                Irish Organization LLC. Company sought our expertise to develop
                a digital marketing strategy that would boost their online
                presence and drive more targeted traffic to their website. Our
                approach included leveraging SEO, PPC advertising, and social
                media marketing to achieve higher engagement and conversions.
              </p>

              <h2 className="text-2xl font-semibold downtext-gradient mb-4">
                Challenges
              </h2>
              <ul className="list-disc pl-6 downtext-gradient mb-6">
                <li>Lack of brand visibility in the competitive market.</li>
                <li>Low engagement across social media platforms.</li>
                <li>Underperforming paid advertising campaigns.</li>
              </ul>

              <h2 className="text-2xl font-semibold downtext-gradient mb-4">
                Solutions
              </h2>
              <ul className="list-disc pl-6 downtext-gradient mb-6">
                <li>
                  Created a comprehensive digital marketing strategy focusing on
                  SEO, paid ads, and social media presence.
                </li>
                <li>
                  Optimized website content and improved targeting for paid
                  campaigns.
                </li>
                <li>
                  Ran targeted campaigns on social media platforms, including
                  Facebook and Instagram, to enhance engagement and conversions.
                </li>
              </ul>

              <h2 className="text-2xl font-semibold downtext-gradient mb-4">
                Results
              </h2>
              <p className="downtext-gradient mb-6">
                Our digital marketing efforts helped Irish Organization LLC.
                Company achieve a significant improvement in their brand
                visibility and customer engagement. The results included a 40%
                increase in website traffic, a 25% improvement in conversion
                rates, and a 20% drop in cost-per-click (CPC) for paid
                campaigns.
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
              <Card className="bg-black border-x-red-600 shadow-2xl rounded-lg p-6 transition-all duration-300 transform hover:scale-105 hover:shadow-3xl">
                <CardContent>
                  <h3 className="text-3xl font-extrabold downtext-gradient mb-8 flex items-center space-x-3">
                    <FaChartLine className="text-indigo-300 text-3xl" />
                    <span>Key Metrics</span>
                  </h3>
                  <ul className="space-y-6">
                    <li className="flex items-center space-x-4">
                      <FaArrowUp className="text-green-500 text-2xl" />
                      <span className="text-lg downtext-gradient">
                        <strong>Website Traffic Increase:</strong>{" "}
                        <span className="text-red-600">+40%</span>
                      </span>
                    </li>
                    <li className="flex items-center space-x-4">
                      <FaArrowUp className="text-yellow-500 text-2xl" />
                      <span className="text-lg downtext-gradient">
                        <strong>Conversion Rate Increase:</strong>{" "}
                        <span className="text-red-600">+25%</span>
                      </span>
                    </li>
                    <li className="flex items-center space-x-4">
                      <FaMobileAlt className="text-red-500 text-2xl" />
                      <span className="text-lg downtext-gradient">
                        <strong>Cost-per-click Reduction:</strong>{" "}
                        <span className="text-red-600">-20%</span>
                      </span>
                    </li>
                    <li className="flex items-center space-x-4">
                      <FaSearch className="text-purple-500 text-4xl" />
                      <span className="text-lg downtext-gradient">
                        <strong>SEO Performance:</strong>{" "}
                        <span className="text-red-600">
                          Improved rankings for target keywords
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

export default CaseStudyDetailsMar;
