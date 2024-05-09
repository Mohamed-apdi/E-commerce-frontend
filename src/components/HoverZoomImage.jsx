import React, { useState } from 'react';

const HoverZoomImage = ({ src, zoomScale = 1.5, transitionSpeed = 300 }) => {
  const [isHovering, setIsHovering] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const { left, top, width, height } = e.target.getBoundingClientRect();
    // Adjusting calculations to include scroll offsets
    const x = ((e.pageX - window.pageXOffset - left) / width) * 100;
    const y = ((e.pageY - window.pageYOffset - top) / height) * 100;
    setMousePosition({ x, y });
  };

  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        backgroundImage: `url(${src})`,
        backgroundSize: isHovering ? `${zoomScale * 100}%` : 'cover',
        backgroundPosition: `${mousePosition.x}% ${mousePosition.y}%`,
        transition: `background-size ${transitionSpeed}ms, background-position ${transitionSpeed}ms`,
        cursor: 'crosshair'
      }}
      onMouseEnter={() => setIsHovering(true)}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setIsHovering(false)}
    />
  );
};

export default HoverZoomImage;
