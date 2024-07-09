'use client';
import React, { useState, useEffect } from 'react';


export default function Navbar() {
  const [showNav, setShowNav] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const show = window.scrollY > 500;
      if (show !== showNav) {
        setShowNav(show);
      }
    };

    document.addEventListener('scroll', handleScroll);
    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, [showNav]);

  return showNav ? (
    <nav className={`nav-bar fixed top-0 left-0 w-full z-50 transition-opacity duration-500 ease-in-out ${showNav ? 'opacity-100' : 'opacity-0'}`}>
  <div className="container mt-4 mx-auto px-6 py-2 flex justify-center items-center">
    <div className="nav-items flex justify-between items-center space-x-8">
      <a href="#about" className="nav-button text-lg font-semibold px-4 py-2 rounded bg-neutral-800 bg-opacity-80 text-white">About</a>
      <a href="#projects" className="nav-button text-lg font-semibold px-4 py-2 rounded bg-neutral-800 bg-opacity-80 text-white">Projects</a>
      <a href="#skills" className="nav-button text-lg font-semibold px-4 py-2 rounded bg-neutral-800 bg-opacity-80 text-white">Skills</a>
      <a href="#involvements" className="nav-button text-lg font-semibold px-4 py-2 rounded bg-neutral-800 bg-opacity-80 text-white">Involvement</a>
    </div>
  </div>
</nav>
  ) : null;
}