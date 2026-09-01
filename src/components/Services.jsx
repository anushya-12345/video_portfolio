import React, { useRef, useState } from 'react';
import { motion, useScroll, useSpring, useMotionValueEvent } from 'framer-motion';

const TagCard = ({ number, title, text, className, aosDelay, aosType, pathLength, containerRef }) => {
  const ref = useRef(null);
  const [isActive, setIsActive] = useState(false);

  useMotionValueEvent(pathLength, "change", (latest) => {
    if (!ref.current || !containerRef.current) return;
    
    const cardRect = ref.current.getBoundingClientRect();
    const containerRect = containerRef.current.getBoundingClientRect();
    
    const cardTopRelativeToContainer = cardRect.top - containerRect.top;
    const containerHeight = containerRect.height;
    
    // Trigger when the line tip is 50px into the card
    const triggerY = cardTopRelativeToContainer + 50;
    const lineTipY = latest * containerHeight;
    
    if (lineTipY >= triggerY && !isActive) {
      setIsActive(true);
    } else if (lineTipY < triggerY && isActive) {
      setIsActive(false);
    }
  });

  return (
    <div 
      ref={ref}
      data-aos={aosType || "fade-up"} 
      data-aos-delay={aosDelay}
      className={`w-72 sm:w-80 rounded-[2rem] p-2 relative flex flex-col items-center hover:scale-[1.02] transition-all duration-700 z-10 ${className} ${
        isActive ? 'bg-[#ff2a2a] border-red-400 shadow-[0_20px_50px_rgba(255,42,42,0.4)]' : 'bg-white border border-gray-200 shadow-[0_15px_40px_rgba(0,0,0,0.06)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.12)]'
      }`}
    >
      {/* The hole punch */}
      <div className="w-5 h-5 bg-gradient-to-br from-gray-300 to-gray-100 rounded-full shadow-[inset_0_2px_4px_rgba(0,0,0,0.3)] absolute top-4 border border-gray-300 z-10 flex items-center justify-center">
        <div className="w-2 h-2 bg-gray-800 rounded-full opacity-20"></div>
      </div>
      
      {/* Inner container */}
      <div className={`w-full h-full rounded-[1.5rem] mt-8 p-8 flex flex-col min-h-[220px] transition-colors duration-700 ${
        isActive ? 'bg-red-700/50' : 'bg-[#f4f4f4]'
      }`}>
        <span className={`text-xl font-bold mb-2 font-serif italic transition-colors duration-700 ${
          isActive ? 'text-red-200' : 'text-gray-400'
        }`}>{number}</span>
        
        <h3 className={`text-2xl font-black mb-3 tracking-tight transition-colors duration-700 ${
          isActive ? 'text-white' : 'text-gray-900'
        }`}>{title}</h3>
        
        <p className={`text-sm leading-relaxed font-medium transition-colors duration-700 ${
          isActive ? 'text-red-100' : 'text-gray-500'
        }`}>
          {text}
        </p>
      </div>
    </div>
  );
};

const Services = () => {
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const pathLength = useSpring(scrollYProgress, { stiffness: 60, damping: 20, restDelta: 0.001 });

  return (
    <section 
      id="services"
      ref={containerRef}
      className="bg-white pt-24 pb-32 px-6 md:px-12 w-full relative overflow-hidden font-sans bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:80px_80px]"
    >
      <div className="max-w-6xl mx-auto relative md:h-[1350px]">
        
        {/* Header Content */}
        <div data-aos="fade-up" className="md:absolute top-10 left-0 md:w-[450px] z-20 mb-16 md:mb-0">
          <div className="inline-block border border-gray-300 rounded-full px-5 py-1.5 text-sm text-gray-600 font-bold mb-8 shadow-sm bg-white">
            How we work
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 leading-[1.1] mb-6 tracking-tight relative">
            Let us show you how we drive your brand to new heights
            {/* Hand-drawn arrow */}
            <svg className="absolute -bottom-10 right-10 w-12 h-12 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" className="hidden" />
              <path d="M4 4 Q 10 10 15 15 M 15 15 L 10 15 M 15 15 L 15 10" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </h2>
          <p className="text-gray-500 text-base md:text-lg max-w-sm font-medium leading-relaxed">
            We follow a structured, creative, and highly technical approach to turn your ideas into robust full-stack applications.
          </p>
        </div>

        {/* Desktop SVG Animated Dashed Line */}
        <svg 
          className="hidden md:block absolute top-0 left-0 w-full h-[1350px] pointer-events-none z-0" 
          viewBox="0 0 1000 1350" 
          preserveAspectRatio="none"```jsx
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

        {/* Heading */}
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

        {/* Cards */}
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

                <span className="text-2xl group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform">
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

        {/* Technologies */}
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
                className="px-5 py-2.5 rounded-full bg-gray-100 text-gray-700 text-sm font-semibold hover:bg-black hover:text-white transition-colors"
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

export default Services;
```
