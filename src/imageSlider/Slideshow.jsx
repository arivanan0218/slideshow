import React, { useState, useEffect } from "react";
import "./Slideshow.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faPause, faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";

function Slideshow({ slides }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  // Go to the next slide
  const goToNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  // Go to the previous slide
  const goToPrevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  // Go to a specific slide by index
  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  // Auto-play functionality
  useEffect(() => {
    if (isPlaying && slides.length > 0) {
      const slideInterval = setInterval(goToNextSlide, 3000);
      return () => clearInterval(slideInterval);
    }
  }, [isPlaying, slides.length]);

  // Check if slides exist and display first slide image if available
  const hasSlides = slides && slides.length > 0;

  // Always generate exactly 5 dots
  const totalDots = 5;

  return (
    <div className="slideshow-container">
      {/* Slide Image */}
      <div className="slide">
        {hasSlides ? (
          <img src={slides[currentSlide]?.image} alt={`Slide ${currentSlide + 1}`} />
        ) : (
          <div>No images available</div> // Fallback when no slides exist
        )}
      </div>

      {/* Bottom Controls */}
      <div className="controls">
        {/* Play/Pause Button */}
        <button className="play-btn" onClick={() => setIsPlaying(!isPlaying)}>
          <FontAwesomeIcon icon={isPlaying ? faPause : faPlay} />
        </button>

        {/* Indicators */}
        <div className="indicators">
          {[...Array(totalDots)].map((_, index) => (
            <span
              key={index}
              className={`indicator ${currentSlide === index ? "active" : ""}`}
              onClick={() => goToSlide(index < slides.length ? index : 0)} // Ensure click does not exceed available slides
            ></span>
          ))}
        </div>

        {/* Navigation Buttons with Icons */}
        <button className="nav-btn" onClick={goToPrevSlide} disabled={!hasSlides}>
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>
        <button className="nav-btn" onClick={goToNextSlide} disabled={!hasSlides}>
          <FontAwesomeIcon icon={faChevronRight} />
        </button>
      </div>
    </div>
  );
}

export default Slideshow;
