import React, { useState } from "react";

const PhotoGallery = () => {
  const [photos] = useState([
    "/path-to-photo1.jpg",
    "/path-to-photo2.jpg",
    "/path-to-photo3.jpg",
    // Add more photo paths here
  ]);

  return (
    <div className="photo-gallery">
      <h2>Photo Gallery</h2>
      <div className="photos">
        {photos.map((photo, index) => (
          <img key={index} src={photo} alt={`Memory ${index + 1}`} />
        ))}
      </div>
    </div>
  );
};

export default PhotoGallery;
