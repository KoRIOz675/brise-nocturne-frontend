import React from "react";
import { Link } from "react-router-dom";

import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-white py-8 px-8">
      <div className="container mx-auto flex flex-col justify-between items-center  md:flex-row md:justify-around">
        <div className="text-center md:text-left mb-4 md:mb-0">
          <p>
            © {new Date().getFullYear()} Brise Nocturne. Tous droits réservés.
          </p>
          <hr className="text-2xl font-bold mb-2 mt-2" />
          <Link
            to="/contact"
            className="hover:text-red-500 transition duration-300"
          >
            Nous Contacter
          </Link>
        </div>

        <div className="flex space-x-6">
          <a
            href="https://facebook.com" // Edit with final URL
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-red-500 transition duration-300"
          >
            <FaFacebook size={24} />
          </a>
          <a
            href="https://twitter.com" // Edit with final URL
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-red-500 transition duration-300"
          >
            <FaTwitter size={24} />
          </a>
          <a
            href="https://instagram.com" // Edit with final URL
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-red-500 transition duration-300"
          >
            <FaInstagram size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
