import { Card, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";
import {
  FaChartLine,
  FaArrowUp,
  FaSearch,
  FaMobileAlt,
  FaArrowLeft,
} from "react-icons/fa";

const CaseStudyDetailsEco = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <section className="pb-16 pt-40 ">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex items-center mb-8"></div>

          <div className="flex flex-col md:flex-row gap-12">
            <div className="md:w-2/3">
              <h1 className="text-4xl font-bold downtext-gradient mb-4">
                E-commerce Website Development for Styleco
              </h1>
              <p className="text-xl downtext-gradient mb-6">
                A detailed case study on how we built a custom eCommerce
                platform for Styleco, resulting in a 40% increase in sales and
                customer retention.
              </p>

              <img
                src="https://i.ibb.co.com/pvQZ4Nkd/original-037e921de3cc68fa51a1d9c29a13e9b3.webp"
                alt="eCommerce Project"
                className="w-full h-96 object-cover rounded-lg mb-8"
              />

              <h2 className="text-2xl font-semibold downtext-gradient mb-4">
                Project Overview
              </h2>
              <p className="downtext-gradient mb-6">
                Styleco approached us to develop a fully integrated eCommerce
                website with an intuitive shopping experience. The goal was to
                enhance product discovery, simplify the checkout process, and
                boost conversion rates. Our solution involved building a
                user-friendly platform with high-speed performance and mobile
                optimization.
              </p>

              <h2 className="text-2xl font-semibold downtext-gradient mb-4">
                Challenges
              </h2>
              <ul className="list-disc pl-6 downtext-gradient mb-6">
                <li>
                  Existing website had poor navigation and slow load times.
                </li>
                <li>Low conversion rates due to a complex checkout process.</li>
                <li>
                  Inadequate mobile optimization, leading to cart abandonment.
                </li>
              </ul>

              <h2 className="text-2xl font-semibold downtext-gradient mb-4">
                Solutions
              </h2>
              <ul className="list-disc pl-6 downtext-gradient mb-6">
                <li>
                  Developed a visually appealing website with improved
                  navigation for easy product discovery.
                </li>
                <li>
                  Simplified the checkout flow, integrating secure payment
                  gateways for a smoother transaction experience.
                </li>
                <li>
                  Implemented a mobile-first design to ensure optimal
                  performance across devices.
                </li>
              </ul>

              <h2 className="text-2xl font-semibold downtext-gradient mb-4">
                Results
              </h2>
              <p className="downtext-gradient mb-6">
                As a result of our work, Styleco saw a 40% increase in sales, a
                25% improvement in customer retention, and a notable decrease in
                cart abandonment rates. The enhanced user experience helped
                convert visitors into loyal customers.
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
                        <strong>Sales Increase:</strong>{" "}
                        <span className="text-red-600">+40%</span>
                      </span>
                    </li>
                    <li className="flex items-center space-x-4">
                      <FaArrowUp className="text-yellow-500 text-2xl" />
                      <span className="text-lg downtext-gradient">
                        <strong>Customer Retention:</strong>{" "}
                        <span className="text-red-600">+25%</span>
                      </span>
                    </li>
                    <li className="flex items-center space-x-4">
                      <FaMobileAlt className="text-red-500 text-2xl" />
                      <span className="text-lg  downtext-gradient">
                        <strong>Cart Abandonment Rate:</strong>{" "}
                        <span className="text-red-600">-20%</span>
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

export default CaseStudyDetailsEco;
