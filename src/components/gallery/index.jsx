import React, { useState, useEffect } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { photos } from "./photos";

const CustomGallery = ({ isVisible }) => {
  const [lightboxIndex, setLightboxIndex] = useState(-1);
  const [isMobile, setIsMobile] = useState(false);
  const [minHeight, setMinHeight] = useState("400px");

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 600);
      setMinHeight(window.innerHeight * 0.6 + "px");
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  const handleImageClick = (index) => {
    setLightboxIndex(index);
  };

  return (
    <div
      style={{
        maxWidth: isMobile ? "none" : "calc(100% - 400px)",
        padding: isMobile ? "15px" : "20px",
        backgroundColor: "#151515",
        opacity: isVisible ? 1 : 0,
        margin: "0 auto",
        transform: isVisible ? "translateY(0)" : "translateY(20px)",
        transition: "opacity 1s ease-in-out, transform 1s ease-in-out",
        minHeight: minHeight,
      }}
    >
      <div style={{ margin: "0 auto" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "15px",
            maxWidth: "1200px",
            margin: "0 auto",
            '@media (min-width: 1200px)': {
              gridTemplateColumns: "repeat(6, 1fr)",
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
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                height: "100%",
                minHeight: "315px",
              }}
            >
              <img
                src={photo.src}
                alt={`Photo ${index + 1}`}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
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
