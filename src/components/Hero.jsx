```jsx
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Hero = () => {

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-out'
    });
  }, []);

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({
      behavior: 'smooth'
    });
  };

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({
      behavior: 'smooth'
    });
  };

  return (
    <section className="relative w-full min-h-screen overflow-hidden bg-black">

      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black"></div>

      {/* Decorative circles */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-purple-600/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-72 h-72 bg-blue-600/20 rounded-full blur-3xl"></div>

      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex items-center px-6 md:px-12 lg:px-20">

        <div className="max-w-6xl mx-auto w-full">

          {/* Small introduction */}
          <p
            data-aos="fade-up"
            className="text-gray-400 text-sm md:text-lg font-medium tracking-[0.3em] uppercase mb-5"
          >
            Computer Science Engineering Student
          </p>

          {/* Name */}
          <h1
            data-aos="fade-up"
            data-aos-delay="150"
            className="text-white text-5xl sm:text-6xl md:text-8xl font-bold tracking-tight leading-none"
          >
            ANUSHYA
            <br />

            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-300">
              S
            </span>
          </h1>

          {/* Professional title */}
          <h2
            data-aos="fade-up"
            data-aos-delay="300"
            className="text-xl md:text-3xl text-gray-200 font-semibold mt-6"
          >
            AI/ML • Full Stack Development • Innovation
          </h2>

          {/* Description */}
          <p
            data-aos="fade-up"
            data-aos-delay="450"
            className="text-gray-400 text-sm md:text-lg max-w-2xl mt-6 leading-relaxed"
          >
            I am passionate about building intelligent, scalable and
            meaningful technology solutions using software development,
            artificial intelligence and modern web technologies.
          </p>

          {/* Buttons */}
          <div
            data-aos="fade-up"
            data-aos-delay="600"
            className="flex flex-wrap gap-4 mt-8"
          >

            <button
              onClick={scrollToProjects}
              className="px-7 py-3 rounded-full bg-white text-black font-semibold hover:bg-gray-200 transition-all duration-300 hover:scale-105"
            >
              View My Work
            </button>

            <button
              onClick={scrollToContact}
              className="px-7 py-3 rounded-full border border-white/40 bg-white/10 backdrop-blur-md text-white font-semibold hover:bg-white hover:text-black transition-all duration-300 hover:scale-105"
            >
              Contact Me
            </button>

          </div>

          {/* Social links */}
          <div
            data-aos="fade-up"
            data-aos-delay="750"
            className="flex gap-6 mt-10"
          >

            <a
              href="https://github.com/anushya-12345"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              GitHub ↗
            </a>

            <a
              href="https://www.linkedin.com/in/anushya-s-150491292/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              LinkedIn ↗
            </a>

            <a
              href="mailto:anushyas086@gmail.com"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Email ↗
            </a>

          </div>

        </div>

      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-gray-500 text-xs tracking-widest uppercase animate-bounce">
        Scroll ↓
      </div>

    </section>
  );
};

export default Hero;
```

