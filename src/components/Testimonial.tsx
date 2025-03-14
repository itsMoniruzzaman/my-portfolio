import { FaQuoteRight } from "react-icons/fa";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Slider from "react-slick";

const testimonials = [
  {
    image: "https://i.ibb.co.com/RpGSQNDQ/download.jpg",
    name: "Arun Sharma",
    title: "CEO of Infotech Solutions",
    description:
      "Moniruzzaman's video editing skills transformed our marketing videos! His attention to detail, creative approach, and quick turnaround made a huge impact on our brand. We saw a significant increase in engagement after his edits.",
  },
  {
    image: "https://i.ibb.co.com/b5mJ9J9S/download-1.jpg",
    name: "Sandeep Patel",
    title: "Founder of Nexa Innovations",
    description:
      "Moniruzzaman was fantastic to work with. He understood our vision for the video content and helped us create compelling marketing materials. His expertise made a noticeable difference in the quality and impact of our videos.",
  },
  {
    image: "https://i.ibb.co.com/RpGSQNDQ/download.jpg",
    name: "Arun Sharma",
    title: "CEO of Infotech Solutions",
    description:
      "Moniruzzaman's video editing skills transformed our marketing videos! His attention to detail, creative approach, and quick turnaround made a huge impact on our brand. We saw a significant increase in engagement after his edits.",
  },
  {
    image: "https://i.ibb.co.com/b5mJ9J9S/download-1.jpg",
    name: "Sandeep Patel",
    title: "Founder of Nexa Innovations",
    description:
      "Moniruzzaman was fantastic to work with. He understood our vision for the video content and helped us create compelling marketing materials. His expertise made a noticeable difference in the quality and impact of our videos.",
  },
  {
    image: "https://i.ibb.co.com/RpGSQNDQ/download.jpg",
    name: "Arun Sharma",
    title: "CEO of Infotech Solutions",
    description:
      "Moniruzzaman's video editing skills transformed our marketing videos! His attention to detail, creative approach, and quick turnaround made a huge impact on our brand. We saw a significant increase in engagement after his edits.",
  },
  {
    image: "https://i.ibb.co.com/b5mJ9J9S/download-1.jpg",
    name: "Sandeep Patel",
    title: "Founder of Nexa Innovations",
    description:
      "Moniruzzaman was fantastic to work with. He understood our vision for the video content and helped us create compelling marketing materials. His expertise made a noticeable difference in the quality and impact of our videos.",
  },
];

const Testimonial = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
          arrows: false,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
          arrows: false,
        },
      },
    ],
  };

  return (
    <section className="py-6 md:py-12 px-4 lg:px-6 bg-[#FAF7F5]">
      <div className="max-w-6xl mx-auto">
        <div
          data-aos="fade-right"
          className="mb-4 md:mb-8 text-center px-4">
          <h3 className="text-red-600 font-bold uppercase text-xs md:text-sm">
            Don't Take My Word for It
          </h3>
          <h2 className="downtext-gradient text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight mb-1 md:mb-2">
            My Clients Say It All
          </h2>
          <p className="max-w-2xl mx-auto text-xs sm:text-sm md:text-base">
            I let my clients do the talking.
            <span className="font-bold">
              {" "}
              Their reviews prove it better than I ever could.
            </span>
          </p>
        </div>

        <div className="w-full">
          <Slider
            {...settings}
            className="testimonial-slider">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="px-2 pb-4">
                <div className="bg-[#373737] text-white rounded-lg p-4 h-full transition duration-300 hover:shadow-lg">
                  <div className="flex items-center gap-3 mb-3">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-10 h-10 object-cover rounded-full"
                    />
                    <div className="flex-1 min-w-0">
                      <h3 className="text-sm font-medium truncate">
                        {testimonial.name}
                      </h3>
                      <p className="text-xs text-gray-300 truncate">
                        {testimonial.title}
                      </p>
                    </div>
                    <FaQuoteRight className="text-lg text-[#e9e9e959]" />
                  </div>
                  <p className="text-sm text-[#e9e9e9]">
                    {testimonial.description}
                  </p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
