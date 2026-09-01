import React from 'react';

const Services = () => {
  const services = [
    {
      number: '01',
      title: 'AI / ML',
      text: 'Exploring Artificial Intelligence and Machine Learning concepts to build intelligent and practical solutions.'
    },
    {
      number: '02',
      title: 'Full Stack Development',
      text: 'Building modern web applications and learning frontend and backend technologies.'
    },
    {
      number: '03',
      title: 'Cloud Computing',
      text: 'Developing an interest in cloud technologies, deployment, scalable applications and cloud-based solutions.'
    },
    {
      number: '04',
      title: 'Innovation',
      text: 'Interested in transforming ideas into useful technology solutions through research, experimentation and development.'
    }
  ];

  return (
    <section
      id="skills"
      className="bg-white py-24 px-6 md:px-12 w-full"
    >
      <div className="max-w-6xl mx-auto">

        <div data-aos="fade-up" className="mb-16">
          <p className="text-sm font-bold tracking-[0.3em] uppercase text-gray-500 mb-4">
            What I Explore
          </p>

          <h2 className="text-5xl md:text-7xl font-black text-black leading-none">
            Skills &
            <br />
            <span className="text-gray-400">Interests.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {services.map((service, index) => (
            <div
              key={service.number}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="group border border-gray-200 rounded-3xl p-8 md:p-10 hover:bg-black hover:text-white transition-all duration-500"
            >
              <div className="flex justify-between items-start mb-12">
                <span className="text-sm font-bold text-gray-400 group-hover:text-gray-500">
                  {service.number}
                </span>

                <span className="text-2xl">
                  ↗
                </span>
              </div>

              <h3 className="text-2xl md:text-3xl font-black mb-4">
                {service.title}
              </h3>

              <p className="text-gray-500 group-hover:text-gray-400 leading-relaxed">
                {service.text}
              </p>
            </div>
          ))}

        </div>

        <div data-aos="fade-up" className="mt-16">

          <p className="text-xs uppercase tracking-[0.25em] text-gray-500 mb-6">
            Technologies & Concepts
          </p>

          <div className="flex flex-wrap gap-3">

            {[
              'Python',
              'C',
              'Java',
              'HTML',
              'CSS',
              'JavaScript',
              'React.js',
              'Flask',
              'Git',
              'GitHub',
              'AI / ML',
              'LLM',
              'RAG',
              'Cloud Computing'
            ].map((technology) => (
              <span
                key={technology}
                className="px-5 py-2.5 rounded-full bg-gray-100 text-gray-700 text-sm font-semibold"
              >
                {technology}
              </span>
            ))}

          </div>
        </div>

      </div>
    </section>
  );
};

export default Services
