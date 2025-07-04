import React from 'react';
import './gallery.css';
import img1 from './photo1.png';
import img2 from './photo2.png';
import img3 from './photo3.png';
import img4 from './photo4.png';
import img5 from './photo5.png';
import img6 from './photo6.png';
import img7 from './photo7.png';
import img8 from './photo8.png';
import img9 from './photo9.png';
import img10 from './photo10.png';

function Gallery() {
  const images = [
    img1, img2, img3, img4, img5,
    img6, img7, img8, img9, img10
  ];

  return (
    <div className="gallery-wrapper">
      <h2 className="gallery-title">My Photography Gallery</h2>
      <div className="gallery-grid">
        {images.map((img, index) => (
          <div className="gallery-item" key={index}>
            <img src={img} alt={`photo-${index}`} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Gallery;
