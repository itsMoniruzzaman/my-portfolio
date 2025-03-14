import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#373737] py-8">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col sm:flex-row justify-between items-center text-center sm:text-left text-white">
          {/* Left Section */}
          <div className="text-lg mb-4 sm:mb-0">
            <p className="text-sm opacity-75">
              © 2025 Moniruzzaman. All rights reserved.
            </p>
          </div>

          {/* Right Section - Social Icons */}
          <div className="flex justify-center sm:justify-end gap-8 text-3xl">
            <a
              href="https://www.linkedin.com/in/itsmoniruzzaman"
              target="_blank"
              rel="noopener noreferrer"
              className="transition duration-300 transform hover:scale-110 hover:text-white">
              <FaLinkedin />
            </a>
            <a
              href="https://www.youtube.com/@moniruzzamaaan"
              target="_blank"
              rel="noopener noreferrer"
              className="transition duration-300 transform hover:scale-110 hover:text-white">
              <FaYoutube />
            </a>
            <a
              href="https://www.instagram.com/moniruzzamaaan"
              target="_blank"
              rel="noopener noreferrer"
              className="transition duration-300 transform hover:scale-110 hover:text-white">
              <FaInstagram />
            </a>
            <a
              href="https://x.com/imMoniruzzaman"
              target="_blank"
              rel="noopener noreferrer"
              className="transition duration-300 transform hover:scale-110 hover:text-white">
              <FaTwitter />
            </a>
            <a
              href="https://www.facebook.com/moniruzzamaaan"
              target="_blank"
              rel="noopener noreferrer"
              className="transition duration-300 transform hover:scale-110 hover:text-white">
              <FaFacebook />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
