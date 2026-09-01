
import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Contact = () => {

  const ref = React.useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start']
  });

  const y = useTransform(
    scrollYProgress,
    [0, 1],
    ['-20%', '30%']
  );

  return (
    <section
      ref={ref}
      id="contact"
      className="bg-black w-full min-h-screen relative overflow-hidden flex items-end border-t border-gray-900"
    >

      {/* Background Text */}
      <motion.div
        style={{ y }}
        className="absolute top-0 left-0 w-full h-full flex justify-center items-start overflow-hidden pointer-events-none z-0 pt-16"
      >
        <h1
          className="text-[24vw] leading-none font-black text-white/[0.04] uppercase tracking-tighter select-none"
        >
          CONTACT
        </h1>
      </motion.div>

      {/* Contact Content */}
      <div className="relative z-10 w-full">

        <div
          data-aos="fade-up"
          className="max-w-6xl mx-auto px-6 md:px-12 py-20 md:py-28"
        >

          {/* Heading */}
          <div className="mb-16">

            <p className="text-sm font-bold tracking-[0.3em] uppercase text-gray-500 mb-4">
              Get In Touch
            </p>

            <h2 className="text-5xl md:text-7xl font-black text-white leading-none">
              Let's Build
              <br />
              <span className="text-gray-500">Something.</span>
            </h2>

            <p className="text-gray-400 max-w-2xl mt-7 text-base md:text-lg leading-relaxed">
              I'm always open to connecting with people who are interested
              in technology, software development, artificial intelligence,
              cloud computing and innovative ideas.
            </p>

          </div>

          {/* Contact Cards */}
          <div className="grid md:grid-cols-3 gap-5">

            {/* Email */}
            <a
              href="mailto:anushyas086@gmail.com"
              className="group bg-white/[0.05] border border-white/10 rounded-2xl p-7 hover:bg-white hover:text-black transition-all duration-500"
            >

              <div className="flex justify-between items-start">

                <span className="text-gray-500 group-hover:text-gray-700">
                  01
                </span>

                <span className="text-xl group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform">
                  ↗
                </span>

              </div>

              <h3 className="text-xl font-bold mt-12">
                Email
              </h3>

              <p className="text-gray-400 group-hover:text-gray-600 mt-2 text-sm break-all">
                anushyas086@gmail.com
              </p>

            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/anushya-s-150491292/"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white/[0.05] border border-white/10 rounded-2xl p-7 hover:bg-white hover:text-black transition-all duration-500"
            >

              <div className="flex justify-between items-start">

                <span className="text-gray-500 group-hover:text-gray-700">
                  02
                </span>

                <span className="text-xl group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform">
                  ↗
                </span>

              </div>

              <h3 className="text-xl font-bold mt-12">
                LinkedIn
              </h3>

              <p className="text-gray-400 group-hover:text-gray-600 mt-2 text-sm">
                Connect with me
              </p>

            </a>

            {/* GitHub */}
            <a
              href="https://github.com/anushya-12345"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white/[0.05] border border-white/10 rounded-2xl p-7 hover:bg-white hover:text-black transition-all duration-500"
            >

              <div className="flex justify-between items-start">

                <span className="text-gray-500 group-hover:text-gray-700">
                  03
                </span>

                <span className="text-xl group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform">
                  ↗
                </span>

              </div>

              <h3 className="text-xl font-bold mt-12">
                GitHub
              </h3>

              <p className="text-gray-400 group-hover:text-gray-600 mt-2 text-sm">
                Explore my projects
              </p>

            </a>

          </div>

          {/* Bottom Information */}
          <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between gap-6">

            <div>
              <p className="text-gray-500 text-xs uppercase tracking-widest">
                Based in
              </p>

              <p className="text-white mt-2 font-medium">
                Bhavani / Erode, Tamil Nadu
              </p>
            </div>

            <div>
              <p className="text-gray-500 text-xs uppercase tracking-widest">
                Phone
              </p>

              <a
                href="tel:8848131373"
                className="text-white mt-2 block font-medium hover:text-gray-400 transition-colors"
              >
                +91 88481 31373
              </a>
            </div>

            <div>
              <p className="text-gray-500 text-xs uppercase tracking-widest">
                Open to
              </p>

              <p className="text-white mt-2 font-medium">
                Internships & Opportunities
              </p>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default Contact;
```
