import { useState, useEffect } from 'react';

export const useSlideshow = (slideCount, interval = null) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (interval) {
      const timer = setInterval(() => {
        setCurrentIndex((prevIndex) => 
          prevIndex === slideCount - 1 ? 0 : prevIndex + 1
        );
      }, interval);

      return () => clearInterval(timer);
    }
  }, [slideCount, interval]);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const goToPrevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? slideCount - 1 : prevIndex - 1
    );
  };

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === slideCount - 1 ? 0 : prevIndex + 1
    );
  };

  return {
    currentIndex,
    goToSlide,
    goToPrevSlide,
    goToNextSlide
  };
};