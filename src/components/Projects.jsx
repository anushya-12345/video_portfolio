```jsx
import React from 'react';

const Projects = () => {
  return (
    <section
      id="projects"
      className="bg-white py-24 px-6 md:px-12 w-full"
    >
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <div data-aos="fade-up" className="mb-16">

          <p className="text-sm font-bold tracking-[0.3em] uppercase text-gray-500 mb-4">
            Current Work
          </p>

          <h2 className="text-5xl md:text-7xl font-black text-black leading-none">
            Currently
            <br />
            <span className="text-gray-400">Building.</span>
          </h2>

        </div>

        {/* Project Card */}
        <div
          data-aos="fade-up"
          className="group bg-black text-white rounded-3xl p-8 md:p-12 overflow-hidden relative"
        >

          {/* Background Number */}
          <div className="absolute right-5 top-0 text-[12rem] md:text-[18rem] font-black text-white/[0.03] leading-none select-none">
            01
          </div>

          <div className="relative z-10 max-w-4xl">

            {/* Status */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 bg-white/5 text-sm text-gray-300 mb-8">

              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>

              Ongoing / Enhancement Phase

            </div>

            {/* Title */}
            <h3 className="text-3xl md:text-5xl font-black leading-tight">
              AI-Enhanced
              <br />
              Tourist Guide
            </h3>

            {/* Description */}
            <p className="text-gray-400 text-base md:text-lg leading-relaxed max-w-3xl mt-7">
              Currently contributing to the enhancement of an existing
              AI-based Tourist Guide academic project. My work focuses on
              expanding its AI concepts and exploring intelligent features
              for personalized and location-aware tourism assistance.
            </p>

            {/* Contribution */}
            <div className="mt-10">

              <p className="text-xs uppercase tracking-[0.25em] text-gray-500 mb-4">
                Current Focus
              </p>

              <div className="flex flex-wrap gap-2">

                {[
                  'RAG',
                  'LLM',
                  'AI Chatbot',
                  'Voice AI',
                  'Multilingual AI',
                  'Recommendation Systems',
                  'Computer Vision',
                  'GPS',
                  'Cloud Computing',
                  'Offline Assistance'
                ].map((technology) => (

                  <span
                    key={technology}
                    className="px-4 py-2 rounded-full bg-white/10 border border-white/10 text-gray-300 text-sm"
                  >
                    {technology}
                  </span>

                ))}

              </div>

            </div>

            {/* Existing Technology */}
            <div className="mt-10">

              <p className="text-xs uppercase tracking-[0.25em] text-gray-500 mb-4">
                Existing Prototype
              </p>

              <div className="flex flex-wrap gap-2">

                {[
                  'React.js',
                  'Flask',
                  'Python',
                  'AI / LLM'
                ].map((technology) => (

                  <span
                    key={technology}
                    className="px-4 py-2 rounded-full bg-white text-black text-sm font-semibold"
                  >
                    {technology}
                  </span>

                ))}

              </div>

            </div>

            {/* Note */}
            <div className="mt-10 pt-8 border-t border-white/10">

              <p className="text-sm text-gray-500 leading-relaxed max-w-2xl">
                This project is currently under development and enhancement.
                Some proposed features are being explored and are not yet
                fully implemented or deployed.
              </p>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Projects;
```
