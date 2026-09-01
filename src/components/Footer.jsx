
import React from 'react';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-black text-white py-16 px-6 md:px-12 w-full">

      <div className="max-w-7xl mx-auto">

        {/* Top Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 border-b border-white/10 pb-12">

          {/* About */}
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-gray-500 mb-4">
              About
            </p>

            <p className="text-gray-300 leading-relaxed max-w-xs">
              Computer Science Engineering student passionate about
              Artificial Intelligence, Full Stack Development, Cloud
              Computing and innovative technology.
            </p>
          </div>

          {/* Interests */}
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-gray-500 mb-4">
              Interests
            </p>

            <div className="flex flex-wrap gap-2 max-w-xs">

              {[
                'AI / ML',
                'Web Development',
                'Cloud Computing',
                'Innovation'
              ].map((item) => (
                <span
                  key={item}
                  className="px-3 py-1.5 rounded-full border border-white/10 text-gray-400 text-xs"
                >
                  {item}
                </span>
              ))}

            </div>
          </div>

          {/* Location */}
          <div className="md:text-right">
            <p className="text-xs uppercase tracking-[0.25em] text-gray-500 mb-4">
              Location
            </p>

            <p className="text-gray-300">
              Bhavani / Erode
            </p>

            <p className="text-gray-500 mt-1">
              Tamil Nadu, India
            </p>
          </div>

        </div>

        {/* Huge Name */}
        <div className="py-20 overflow-hidden">

          <h2 className="text-[20vw] md:text-[15vw] leading-none font-black tracking-tighter text-center select-none">
            ANUSHYA
          </h2>

        </div>

        {/* Bottom Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-end border-t border-white/10 pt-8">

          {/* Copyright */}
          <div>
            <p className="text-gray-500 text-xs">
              © {year} Anushya S
            </p>

            <p className="text-gray-600 text-xs mt-2">
              Built with React
            </p>
          </div>

          {/* Social Links */}
          <div className="flex justify-start md:justify-center gap-6">

            <a
              href="https://github.com/anushya-12345"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors text-sm"
            >
              GitHub ↗
            </a>

            <a
              href="https://www.linkedin.com/in/anushya-s-150491292/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors text-sm"
            >
              LinkedIn ↗
            </a>

          </div>

          {/* Email */}
          <div className="md:text-right">

            <a
              href="mailto:anushyas086@gmail.com"
              className="text-gray-300 hover:text-white transition-colors text-sm"
            >
              anushyas086@gmail.com
            </a>

          </div>

        </div>

      </div>

    </footer>
  );
};

export default Footer;

