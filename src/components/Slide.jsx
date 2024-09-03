import React, { useState } from "react";
import arrowNext from "./../assets/images/arrow-next.png";
import arrowPrev from "./../assets/images/arrow-prev.png";
import "./../scss/Slide.scss";

export default function Slide ({slides}) {
  const images = slides;
  const [current, setCurrent] = useState(0);
  const length = images.length;

  const nextImage = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevImage = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  return (
    <div className="slide-container">
      {images.map((image, index) => {
        return (
          <div key={index} className="slide-images">
          {index === current && <img className="slide-img" src={image} alt="Photos Logement" />}
          </div>);
      })}

      {length > 1 && ( 
        <div className="slide-controls">
          <img src={arrowPrev} onClick={prevImage} className="slide-arrow" alt="Pécédent" />
          <img src={arrowNext} onClick={nextImage} className="slide-arrow" alt="Suivant" />
        </div>
      )}

      {length > 1 && ( 
        <div className="slide-counter">
          <p>
            {current + 1}/{length}
          </p>
        </div>
      )}
    </div>
  );
}

