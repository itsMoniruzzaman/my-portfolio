import { useState } from "react";
import { CiMenuFries } from "react-icons/ci";
import { BsFillStarFill } from "react-icons/bs";
import {
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";
import { motion } from "framer-motion";
import { NavLink, Link } from "react-router-dom"; // Import NavLink
// import { Link } from "react-scroll";
import "../styles/global.css";

const Navbar = () => {
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);

  return (
    <div>
      <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 w-[95%] max-w-[1200px] flex items-center justify-between bg-transparent backdrop-blur-lg border bg-gray-200 border-black/20 px-6 py-4 rounded-full shadow-lg z-50">
        {/* Logo */}
        <a href="/">
          <img
            src="https://i.ibb.co/9ksYD8YC/namelogo.png"
            alt="logo"
            className="w-[150px]"
          />
        </a>

        {/* Nav Links */}
        <ul className="hidden md:flex items-center gap-8 text-white text-lg font-semibold">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `relative cursor-pointer capitalize transition-all duration-300 ${
                  isActive
                    ? "bg-red-600 text-white rounded-xl px-4 py-2"
                    : "downtext-gradient after:absolute after:left-0 after:bottom-[-4px] after:w-0 after:h-[2px] after:bg-red-700 after:transition-all after:duration-300 hover:after:w-full"
                }`
              }>
              home
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/services"
              className={({ isActive }) =>
                `relative cursor-pointer capitalize transition-all duration-300 ${
                  isActive
                    ? "bg-red-600 text-white rounded-xl px-4 py-2"
                    : "downtext-gradient after:absolute after:left-0 after:bottom-[-4px] after:w-0 after:h-[2px] after:bg-red-700 after:transition-all after:duration-300 hover:after:w-full"
                }`
              }>
              services
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/portfolios"
              className={({ isActive }) =>
                `relative cursor-pointer capitalize transition-all duration-300 ${
                  isActive
                    ? "bg-red-600 text-white rounded-xl px-4 py-2"
                    : "downtext-gradient after:absolute after:left-0 after:bottom-[-4px] after:w-0 after:h-[2px] after:bg-red-700 after:transition-all after:duration-300 hover:after:w-full"
                }`
              }>
              portfolios
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/reviews"
              className={({ isActive }) =>
                `relative cursor-pointer capitalize transition-all duration-300 ${
                  isActive
                    ? "bg-red-600 text-white rounded-xl px-4 py-2"
                    : "downtext-gradient after:absolute after:left-0 after:bottom-[-4px] after:w-0 after:h-[2px] after:bg-red-700 after:transition-all after:duration-300 hover:after:w-full"
                }`
              }>
              Reviews
            </NavLink>
          </li>
          <li>
            <Link
              to="/#about" // Link to the home page with the #about hash
              onClick={() => {
                // Trigger scroll to "about" section manually
                const aboutSection = document.getElementById("about");
                if (aboutSection) {
                  aboutSection.scrollIntoView({ behavior: "smooth" });
                }
              }}
              className="relative downtext-gradient cursor-pointer capitalize transition-all duration-300 after:absolute after:left-0 after:bottom-[-4px] after:w-0 after:h-[2px] after:bg-red-700 after:transition-all after:duration-300 hover:after:w-full">
              about
            </Link>
          </li>
        </ul>

        {/* Let's Talk */}
        <div className="flex items-center gap-6">
          <a href="mailto:collab@moniruzzamaan.com">
            <button className="hidden md:block uppercase text-red-600 font-semibold">
              let,s talk
            </button>
          </a>

          {/* Three-line Menu */}
          <div className="hidden md:block">
            {/* Button to open modal */}
            <button
              onClick={() =>
                (
                  document.getElementById("my_modal_5") as HTMLDialogElement
                )?.showModal()
              }>
              <div className="bg-red-600 rounded-full p-2">
                <CiMenuFries className="text-2xl text-white cursor-pointer" />
              </div>
            </button>

            {/* Modal */}
            <dialog
              id="my_modal_5"
              className="modal modal-bottom sm:modal-middle">
              <div className="modal-box relative bg-white bg-opacity-90 backdrop-blur-md shadow-lg rounded-lg p-6">
                {/* Profile Section */}
                <div className="flex flex-col items-center text-center">
                  {/* Avatar */}
                  <img
                    src="https://i.ibb.co.com/q3fSt8RM/fav-icon.png" // Replace with actual image URL
                    alt="Profile"
                    className="w-24 h-24 rounded-full border-4 border-white shadow-md"
                  />
                  {/* Name */}
                  <h3 className="font-bold text-xl mt-3">Moniruzzaman</h3>
                  {/* Short Description */}
                  <p className="text-gray-600 text-sm mt-1">
                    Video Editor - Helping Creators and Businesses Grow Online.
                  </p>
                  <br />
                  {/* Fiverr Link with Fiverr Logo */}
                  <a
                    href="https://www.fiverr.com/yourprofile" // Replace with Moniruzzaman's actual Fiverr link
                    className="flex items-center text-[#1DBF73] text-sm mt-2 underline"
                    target="_blank"
                    rel="noopener noreferrer">
                    {/* Fiverr Logo */}
                    <img
                      src="https://i.ibb.co.com/67C7qBWG/images-1.png" // Fiverr logo URL
                      alt="Fiverr Logo"
                      width={20}
                      height={20}
                      className="mr-2 rounded-full"
                    />
                    Visit my Fiverr Profile
                  </a>

                  {/* Rating Section */}
                  <div className="mt-3 flex gap-1 text-yellow-500">
                    <BsFillStarFill />
                    <BsFillStarFill />
                    <BsFillStarFill />
                    <BsFillStarFill />
                    <BsFillStarFill />
                  </div>
                </div>

                {/* Social Media Links */}
                <div className="flex justify-center gap-4 mt-4">
                  <a
                    href="https://www.linkedin.com/in/itsmoniruzzaman"
                    className="text-blue-700 text-2xl">
                    <FaLinkedin />
                  </a>
                  <a
                    href="https://www.youtube.com/@moniruzzamaaan"
                    className="text-red-600 text-2xl">
                    <FaYoutube />
                  </a>
                  <a
                    href="https://www.instagram.com/moniruzzamaaan"
                    className="text-pink-500 text-2xl">
                    <FaInstagram />
                  </a>
                  <a
                    href="https://x.com/imMoniruzzaman"
                    className="text-blue-400 text-2xl">
                    <FaTwitter />
                  </a>
                  <a
                    href="https://www.facebook.com/moniruzzamaaan"
                    className="text-blue-600 text-2xl">
                    <FaFacebook />
                  </a>
                </div>

                {/* Close Button */}
                <div className="modal-action">
                  <form method="dialog">
                    <button className="btn btn-outline">Close</button>
                  </form>
                </div>
              </div>
            </dialog>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <CiMenuFries
          className="text-2xl text-gray-800 cursor-pointer md:hidden"
          onClick={() => setMobileSidebarOpen(!mobileSidebarOpen)}
        />

        {/* Mobile Sidebar */}
        <motion.aside
          initial={{ x: "100%", opacity: 0 }}
          animate={{
            x: mobileSidebarOpen ? "0%" : "100%",
            opacity: mobileSidebarOpen ? 1 : 0,
          }}
          transition={{ duration: 0.3 }}
          className="fixed top-0 right-0 w-2/3 h-screen bg-black/70 backdrop-blur-md p-6 flex flex-col items-center gap-6 text-white md:hidden">
          {mobileSidebarOpen && (
            <button
              className="absolute top-4 right-6 text-white text-2xl"
              onClick={() => setMobileSidebarOpen(false)}>
              &times;
            </button>
          )}
          <div>
            <img
              src="https://i.ibb.co.com/q3fSt8RM/fav-icon.png"
              alt=""
              className="w-24 h-24 rounded-full border-4 mb-6 border-white shadow-md"
            />
            <ul className="flex flex-col items-center gap-6 text-lg">
              <li>
                <NavLink
                  to="/"
                  className="relative cursor-pointer capitalize transition-all duration-300  after:absolute after:left-0 after:bottom-[-4px] after:w-0 after:h-[2px] after:bg-red-700 after:transition-all after:duration-300 hover:after:w-full"
                  onClick={() => setMobileSidebarOpen(false)}>
                  home
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/services"
                  className="relative cursor-pointer capitalize transition-all duration-300  after:absolute after:left-0 after:bottom-[-4px] after:w-0 after:h-[2px] after:bg-red-700 after:transition-all after:duration-300 hover:after:w-full"
                  onClick={() => setMobileSidebarOpen(false)}>
                  services
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/portfolios"
                  className="relative cursor-pointer capitalize transition-all duration-300  after:absolute after:left-0 after:bottom-[-4px] after:w-0 after:h-[2px] after:bg-red-700 after:transition-all after:duration-300 hover:after:w-full"
                  onClick={() => setMobileSidebarOpen(false)}>
                  portfolios
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/reviews"
                  className="relative cursor-pointer capitalize transition-all duration-300  after:absolute after:left-0 after:bottom-[-4px] after:w-0 after:h-[2px] after:bg-red-700 after:transition-all after:duration-300 hover:after:w-full"
                  onClick={() => setMobileSidebarOpen(false)}>
                  Reviews
                </NavLink>
              </li>
              <li>
                <Link
                  to="/#about" // Link to the home page with the #about hash
                  onClick={() => {
                    // Trigger scroll to "about" section manually
                    const aboutSection = document.getElementById("about");
                    if (aboutSection) {
                      aboutSection.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                  className="relative cursor-pointer capitalize transition-all duration-300  after:absolute after:left-0 after:bottom-[-4px] after:w-0 after:h-[2px] after:bg-red-700 after:transition-all after:duration-300 hover:after:w-full">
                  about
                </Link>
              </li>
            </ul>
          </div>
        </motion.aside>
      </nav>
    </div>
  );
};

export default Navbar;
