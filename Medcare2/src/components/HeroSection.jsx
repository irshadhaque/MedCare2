
import React, { useEffect, useState } from 'react';
import hero1 from '../assets/Homepage/hero1.jpg';
import hero2 from '../assets/Homepage/hero2.jpeg';
import hero3 from '../assets/Homepage/hero3.jpeg';

const images = [hero1, hero2, hero3];

const HeroSlider = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent(prev => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const handleDotClick = (index) => {
    setCurrent(index);
  };

  return (
    <div
      className="hero-slider"
      style={{
        backgroundImage: `url(${images[current]})`
      }}
    >
      <div className="hero-content">
        <h1>All in one Hospitality</h1>
        <p>A platform connecting all Hospitals, Patho-labs and Diagnostic Centres</p>
      </div>

      {/* Dots */}
      <div className="slider-dots">
        {images.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === current ? 'active' : ''}`}
            onClick={() => handleDotClick(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default HeroSlider;

