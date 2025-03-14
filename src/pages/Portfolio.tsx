import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaFilter } from "react-icons/fa";
import Aos from "aos";
import "aos/dist/aos.css";

const projects = [
  {
    id: 1,
    category: "Talking Head",
    title: "Talking Head Example 1",
    thumbnailUrl: "https://i.ibb.co.com/KcYHdjMg/1715433343890.jpg",
    videoUrl: "https://www.youtube.com/embed/LK0O6adlT8g",
  },
  {
    id: 2,
    category: "Shorts",
    title: "Short Video Example 1",
    thumbnailUrl: "https://i.ibb.co.com/KcYHdjMg/1715433343890.jpg",
    videoUrl: "https://www.youtube.com/embed/LK0O6adlT8g",
  },
  {
    id: 3,
    category: "Documentary",
    title: "Documentary Video Example",
    thumbnailUrl: "https://i.ibb.co.com/KcYHdjMg/1715433343890.jpg",
    videoUrl: "https://www.youtube.com/embed/LK0O6adlT8g",
  },
  {
    id: 4,
    category: "Travel",
    title: "Travel Video Example",
    thumbnailUrl: "https://i.ibb.co.com/KcYHdjMg/1715433343890.jpg",
    videoUrl: "https://www.youtube.com/embed/LK0O6adlT8g",
  },
  {
    id: 5,
    category: "Promotion",
    title: "Promotion Video Example",
    thumbnailUrl: "https://i.ibb.co.com/KcYHdjMg/1715433343890.jpg",
    videoUrl: "https://www.youtube.com/embed/LK0O6adlT8g",
  },
  {
    id: 6,
    category: "Cashcow",
    title: "Cashcow Example 1",
    thumbnailUrl: "https://i.ibb.co.com/KcYHdjMg/1715433343890.jpg",
    videoUrl: "https://www.youtube.com/embed/LK0O6adlT8g",
  },
  {
    id: 7,
    category: "Podcast",
    title: "Podcast Video Example",
    thumbnailUrl: "https://i.ibb.co.com/KcYHdjMg/1715433343890.jpg",
    videoUrl: "https://www.youtube.com/embed/LK0O6adlT8g",
  },
];

const Portfolio = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top on page load
  }, []);

  const [selectedCategory, setSelectedCategory] = useState("All");
  const [visibleProjects, setVisibleProjects] = useState(6);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const categories = [
    "All",
    "Talking Head",
    "Shorts",
    "Documentary",
    "Travel",
    "Promotion",
    "Cashcow",
    "Podcast",
  ];
  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  return (
    <div className="container mx-auto p-6 pt-40">
      {/* Category Filters */}
      <div className="text-center mb-6">
        {isMobile ? (
          <div className="flex flex-col items-center gap-2">
            <p className="text-gray-800 text-lg font-semibold flex items-center gap-2">
              <FaFilter className="text-yellow-400" /> Select Category
            </p>
            <select
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="p-2 bg-gray-700 text-white rounded-md w-3/4 shadow-md focus:outline-none focus:ring-2 focus:ring-yellow-400">
              {categories.map((category) => (
                <option
                  key={category}
                  value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>
        ) : (
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className="px-4 py-2 bg-gray-700 text-white rounded-md hover:bg-gray-800 transition-all text-sm md:text-base shadow-md">
                {category}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Portfolio Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {filteredProjects.slice(0, visibleProjects).map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="relative bg-gray-800 p-4 rounded-lg shadow-lg "
            whileHover={{ scale: 1.05 }}>
            {selectedVideo === project.id ? (
              <iframe
                width="100%"
                src={project.videoUrl}
                title="YouTube video"
                frameBorder="0"
                allow="autoplay; encrypted-media"
                allowFullScreen
                className="rounded-lg h-48 lg:h-64 xl:h-72"
              />
            ) : (
              <motion.img
                src={project.thumbnailUrl}
                alt={project.title}
                className="w-full h-48 lg:h-64 xl:h-72 object-cover rounded-lg cursor-pointer"
                onClick={() => setSelectedVideo(project.id as any)}
                whileHover={{ scale: 1.02 }}
              />
            )}
            <h3 className="text-white text-lg font-semibold mt-2">
              {project.title}
            </h3>
            <p className="text-gray-400 text-sm">{project.category}</p>
          </motion.div>
        ))}
      </div>

      {/* Load More Button */}
      {visibleProjects < filteredProjects.length && (
        <div className="text-center mt-6">
          <motion.button
            onClick={() => setVisibleProjects(visibleProjects + 3)}
            className="px-6 py-2 bg-red-600 text-white rounded-lg shadow-lg hover:bg-red-700 transition-all"
            whileHover={{ scale: 1.05 }}>
            Load More
          </motion.button>
        </div>
      )}
    </div>
  );
};

export default Portfolio;
