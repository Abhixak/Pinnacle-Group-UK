import React, { useState, useRef } from "react";

const MagnifierImage = ({ src, alt, width = 180, height = 200, zoom = 2 }) => {
  const [showMagnifier, setShowMagnifier] = useState(false);
  const [magnifierPosition, setMagnifierPosition] = useState({ x: 0, y: 0 });
  const imgRef = useRef(null);

  const handleMouseMove = (e) => {
    const { top, left } = imgRef.current.getBoundingClientRect();
    const x = e.pageX - left - window.scrollX;
    const y = e.pageY - top - window.scrollY;
    setMagnifierPosition({ x, y });
  };

  return (
    <div
      className="relative cursor-none"
      style={{ width, height }}
      onMouseEnter={() => setShowMagnifier(true)}
      onMouseLeave={() => setShowMagnifier(false)}
      onMouseMove={handleMouseMove}
    >
      <img
        src={src}
        alt={alt}
        ref={imgRef}
        className="w-full h-full object-contain"
      />

      {showMagnifier && (
        <div
          style={{
            position: "absolute",
            pointerEvents: "none",
            top: `${magnifierPosition.y - 50}px`,
            left: `${magnifierPosition.x - 50}px`,
            width: "120px",
            height: "120px",
            // border: "1px solid #ccc",
            backgroundImage: `url(${src})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: `${width * zoom}px ${height * zoom}px`,
            backgroundPosition: `-${magnifierPosition.x * zoom - 50}px -${
              magnifierPosition.y * zoom - 50
            }px`,
            zIndex: 10,
            borderRadius: "4px",
          }}
          
        />
      )}
    </div>
  );
};

export default MagnifierImage;
