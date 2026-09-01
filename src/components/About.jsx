```jsx
import React from 'react';

const About = () => {
  return (
    <section
      id="about"
      className="bg-white py-24 px-6 md:px-12 w-full relative overflow-hidden font-sans"
    >
      <div className="max-w-6xl mx-auto">

        {/* Section Heading */}
        <div data-aos="fade-up" className="mb-16">
          <p className="text-sm font-bold tracking-[0.3em] uppercase text-gray-500 mb-3">
            About Me
          </p>

          <h2 className="text-5xl md:text-7xl font-black text-black leading-none">
            Turning Ideas
            <br />
            <span className="text-gray-400">Into Technology.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-14 items-start">

          {/* About Text */}
          <div data-aos="fade-right">

            <p className="text-xl md:text-2xl font-semibold text-gray-900 leading-relaxed">
              Hi, I'm <span className="font-black">Anushya S</span>.
            </p>

            <p className="text-gray-600 text-base md:text-lg leading-relaxed mt-6">
              I am a Computer Science Engineering student with a strong
              interest in software development, artificial intelligence,
              machine learning and innovative technology solutions.
            </p>

            <p className="text-gray-600 text-base md:text-lg leading-relaxed mt-5">
              I enjoy transforming ideas into practical applications by
              combining programming, modern web technologies and emerging
              technologies. I am continuously learning and working on
              projects that solve real-world problems.
            </p>

            <p className="text-gray-600 text-base md:text-lg leading-relaxed mt-5">
              My goal is to grow as a technology professional while building
              useful, scalable and impactful solutions.
            </p>

          </div>

          {/* Highlights */}
          <div
            data-aos="fade-left"
            data-aos-delay="200"
            className="grid grid-cols-2 gap-4"
          >

            <div className="bg-black text-white rounded-2xl p-7 min-h-[170px] flex flex-col justify-between hover:scale-105 transition-transform duration-300">
              <span className="text-4xl">01</span>
              <div>
                <h3 className="text-xl font-bold">AI & ML</h3>
                <p className="text-gray-400 text-sm mt-2">
                  Intelligent technology solutions
                </p>
              </div>
            </div>

            <div className="bg-gray-100 rounded-2xl p-7 min-h-[170px] flex flex-col justify-between hover:scale-105 transition-transform duration-300">
              <span className="text-4xl">02</span>
              <div>
                <h3 className="text-xl font-bold">Development</h3>
                <p className="text-gray-500 text-sm mt-2">
                  Modern web applications
                </p>
              </div>
            </div>

            <div className="bg-gray-100 rounded-2xl p-7 min-h-[170px] flex flex-col justify-between hover:scale-105 transition-transform duration-300">
              <span className="text-4xl">03</span>
              <div>
                <h3 className="text-xl font-bold">Innovation</h3>
                <p className="text-gray-500 text-sm mt-2">
                  Real-world problem solving
                </p>
              </div>
            </div>

            <div className="bg-black text-white rounded-2xl p-7 min-h-[170px] flex flex-col justify-between hover:scale-105 transition-transform duration-300">
              <span className="text-4xl">04</span>
              <div>
                <h3 className="text-xl font-bold">Continuous Learning</h3>
                <p className="text-gray-400 text-sm mt-2">
                  Always exploring new technologies
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* Technology Tags */}
        <div data-aos="fade-up" data-aos-delay="300" className="mt-16">

          <p className="text-xs font-bold uppercase tracking-[0.25em] text-gray-400 mb-5">
            Areas of Interest
          </p>

          <div className="flex flex-wrap gap-3">

            {[
              'Python',
              'Java',
              'C',
              'JavaScript',
              'React',
              'HTML & CSS',
              'Machine Learning',
              'Artificial Intelligence',
              'Firebase',
              'Git & GitHub',
              'SQL'
            ].map((skill) => (
              <span
                key={skill}
                className="px-5 py-2.5 rounded-full border border-gray-200 bg-gray-50 text-gray-800 font-medium text-sm hover:bg-black hover:text-white transition-all duration-300"
              >
                {skill}
              </span>
            ))}

          </div>

        </div>

      </div>

      {/* Decorative element */}
      <div className="absolute -right-20 top-20 w-72 h-72 rounded-full bg-gray-100 blur-3xl pointer-events-none"></div>

    </section>
  );
};

export default About;
```
