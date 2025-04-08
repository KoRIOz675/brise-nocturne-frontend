import React from "react";
// import { Link } from "react-router-dom";

import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-white py-8 px-8">
      <div className="container mx-auto flex flex-col justify-between items-center  md:flex-row ">
        <div className="text-center md:text-left mb-4 md:mb-0">
          <p>
            © {new Date().getFullYear()} Brise Nocturne. Tous droits réservés.
          </p>
          <hr className="text-2xl font-bold mb-2 mt-2" />
          <div className="flex flex-col items-center justify-center m-2 space-x-4 md:flex-row">
            <iframe
              src=""
              width="300"
              height="100"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
            <div className="text-xl mr-2">
              <div>Auberge de la Brise Nocturne</div>
              <div>123 Rue de ###</div>
              <div>##### Ville, France</div>
            </div>
          </div>
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
