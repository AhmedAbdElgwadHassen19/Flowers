import { FaFacebookF, FaTwitter, FaInstagram, FaBehance } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-10">
        
        <div className="md:w-1/3">
          <div className="flex items-center mb-4 space-x-2 text-white font-bold text-xl">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              
            </svg>
            <span>Fixyland</span>
          </div>
          <p className="text-sm mb-4">
            Nam libero tempore cum soluta nobis eligendi optio cumque nihil impedit quo minus maxime placeat facere
          </p>

          {/* Social icons */}
          <div className="flex space-x-4">
            <a href="#" className="bg-gray-700 hover:bg-gray-600 p-2 rounded text-white">
              <FaFacebookF />
            </a>
            <a href="#" className="bg-gray-700 hover:bg-gray-600 p-2 rounded text-white">
              <FaTwitter />
            </a>
            <a href="#" className="bg-gray-700 hover:bg-gray-600 p-2 rounded text-white">
              <FaInstagram />
            </a>
            <a href="#" className="bg-gray-700 hover:bg-gray-600 p-2 rounded text-white">
              <FaBehance />
            </a>
          </div>
        </div>

        <div className="md:w-1/3 flex justify-between">
          <div>
            <h3 className="font-semibold text-white mb-4">EXPLORE</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white">About Hotel</a></li>
              <li><a href="#" className="hover:text-white">Pricing</a></li>
              <li><a href="#" className="hover:text-white">Hotel Staff</a></li>
              <li><a href="#" className="hover:text-white">Latest News</a></li>
              <li><a href="#" className="hover:text-white">Contact Us</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">CONTACT</h3>
            <address className="not-italic text-sm text-gray-400 space-y-2">
              <p>7631 Sabina Park, T5 Devon Isle, Louisiana, USA</p>
              <p>📞 (+1) 987 654 3210</p>
              <p>✉ info@domain.com</p>
            </address>
          </div>
        </div>

        <div className="md:w-1/3 bg-gray-800 rounded-lg p-6">
          <h3 className="text-white font-semibold mb-4">NEWSLETTER</h3>
          <form className="flex flex-col space-y-4">
            <input
              type="email"
              placeholder="Ex. info@domain.com"
              className="p-3 rounded bg-gray-700 text-white placeholder-gray-400 focus:outline-none"
            />
            <button
              type="submit"
              className="bg-green-700 hover:bg-green-600 text-white font-semibold py-2 rounded"
              aria-label="Subscribe"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="inline-block h-5 w-5 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
              Subscribe
            </button>
            <label className="text-xs text-gray-400 flex items-center space-x-2">
              <input type="checkbox" className="w-4 h-4" />
              <span>I agree to all terms and policies</span>
            </label>
          </form>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-10 pt-4 flex justify-between text-xs text-gray-500">
        <p>© Copyright 2025 Fixyland. All Rights Reserved.</p>
        <div className="space-x-4">
          <a href="#" className="hover:text-white">Terms and Conditions</a>
          <a href="#" className="hover:text-white">Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
}
