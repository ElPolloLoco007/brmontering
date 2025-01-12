import React, { useState, useEffect } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { photos } from "./photos";

const CustomGallery = ({ isVisible }) => {
  const [lightboxIndex, setLightboxIndex] = useState(-1);
  const [isMobile, setIsMobile] = useState(false);

  // Add a resize listener to detect if the screen width is less than 600px
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 600);
    };

    // Check initial size
    checkScreenSize();

    // Add resize event listener
    window.addEventListener("resize", checkScreenSize);

    // Cleanup on unmount
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  const handleImageClick = (index) => {
    setLightboxIndex(index);
  };

  useEffect(() => {
  }, [isVisible]);

  return (
    <div
      style={{
        maxWidth: isMobile ? "none" : "calc(100% - 400px)", // Remove max-width on mobile
        padding: isMobile ? "5px" : "20px", // Smaller padding on mobile
        backgroundColor: "#151515",
        opacity: isVisible ? 1 : 0,
        margin: isMobile ? "0" : "0 auto", // Disable centering on mobile
        backgroundColor: "#151515",
        opacity: isVisible ? 1 : 0,
        margin: "0 auto", // Center horizontally
        transform: isVisible ? "translateY(0)" : "translateY(20px)",
        transition: "opacity 1s ease-in-out, transform 1s ease-in-out",
      }}
    >
      <div
        style={{
          margin: "0 auto"
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "15px",
            '@media (max-width: 600px)': {
              gridTemplateColumns: "repeat(2, 1fr)", // Two images per row
              gap: "5px", // Smaller gap on small screens
            },
          }}
        >
          {photos.map((photo, index) => (
            <div
              key={index}
              style={{
                overflow: "hidden",
                borderRadius: "10px",
                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
              }}
            >
              <img
                src={photo.src}
                alt={`Photo ${index + 1}`}
                style={{
                  width: "100%",
                  height: "auto",
                  cursor: "pointer",
                }}
                onClick={() => handleImageClick(index)}
              />
            </div>
          ))}
        </div>
      </div>

      {lightboxIndex >= 0 && (
        <Lightbox
          open={lightboxIndex >= 0}
          close={() => setLightboxIndex(-1)}
          slides={photos.map((photo) => ({ src: photo.src }))}
          index={lightboxIndex}
          onIndexChange={setLightboxIndex}
        />
      )}
    </div>
  );
};

export default CustomGallery;