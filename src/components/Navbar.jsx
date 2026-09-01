```jsx
import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Skills', id: 'skills' },
    { name: 'Current Work', id: 'projects' },
    { name: 'Contact', id: 'contact' }
  ];

  const handleNavigation = (id) => {
    setIsOpen(false);

    const section = document.getElementById(id);

    if (section) {
      section.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/70 backdrop-blur-xl border-b border-white/10">

      <div className="max-w-7xl mx-auto px-6 md:px-10">

        <div className="h-20 flex items-center justify-between">

          <button
            onClick={() => handleNavigation('home')}
            className="text-white font-black text-xl tracking-tight"
          >
            ANUSHYA<span className="text-gray-500">.</span>
          </button>

          <div className="hidden md:flex items-center gap-8">

            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavigation(link.id)}
                className="text-gray-300 hover:text-white text-sm font-semibold transition-colors"
              >
                {link.name}
              </button>
            ))}

          </div>

          <button
            onClick={() => handleNavigation('contact')}
            className="hidden md:block px-5 py-2.5 rounded-full bg-white text-black text-sm font-bold hover:bg-gray-200 transition-all hover:scale-105"
          >
            Let's Connect
          </button>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white p-2"
            aria-label="Toggle navigation menu"
          >

            {isOpen ? (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}

          </button>

        </div>
      </div>

      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          isOpen
            ? 'max-h-96 opacity-100 border-t border-white/10'
            : 'max-h-0 opacity-0'
        }`}
      >

        <div className="px-6 py-5 flex flex-col gap-4 bg-black/95">

          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleNavigation(link.id)}
              className="text-left text-white font-semibold py-2 border-b border-white/10"
            >
              {link.name}
            </button>
          ))}

          <button
            onClick={() => handleNavigation('contact')}
            className="mt-2 px-6 py-3 rounded-full bg-white text-black font-bold"
          >
            Let's Connect
          </button>

        </div>

      </div>

    </nav>
  );
};

export default Navbar;
```
