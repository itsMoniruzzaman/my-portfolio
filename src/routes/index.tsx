import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import ServicePage from "../pages/ServicePage";
import Portfolio from "@/pages/Portfolio";
import Review from "@/pages/Review";
import CaseStudy from "@/components/CaseStudy";
import CaseStudyDetailsWeb from "@/pages/CaseStudyDetailsWeb";
import CaseStudyDetailsMar from "@/pages/CaseStudyDetailsMar";
import CaseStudyDetailsEco from "@/pages/CaseStudyDetailsEco";
import MotionGraphicsService from "@/pages/MotionDetails";
import VideoEditingService from "../pages/VideoDetails";
import YouTubeSEOService from "../pages/YoutubeDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/services",
        element: <ServicePage />,
      },
      {
        path: "/services/motion-graphics",
        element: <MotionGraphicsService />,
      },
      {
        path: "/services/video-editing",
        element: <VideoEditingService />,
      },
      {
        path: "/services/youtube-seo",
        element: <YouTubeSEOService />,
      },
      {
        path: "/portfolios",
        element: <Portfolio />,
      },
      {
        path: "/reviews",
        element: <Review />,
      },
      {
        path: "/case-study",
        element: <CaseStudy />,
      },
      {
        path: "/case-study/web-development",
        element: <CaseStudyDetailsWeb />,
      },
      {
        path: "/case-study/digital-marketing",
        element: <CaseStudyDetailsMar />,
      },
      {
        path: "/case-study/ecommerce",
        element: <CaseStudyDetailsEco />,
      },
    ],
  },
]);
