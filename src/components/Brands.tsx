import "../styles/global.css";
const Brands = () => {
  const subscribers = [
    {
      name: "Google",
      imageUrl: "https://i.ibb.co.com/99qtBDRS/channels4-profile-5-1.webp",
      subscriber: "49.8k",
    },
    {
      name: "Facebook",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Facebook_Logo_%282019%29.png/1200px-Facebook_Logo_%282019%29.png",
      subscriber: "49.8k",
    },
    {
      name: "Microsoft",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/1200px-Microsoft_logo.svg.png",
      subscriber: "49.8k",
    },
    {
      name: "Amazon",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png",
      subscriber: "49.8k",
    },
    {
      name: "Netflix",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1200px-Netflix_2015_logo.svg.png",
      subscriber: "49.8k",
    },
  ];
  return (
    <div>
      <div className=" pt-16 pb-2 sm:pt-24 sm:pb-4 ">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h3 className="text-red-600 font-bold text-center pb-2">
            Subscriber Milestones
          </h3>
          <h2 className="text-center text-2xl md:text-4xl font-bold downtext-gradient">
            Proudly Showcasing My Clients' Subscribers
          </h2>

          <div className="relative overflow-hidden  py-10 rounded-lg">
            <div className="flex w-full animate-marquee space-x-6">
              {subscribers.concat(subscribers).map((subscriber, index) => (
                <div
                  key={index}
                  className="bg-gray-200 px-6 py-4 rounded-lg flex flex-col items-center justify-center shadow-md min-w-[150px] sm:min-w-[180px]">
                  <img
                    src={subscriber.imageUrl}
                    alt={subscriber.name}
                    className="h-12 w-12 sm:h-16 sm:w-16 rounded-full border border-white"
                  />
                  <p className="text-sm sm:text-base font-semibold mt-2 text-gray-800">
                    {subscriber.name}
                  </p>
                  <p className="text-red-700 text-xs sm:text-sm font-bold">
                    {subscriber.subscriber}
                  </p>
                </div>
              ))}
            </div>

            {/* Animation Styles */}
            <style>{`
        @keyframes marquee {
          from {
            transform: translateX(0%);
          }
          to {
            transform: translateX(-50%);
          }
        }
        .animate-marquee {
          display: flex;
          white-space: nowrap;
          will-change: transform;
          animation: marquee 10s linear infinite;
        }
      `}</style>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Brands;
