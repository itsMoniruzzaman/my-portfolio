import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import { NavLink } from "react-router";

const CaseStudy = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  const [selectedVideo, setSelectedVideo] = useState(null);

  const videos = [
    {
      thumbnail: "https://i.ibb.co.com/9m1GyfBm/download-2.jpg",
      videoId: "u_j04N4QEiE", // Only the video ID
    },
    {
      thumbnail: "https://i.ibb.co.com/rKXKsPQM/download-1.jpg",
      videoId: "dcNCLbKmmYk", // Example video ID
    },
    {
      thumbnail: "https://i.ibb.co.com/Z1h4jGW8/download-3.jpg",
      videoId: "YSAp05fZYDk", // Another video ID
    },
  ];

  const handleClick = (videoId: any) => {
    // If the video is already selected, do nothing
    if (selectedVideo === videoId) return;
    setSelectedVideo(videoId);
  };

  return (
    <div className="max-w-7xl mx-auto">
      <section className="pt-16 pb-10">
        <div className="container mx-auto px-6 md:px-12">
          <div
            data-aos="fade-right"
            className="mb-8 text-center">
            <h3 className="text-red-600 font-semibold uppercase">
              Real Success Stories
            </h3>
            <h2 className="downtext-gradient text-3xl md:text-6xl font-bold tracking-tight mb-4">
              Featured Projects
            </h2>
            <p className="downtext-gradient max-w-2xl mx-auto text-lg">
              Discover how I've helped businesses achieve their goals.
              <span className="font-bold">
                These success stories highlight the impact of my work.
              </span>
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {videos.map((video) => (
              <div
                data-aos="fade-up"
                key={video.videoId}
                className="relative group cursor-pointer"
                onClick={() => handleClick(video.videoId)}>
                {/* Show the thumbnail or the iframe if the video is selected */}
                {selectedVideo === video.videoId ? (
                  <iframe
                    width="100%"
                    height="100%"
                    src={`https://www.youtube.com/embed/${video.videoId}`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    title="YouTube Video"
                    className="w-full h-56 object-cover rounded-lg"
                  />
                ) : (
                  <img
                    src={video.thumbnail}
                    alt={`Thumbnail for ${video.videoId}`}
                    className="w-full h-full object-cover rounded-lg"
                  />
                )}

                {/* Show "Play Video" hover text only if video is not selected */}
                {selectedVideo !== video.videoId && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-white text-2xl">Play Video</span>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="text-center">
            <NavLink to="/portfolios">
              <button className="relative mt-8 w-1/2 md:w-1/4 px-6 py-2 bg-gradient-to-r from-red-500 to-red-700 text-white font-semibold rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105 hover:shadow-red-600/50 border border-red-500/50">
                See More
              </button>
            </NavLink>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CaseStudy;
