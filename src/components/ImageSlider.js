import { useState, useEffect } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const ImageSlider = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const sliderStyles = {
    height: "100%",
    position: "relative",
    overflow:"hidden",
  };

  const slideStyles = {
    width: "100%",
    height: "100%",
    borderRadius: "10px",
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundImage: `url(${slides[currentIndex].url})`,
    transition:"background-image 1s"
  };

  const arrowStyles = {
    position: "absolute",
    top: "50%",
    transform: "translateY(-50%)",
    fontSize: "32px", // Adjust the font size here
    color: "#fff",
    zIndex: 1,
    cursor: "pointer",
    transition: "color 0.3s",
  };

  const leftArrowStyles = {
    ...arrowStyles,
    left: "16px",
  };

  const rightArrowStyles = {
    ...arrowStyles,
    right: "16px",
  };

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  useEffect(() => {
    // Automatically advance to the next slide every 3 seconds
    const intervalId = setInterval(goToNext, 3000);

    // Clean up the interval when the component unmounts
    return () => {
      clearInterval(intervalId);
    };
  }, [currentIndex]); // Run this effect whenever currentIndex changes

  return (
    <div style={sliderStyles}>
      <div
        style={leftArrowStyles}
        onClick={goToPrevious}
        className="arrow-button"
      >
        <FaArrowLeft />
      </div>
      <div
        style={rightArrowStyles}
        onClick={goToNext}
        className="arrow-button"
      >
        <FaArrowRight />
      </div>
      <div style={slideStyles}></div>
    </div>
  );
};

export default ImageSlider;
