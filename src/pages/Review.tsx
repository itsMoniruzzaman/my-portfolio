import { Card, CardContent } from "@/components/ui/card";
import { Avatar } from "@/components/ui/avatar";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const reviews = [
  // Video Editing Reviews
  {
    name: "Ethan Carter",
    review:
      "Moniruzzaman transformed our video content into a cinematic masterpiece. His editing skills are top-notch, and he truly understands the power of storytelling.",
    category: "CTO, Tech Solutions Ltd.",
    imageUrl:
      "https://i.ibb.co.com/YBmxYXC8/premium-photo-1689562473471-6e736b8afe15.jpg",
  },
  {
    name: "Ayman Rahman",
    review:
      "Moniruzzaman’s video editing made our product demos come alive. He helped us create engaging content that’s truly professional and polished.",
    category: "CEO, ShopMart BD",
    imageUrl: "https://i.ibb.co.com/JRdwm49M/202406241701lok.jpg",
  },
  {
    name: "Nathan Brooks",
    review:
      "Moniruzzaman’s expertise in video editing has elevated our marketing videos to the next level. His attention to detail is unparalleled.",
    category: "CTO, AlphaTech Inc.",
    imageUrl:
      "https://i.ibb.co.com/Y41XB0Hq/bjorn-antonissen-jtkcfz49jzo-unsplash.jpg",
  },
  {
    name: "Fahim Chowdhury",
    review:
      "The quality of video content Moniruzzaman delivered for our fintech platform is incredible. Professional, clean, and engaging.",
    category: "COO, FinEase BD",
    imageUrl: "https://i.ibb.co.com/twGBcPXd/cga-nurul-islam.jpg",
  },
  {
    name: "Isla Thompson",
    review:
      "Working with Moniruzzaman was a smooth experience. His video edits helped our tutorials become more engaging and shareable on social media.",
    category: "Head of Product, Data Insights",
    imageUrl: "https://i.ibb.co.com/Q7962pJv/1708697306168.jpg",
  },
  {
    name: "Raihan Karim",
    review:
      "Moniruzzaman’s editing on our explainer videos was fantastic! The final product exceeded our expectations and helped us communicate our ideas clearly.",
    category: "CTO, LogiTrack BD",
    imageUrl: "https://i.ibb.co.com/WNcr4BfZ/17581.jpg",
  },

  // Social Media Video Editing Reviews
  {
    name: "Sophia Bennett",
    review:
      "Moniruzzaman’s video edits for our social media campaigns boosted engagement significantly. We’ve seen a tremendous increase in views and shares.",
    category: "CMO, GrowthTech",
    imageUrl:
      "https://i.ibb.co.com/FkhVQMCP/professional-profile-pictures-1500-x-2100-bvjgzg0cwa8r051t.jpg",
  },
  {
    name: "Hasan Mahmud",
    review:
      "The videos Moniruzzaman edited for our brand’s social channels helped us grow our audience and establish a stronger online presence.",
    category: "Director of Marketing, BD Commerce",
    imageUrl: "https://i.ibb.co.com/zW8J3DzT/24944.jpg",
  },
  {
    name: "Olivia Martin",
    review:
      "We had Moniruzzaman edit our YouTube videos, and the results were stunning. Our subscribers and views have increased substantially.",
    category: "Marketing Lead, Creatify Agency",
    imageUrl:
      "https://i.ibb.co.com/bjNdCttC/premium-photo-1673796983667-df59f16df984.jpg",
  },
  {
    name: "Tanvir Alam",
    review:
      "Moniruzzaman edited our promotional video perfectly. The final result was polished, captivating, and resonated with our target audience.",
    category: "CEO, BrandSphere BD",
    imageUrl: "https://i.ibb.co.com/4nC9T8qg/images-1.jpg",
  },
  {
    name: "Mia Harrison",
    review:
      "Our video marketing campaigns have reached new heights with Moniruzzaman’s edits. He knows exactly how to enhance content for maximum impact.",
    category: "CMO, Retail Boosters",
    imageUrl:
      "https://i.ibb.co.com/pvfq3ZYF/783b118f48375e1f41e8ea39a37416bc.jpg",
  },
  {
    name: "Zubair Khan",
    review:
      "Moniruzzaman’s editing helped us craft engaging video content that directly contributed to our higher conversion rates.",
    category: "Head of Digital, NextGen BD",
    imageUrl: "https://i.ibb.co.com/7dSC9TKW/images.jpg",
  },
];

export default function Review() {
  const [visibleReviews, setVisibleReviews] = useState(6);
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top on page load
  }, []);

  return (
    <div className="p-6 md:p-12 pt-40 md:pt-40 max-w-7xl mx-auto ">
      <h2 className="text-3xl font-bold text-center downtext-gradient mb-6">
        What My Clients Say
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {reviews.slice(0, visibleReviews).map((review, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}>
            <Card className="shadow-lg rounded-xl bg-gradient-to-r from-white to-zinc-300  border border-red-600  p-4">
              <CardContent>
                <div className="flex items-center gap-4 mb-3">
                  <Avatar className="w-12 h-12 bg-gray-200">
                    <img
                      src={review.imageUrl}
                      alt={review.name}
                    />
                  </Avatar>

                  <div>
                    <h3 className="text-lg font-semibold downtext-gradient">
                      {review.name}
                    </h3>
                    <p className="text-sm text-red-600">{review.category}</p>
                  </div>
                </div>
                <p className="downtext-gradient">{review.review}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
      {visibleReviews < reviews.length && (
        <div className="text-center mt-6">
          <Button
            onClick={() => setVisibleReviews(visibleReviews + 6)}
            className="bg-red-600  px-4 py-2 rounded-lg">
            Load More
          </Button>
        </div>
      )}
    </div>
  );
}
