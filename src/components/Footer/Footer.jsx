import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
    return (
      <footer className="bg-gray-800 text-white py-10">
        <div className="max-w-6xl mx-auto px-4">
          {/* Top section: Overview and Values */}
  
          {/* Divider */}
          <div className="border-t border-gray-700 my-8"></div>
  
          {/* Bottom Section: Company Name and Social Links */}
          <div className="flex flex-col md:flex-row justify-between items-center">
            {/* Company Name */}
            <div>
              <p className="text-gray-400">&copy; 2024 OnRoute. All rights reserved.</p>
            </div>
  
            {/* Social Media Links */}

         <div className="mt-4 md:mt-0 flex space-x-4">
            <span className="text-gray-400">Follow us:</span>

            {/* Social Icons */}
            <a href="#" className="text-gray-400 hover:text-white transition duration-300">
              <FaFacebookF size={24} /> {/* Facebook */}
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition duration-300">
              <FaTwitter size={24} /> {/* Twitter */}
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition duration-300">
              <FaInstagram size={24} /> {/* Instagram */}
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition duration-300">
              <FaLinkedinIn size={24} /> {/* LinkedIn */}
            </a>
           
          </div>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  